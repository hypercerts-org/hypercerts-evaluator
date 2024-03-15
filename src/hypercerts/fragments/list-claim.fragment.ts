import { gqlHypercerts } from "../../graphql/hypercerts";

export const ListClaimFragment = gqlHypercerts(`
  fragment ListClaimFragment on hypercerts {
    claim_id
    name
    block_timestamp
    claimAttestations {
      count
    }
  }
`);
