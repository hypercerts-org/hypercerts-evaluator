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
    contract {
      chain_id
      contract_address
    }
    owner_address
    units
    attestations {
      data {
        data
        uid
        block_timestamp
        attester
      }
    }
    fractions {
      data {
        units
        owner_address
      }
    }
    token_id
  }
`);
