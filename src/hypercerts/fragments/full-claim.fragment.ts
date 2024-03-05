import { graphql } from "gql.tada";

export const FullClaimFragment = graphql(`
  fragment FullClaimFragment on Claim {
    id
    creator
    owner
    metadata {
      name
      description
      image
      external_url
      work_scope
      work_timeframe_from
      work_timeframe_to
      contributors
      properties
    }
  }
`);
