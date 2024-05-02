import { gqlHypercerts } from "../../graphql/hypercerts";

export const HypercertListFragment = gqlHypercerts(`
  fragment HypercertListFragment on Hypercert {
    metadata {
      name
    }
    attestations {
      totalCount
    }
    creation_block_timestamp
    hypercert_id
  }
`);
