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
    query claims($first: Int, $offset: Int, $orderBy: [hypercertsOrderBy!]) {
      hypercertsCollection(first: $first, offset: $offset, orderBy: $orderBy) {
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

export const useAllClaims = (
  first: number,
  offset: number,
  orderBy?: ClaimsOrderBy,
  filter?: ClaimsFilter //TODO Implement filter
) => {
  return useQuery({
    queryKey: ["claims", first, offset, orderBy],
    queryFn: async () => {
      let _orderBy: VariableTypes["orderBy"] = [];
      if (orderBy) {
        const orderByAttribute = orderBy.split("_")[0];
        const orderByDirection = orderBy.split("_")[1];
        if (orderByAttribute === "timestamp") {
          _orderBy = [
            {
              block_timestamp:
                orderByDirection === "asc" ? "AscNullsFirst" : "DescNullsFirst",
            },
          ];
        }
        if (orderByAttribute === "name") {
          _orderBy = [
            {
              name:
                orderByDirection === "asc" ? "AscNullsFirst" : "DescNullsFirst",
            },
          ];
        }
      }

      return request(HYPERCERTS_API_URL, query, {
        first,
        offset,
        orderBy: _orderBy,
      });
    },
  });
};
