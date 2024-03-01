import { graphql } from "gql.tada";

export const attestationCardFragment = graphql(`
  fragment attestationCardFragment on Attestation {
    id
    decodedDataJson
  }
`);
