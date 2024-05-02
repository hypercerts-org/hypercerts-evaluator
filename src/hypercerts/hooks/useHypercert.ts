import { HYPERCERTS_API_URL } from "../../config";
import { HypercertFullFragment } from "../fragments/hypercert-full.fragment";
import { gqlHypercerts } from "../../graphql/hypercerts";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = gqlHypercerts(
  `
    query Hypercert($hypercert_id: String) {
      hypercerts(where: {hypercert_id: {eq: $hypercert_id}}) {
        data {
          ...HypercertFullFragment
        }
      }
    }
  `,
  [HypercertFullFragment]
);

export const useHypercert = (hypercertId?: string) => {
  return useQuery({
    queryKey: ["hypercert", hypercertId],
    queryFn: async () => {
      if (!hypercertId) return null;
      return request(HYPERCERTS_API_URL, query, { hypercert_id: hypercertId });
    },
  });
};
