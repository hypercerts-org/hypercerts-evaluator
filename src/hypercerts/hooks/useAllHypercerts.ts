import { HYPERCERTS_API_URL } from "../../config";
import { HypercertListFragment } from "../fragments/hypercert-list.fragment";
import { VariablesOf } from "gql.tada";
import { gqlHypercerts } from "../../graphql/hypercerts";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

export type ClaimsOrderBy =
  | "timestamp_asc"
  | "timestamp_desc"
  | "name_asc"
  | "name_desc"
  | "attestations_asc"
  | "attestations_desc";

export type ClaimsFilter = "all" | "evaluated";

const query = gqlHypercerts(
  `
    query AllHypercerts($where: HypercertsWhereInput, $sort: HypercertFetchInput, $first: Int, $offset: Int) {
      hypercerts(where: $where, first: $first, offset: $offset, count: COUNT, sort: $sort) {
        count
        data {
          ...HypercertListFragment
        }
      }
    }
  `,
  [HypercertListFragment]
);

type VariableTypes = VariablesOf<typeof query>;

function createOrderBy({
  orderBy,
}: {
  orderBy?: ClaimsOrderBy;
}): VariableTypes["sort"] {
  if (orderBy) {
    const orderByAttribute = orderBy.split("_")[0];
    const orderByDirection = orderBy.split("_")[1];
    if (orderByAttribute === "timestamp") {
      return {
        by: {
          creation_block_timestamp:
            orderByDirection === "asc" ? "ascending" : "descending",
        },
      };
    }
    if (orderByAttribute === "attestations") {
      return {
        by: {
          claim_attestation_count:
            orderByDirection === "asc" ? "ascending" : "descending",
        },
      };
    }
  }
}

function createFilter({
  filter,
  search,
}: {
  filter?: ClaimsFilter;
  search?: string;
}): VariableTypes["where"] {
  const where: VariableTypes["where"] = {};
  if (search && search.length > 2) {
    where.metadata = { name: { contains: search } };
  }
  if (filter === "evaluated") {
    where.attestations = {};
  }
  return where;
}

export const useAllHypercerts = ({
  first,
  offset,
  orderBy,
  search,
  filter,
}: {
  first: number;
  offset: number;
  orderBy?: ClaimsOrderBy;
  search?: string;
  filter?: ClaimsFilter;
}) => {
  return useQuery({
    queryKey: ["hypercerts", first, offset, orderBy, search, filter],
    queryFn: async () => {
      return request(HYPERCERTS_API_URL, query, {
        first,
        offset,
        sort: createOrderBy({ orderBy }),
        where: createFilter({ search, filter }),
      });
    },
  });
};
