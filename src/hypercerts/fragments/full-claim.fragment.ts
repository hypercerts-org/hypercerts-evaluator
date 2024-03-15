import { gqlHypercerts } from "../../graphql/hypercerts";

export const FullClaimFragment = gqlHypercerts(`
  fragment FullClaimFragment on hypercerts {
    claim_id
    claim {
      contract
      owner
      creator
      totalUnits
    }
    name
    description
    external_url
    work_scope
    work_timeframe_from
    work_timeframe_to
    properties
    claimAttestations {
      count
      data {
        decoded_attestation
        attestation_uid
        block_timestamp
        attester_address
      }
    }
    contributors
    fractions {
      tokenID
      units
      owner
    }
  }
`);
