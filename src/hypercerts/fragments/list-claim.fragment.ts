import { gqlHypercerts } from "../../graphql/hypercerts";

export const ListClaimFragment = gqlHypercerts(`
  fragment ListClaimFragment on hypercerts {
    claim_id
    uri
    name
    block_timestamp
  }
`);
