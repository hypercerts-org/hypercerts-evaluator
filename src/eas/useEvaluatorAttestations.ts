import { ETH_DEFAULT_CHAIN_ID, EVALUATIONS_SCHEMA_UID } from "../config";

import { attestationCardFragment } from "./fragments/attestation-card.fragment";
import { getEasConfig } from "./getEasConfig";
import { gqlEas } from "../graphql/eas";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

const query = gqlEas(
  `
    query EvaluatorAttestations($address: String!, $schemaId: String!) {
      attestations(
        where: {
          AND: {
            attester: { equals: $address }
            schemaId: { equals: $schemaId }
          }
        }
      ) {
        ...attestationCardFragment
      }
    }
  `,
  [attestationCardFragment]
);

export const useEvaluatorAttestations = (address?: string) => {
  const easConfig = getEasConfig(ETH_DEFAULT_CHAIN_ID);
  return useQuery({
    queryKey: ["EvaluatorAttestations", address, ETH_DEFAULT_CHAIN_ID],
    queryFn: async () => {
      if (!address || !easConfig) return null;
      return request(easConfig.graphqlUrl, query, {
        address,
        schemaId: EVALUATIONS_SCHEMA_UID,
      });
    },
  });
};
