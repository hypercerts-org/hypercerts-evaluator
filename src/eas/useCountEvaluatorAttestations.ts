import { ETH_DEFAULT_CHAIN_ID, EVALUATIONS_SCHEMA_UID } from "../config";

import { getEasConfig } from "./getEasConfig";
import { graphql } from "gql.tada";
import request from "graphql-request";
import { useNetwork } from "wagmi";
import { useQuery } from "@tanstack/react-query";

const query = graphql(
  `
    query CountEvaluatorAttestations($address: String!, $schemaId: String!) {
      aggregateAttestation(
        where: {
          AND: {
            attester: { equals: $address }
            schemaId: { equals: $schemaId }
          }
        }
      ) {
        _count {
          id
        }
      }
    }
  `
);

export const useCountEvaluatorAttestations = (address?: string) => {
  const easConfig = getEasConfig(ETH_DEFAULT_CHAIN_ID);
  return useQuery({
    queryKey: ["CountEvaluatorAttestations", address, ETH_DEFAULT_CHAIN_ID],
    queryFn: async () => {
      if (!address || !easConfig) return null;
      return request(easConfig.graphqlUrl, query, {
        address,
        schemaId: EVALUATIONS_SCHEMA_UID,
      });
    },
  });
};
