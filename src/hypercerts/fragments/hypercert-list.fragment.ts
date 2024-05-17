import { gqlHypercerts } from "../../graphql/hypercerts";

export const HypercertListFragment = gqlHypercerts(`
  fragment HypercertListFragment on Hypercert {
    metadata {
      data { 
        name
      }
    }
    attestations {
      count
    }
    creation_block_timestamp
    hypercert_id
  }
`);
