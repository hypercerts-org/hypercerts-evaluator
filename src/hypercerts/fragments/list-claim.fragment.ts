import { graphql } from "gql.tada";

export const ListClaimFragment = graphql(`
  fragment ListClaimFragment on hypercerts {
    claim_id
    uri
    name
    block_timestamp
  }
`);
