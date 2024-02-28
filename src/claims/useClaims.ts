import { HYPERCERTS_API_URL } from "../config";
import { ListClaimFragment } from "./fragments";
import { graphql } from "gql.tada";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = graphql(
  `
    query claims($first: Int, $skip: Int) {
      claims(
        first: $first
        skip: $skip
        where: { uri_not_starts_with: "ipfs://null" }
      ) {
        ...ListClaimFragment
      }
    }
  `,
  [ListClaimFragment]
);

export const useAllClaims = (first: number, skip: number) => {
  return useQuery({
    queryKey: ["claims", first, skip],
    queryFn: async () => request(HYPERCERTS_API_URL, query, { first, skip }),
  });
};
