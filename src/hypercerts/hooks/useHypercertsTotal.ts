import { HYPERCERTS_API_URL } from "../../config";
import { gqlHypercerts } from "../../graphql/hypercerts";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = gqlHypercerts(
  `
    query hypercertsTotal {
      hypercerts {
        count
      }
    }
  `
);

export const useHypercertsTotal = () => {
  return useQuery({
    queryKey: ["hypercerts-count"],
    queryFn: async () => {
      return request(HYPERCERTS_API_URL, query);
    },
  });
};
