import { graphql } from "gql.tada";

export const FullClaimFragment = graphql(`
  fragment FullClaimFragment on hypercerts {
    claim_id
    claim {
      owner
      creator
    }
    name
    description
    external_url
    work_scope
    work_timeframe_from
    work_timeframe_to
    properties
    attestations {
      attestation_uid
      decoded_attestation
    }
    contributors
    fractions {
      tokenID
      units
      owner
    }
  }
`);
