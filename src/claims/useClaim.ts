import { ResultOf, graphql } from "gql.tada";

import { FullClaimFragment } from "./fragments";
import { HYPERCERTS_API_URL } from "../config";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = graphql(
  `
    query claim($id: ID!) {
      claim(id: $id) {
        ...FullClaimFragment
      }
    }
  `,
  [FullClaimFragment]
);

export const useClaim = (id: string) => {
  return useQuery({
    queryKey: ["claim", id],
    queryFn: async () => request(HYPERCERTS_API_URL, query, { id }),
  });
};
