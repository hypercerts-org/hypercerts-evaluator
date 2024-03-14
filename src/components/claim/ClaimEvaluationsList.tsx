import { Flex, Text } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { readFragment } from "gql.tada";
import { useContext } from "react";

export default function ClaimEvaluationsList() {
  const attestContext = useContext(AttestContext);
  const claimFragment = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claimFragment) return null;

  console.log("claimFragment", claimFragment);

  const attestations = claimFragment.attestations;

  return (
    <Flex borderLeft={"1px solid black"} borderRight={"1px solid black"}>
      <Flex flexDirection={"column"} w="50%">
        {attestations ? (
          attestations.map(
            (attestation) =>
              attestation && (
                <Flex
                  key={attestation.attestation_uid}
                  borderBottom={"1px solid black"}
                >
                  {JSON.stringify(attestation.decoded_attestation)}
                </Flex>
              )
          )
        ) : (
          <Text>No attestations</Text>
        )}
      </Flex>
    </Flex>
  );
}
