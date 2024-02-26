import { ResultOf, graphql } from "gql.tada";

import { ClaimFragment } from "./fragments";
import { GQL_URL } from "../config";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = graphql(
  `
    query claim($id: ID!) {
      claim(id: $id) {
        ...ClaimFragment
      }
    }
  `,
  [ClaimFragment]
);

export const useClaim = (id: string) => {
  return useQuery({
    queryKey: ["claim", id],
    queryFn: async () => request(GQL_URL, query, { id }),
  });
};
