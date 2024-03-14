import * as R from "remeda";

import { Text, VStack } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import EthAddress from "../ui/EthAddress";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { readFragment } from "gql.tada";
import { useContext } from "react";

export default function ClaimOwners({ ...props }: { [key: string]: any }) {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claim) return null;

  let owners =
    R.isArray(claim.fractions) && claim.fractions.length > 0
      ? claim.fractions
      : [];

  return (
    <VStack
      p={5}
      alignItems={"flex-start"}
      width="100%"
      borderLeft={"1px solid black"}
      {...props}
    >
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Owners
      </Text>
      <VStack alignItems="flex-start">
        {owners.map((owner, i) => (
          <Text key={i}>
            <EthAddress address={owner?.owner as string} showEnsName />
          </Text>
        ))}
        {owners.length === 0 && <Text>No owners</Text>}
      </VStack>
    </VStack>
  );
}
