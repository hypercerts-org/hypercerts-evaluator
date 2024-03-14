import { HYPERCERTS_API_URL } from "../../config";
import { ListClaimFragment } from "../fragments/list-claim.fragment";
import { gqlHypercerts } from "../../graphql/hypercerts";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";
export type AllClaimsSort =
  | "creation_asc"
  | "creation_desc"
  | "creation_asc"
  | "creation_desc";

const query = gqlHypercerts(
  `
    query claims(
      $first: Int
      $offset: Int
    ) {
      hypercertsCollection(
        first: $first
        offset: $offset
      ) {
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

export const useAllClaims = (
  first: number,
  offset: number,
  sort: AllClaimsSort
) => {
  return useQuery({
    queryKey: ["claims", first, offset, sort],
    queryFn: async () => {
      // const orderBy = sort.split("_")[0] as "creation";
      // const orderDirection = sort.split("_")[1] as "asc" | "desc";
      // const orderBy: hypercertsOrderBy = {
      //   block_timestamp: "DescNullsFirst" as const,
      // };

      return request(HYPERCERTS_API_URL, query, {
        first,
        offset,
      });
    },
  });
};
