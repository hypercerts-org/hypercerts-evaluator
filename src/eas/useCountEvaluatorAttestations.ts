import { EAS } from "@ethereum-attestation-service/eas-sdk";
import { EVALUATIONS_SCHEMA_UID } from "../config";
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
  const { chain } = useNetwork();
  const easConfig = getEasConfig(chain?.id);
  return useQuery({
    queryKey: ["CountEvaluatorAttestations", address, chain?.id],
    queryFn: async () => {
      if (!address || !chain || !easConfig) return;
      return request(easConfig.graphqlUrl, query, {
        address,
        schemaId: EVALUATIONS_SCHEMA_UID,
      });
    },
  });
};
