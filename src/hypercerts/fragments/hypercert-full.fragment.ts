import { gqlHypercerts } from "../../graphql/hypercerts";

export const HypercertFullFragment = gqlHypercerts(`
  fragment HypercertFullFragment on Hypercert {
    metadata {
      name
      description
      external_url
      work_scope
      work_timeframe_from
      work_timeframe_to
      contributors
    }
    creation_block_timestamp
    hypercert_id
    contracts_id
    owner_address
    units
    attestations {
      data {
        attestation
        attestation_uid
        block_timestamp
        attester_address
      }
    }
    fractions {
      units
      owner_address
    }
  }
`);
