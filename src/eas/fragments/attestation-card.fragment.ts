import { gqlEas } from "../../graphql/eas";

export const attestationCardFragment = gqlEas(`
  fragment attestationCardFragment on Attestation {
    id
    decodedDataJson
    timeCreated
  }
`);
