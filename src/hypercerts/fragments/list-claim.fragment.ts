import { gqlHypercerts } from "../../graphql/hypercerts";

export const ListClaimFragment = gqlHypercerts(`
  fragment ListClaimFragment on Claim {
    id
    metadata {
      name
      description
    }
  }
`);
