import { HYPERCERTS_API_URL } from "../../config";
import { ListClaimFragment } from "../fragments/list-claim.fragment";
import { graphql } from "gql.tada";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

export type AllClaimsSort =
  | "creation_asc"
  | "creation_desc"
  | "creation_asc"
  | "creation_desc";

const query = graphql(
  `
    query claims(
      $first: Int
      $skip: Int
      $orderBy: Claim_orderBy
      $orderDirection: OrderDirection
    ) {
      claims(
        first: $first
        skip: $skip
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: { uri_not_starts_with: "ipfs://null" }
      ) {
        ...ListClaimFragment
      }
    }
  `,
  [ListClaimFragment]
);

export const useAllClaims = (
  first: number,
  skip: number,
  sort: AllClaimsSort
) => {
  return useQuery({
    queryKey: ["claims", first, skip, sort],
    queryFn: async () => {
      const orderBy = sort.split("_")[0] as "creation";
      const orderDirection = sort.split("_")[1] as "asc" | "desc";

      return request(HYPERCERTS_API_URL, query, {
        first,
        skip,
        orderBy,
        orderDirection,
      });
    },
  });
};
