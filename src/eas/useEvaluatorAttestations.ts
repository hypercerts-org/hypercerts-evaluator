import { EAS } from "@ethereum-attestation-service/eas-sdk";
import { EVALUATIONS_SCHEMA_UID } from "../config";
import { attestationCardFragment } from "./fragments/attestation-card.fragment";
import { getEasConfig } from "./getEasConfig";
import { graphql } from "gql.tada";
import request from "graphql-request";
import { useNetwork } from "wagmi";
import { useQuery } from "@tanstack/react-query";

const query = graphql(
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
  const { chain } = useNetwork();
  const easConfig = getEasConfig(chain?.id);
  return useQuery({
    queryKey: ["EvaluatorAttestations", address, chain?.id],
    queryFn: async () => {
      if (!address || !chain || !easConfig) return null;
      return request(easConfig.graphqlUrl, query, {
        address,
        schemaId: EVALUATIONS_SCHEMA_UID,
      });
    },
  });
};
