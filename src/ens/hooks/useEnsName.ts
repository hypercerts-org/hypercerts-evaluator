import { HYPERCERTS_API_URL } from "../../config";
import { graphql } from "gql.tada";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = graphql(
  `
    query getEnsName($id: String!) {
      getEnsName(where: { id: $id }) {
        name
      }
    }
  `
);

export const useEnsName = (address?: string) => {
  return useQuery({
    queryKey: ["ensName", address],
    queryFn: async () => {
      if (!address) return null;
      return request(HYPERCERTS_API_URL, query, { id: address });
    },
  });
};
