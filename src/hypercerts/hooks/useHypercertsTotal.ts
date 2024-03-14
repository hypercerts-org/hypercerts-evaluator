import { HYPERCERTS_API_URL } from "../../config";
import { graphql } from "gql.tada";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = graphql(
  `
    query hypercertsTotal {
      hypercerts_total
    }
  `
);

export const useHypercertsTotal = () => {
  return useQuery({
    queryKey: ["hypercertsTotal"],
    queryFn: async () => {
      return request(HYPERCERTS_API_URL, query);
    },
  });
};
