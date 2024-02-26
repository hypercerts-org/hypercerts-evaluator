import { ResultOf, graphql } from "gql.tada";

import { GQL_URL } from "../config";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = graphql(`
  query claims($first: Int, $skip: Int) {
    claims(first: $first, skip: $skip) {
      id
      tokenID
      uri
    }
  }
`);

export type Claims = typeof query;
export type Claim = ResultOf<typeof query>["claims"][0];

export const useAllClaims = (first: number, skip: number) => {
  return useQuery({
    queryKey: ["attestation", first, skip],
    queryFn: async () => request(GQL_URL, query, { first, skip }),
  });
};
