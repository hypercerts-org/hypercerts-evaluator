import { graphql } from "gql.tada";

export const ListClaimFragment = graphql(`
  fragment ListClaimFragment on Claim {
    id
    metadata {
      name
      description
    }
  }
`);
