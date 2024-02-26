import { graphql } from "gql.tada";

export const ClaimFragment = graphql(`
  fragment ClaimFragment on Claim {
    id
    metadata {
      name
      description
    }
  }
`);
