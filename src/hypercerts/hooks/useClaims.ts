import * as R from "remeda";

import { HYPERCERTS_API_URL } from "../../config";
import { ListClaimFragment } from "../fragments/list-claim.fragment";
import { VariablesOf } from "gql.tada";
import { gqlHypercerts } from "../../graphql/hypercerts";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

export type ClaimsOrderBy =
  | "timestamp_asc"
  | "timestamp_desc"
  | "name_asc"
  | "name_desc";

export type ClaimsFilter = "all" | "evaluated";

const query = gqlHypercerts(
  `
    query claims($first: Int, $offset: Int, $orderBy: [hypercertsOrderBy!], $filter: hypercertsFilter!) {
      hypercertsCollection(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
        totalCount
        edges {
          node {
            ...ListClaimFragment
          }
        }
      }
    }
  `,
  [ListClaimFragment]
);

type VariableTypes = VariablesOf<typeof query>;

function createOrderBy({
  orderBy,
}: {
  orderBy?: ClaimsOrderBy;
}): VariableTypes["orderBy"] {
  if (orderBy) {
    const orderByAttribute = orderBy.split("_")[0];
    const orderByDirection = orderBy.split("_")[1];
    if (orderByAttribute === "timestamp") {
      return [
        {
          block_timestamp:
            orderByDirection === "asc" ? "AscNullsFirst" : "DescNullsFirst",
        },
      ];
    }
    if (orderByAttribute === "name") {
      return [
        {
          name: orderByDirection === "asc" ? "AscNullsFirst" : "DescNullsFirst",
        },
      ];
    }
  }

  return [];
}

function createFilter({
  filter,
  search,
}: {
  filter?: ClaimsFilter;
  search?: string;
}): VariableTypes["filter"] {
  if (search && search.length > 2) {
    const searchNumber = Number.parseInt(search);
    if (R.isNumber(searchNumber)) {
      return {
        claim_id: { eq: searchNumber },
      };
    }
    return { name: { like: `%${search}%` } };
  }
  return {};
}

export const useAllClaims = ({
  first,
  offset,
  orderBy,
  filter,
  search,
}: {
  first: number;
  offset: number;
  orderBy?: ClaimsOrderBy;
  filter?: ClaimsFilter; //TODO Implement filter
  search?: string;
}) => {
  return useQuery({
    queryKey: ["claims", first, offset, orderBy, search],
    queryFn: async () => {
      const _orderBy = createOrderBy({ orderBy });
      const _filter = createFilter({ filter, search });

      return request(HYPERCERTS_API_URL, query, {
        first,
        offset,
        orderBy: _orderBy,
        filter: _filter,
      });
    },
  });
};
