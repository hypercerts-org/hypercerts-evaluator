import { gqlHypercerts } from "../../graphql/hypercerts";

export const FullClaimFragment = gqlHypercerts(`
  fragment FullClaimFragment on Claim {
    id
    creator
    owner
    metadata {
      name
      description
      external_url
      work_scope
      work_timeframe_from
      work_timeframe_to
      contributors
      properties
    }
  }
`);
