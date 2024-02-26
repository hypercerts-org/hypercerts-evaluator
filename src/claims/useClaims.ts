import { ClaimFragment } from "./fragments";
import { GQL_URL } from "../config";
import { graphql } from "gql.tada";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = graphql(
  `
    query claims($first: Int, $skip: Int) {
      claims(first: $first, skip: $skip) {
        ...ClaimFragment
      }
    }
  `,
  [ClaimFragment]
);

export const useAllClaims = (first: number, skip: number) => {
  return useQuery({
    queryKey: ["claims", first, skip],
    queryFn: async () => request(GQL_URL, query, { first, skip }),
  });
};
