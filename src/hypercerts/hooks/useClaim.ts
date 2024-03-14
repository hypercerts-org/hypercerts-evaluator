import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { HYPERCERTS_API_URL } from "../../config";
import { gqlHypercerts } from "../../graphql/hypercerts";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = gqlHypercerts(
  `
    query claim($claim_id: BigFloat!) {
      hypercertsCollection(filter: { claim_id: { eq: $claim_id } }) {
        edges {
          node {
            ...FullClaimFragment
          }
        }
      }
    }
  `,
  [FullClaimFragment]
);

export const useClaim = (claim_id?: string) => {
  return useQuery({
    queryKey: ["claim", claim_id],
    queryFn: async () => {
      if (!claim_id) return null;
      return request(HYPERCERTS_API_URL, query, { claim_id });
    },
  });
};
