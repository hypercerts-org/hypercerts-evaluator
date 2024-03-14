import * as R from "remeda";

import { FragmentOf, readFragment } from "gql.tada";
import { Text, VStack } from "@chakra-ui/react";

import EthAddress from "../ui/EthAddress";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";

export default function ClaimOwners({
  claim,
  ...props
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
  [key: string]: any;
}) {
  let _claim = readFragment(FullClaimFragment, claim);

  let owners =
    R.isArray(_claim.fractions) && _claim.fractions.length > 0
      ? _claim.fractions
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
            <EthAddress address={owner?.owner as string} />
          </Text>
        ))}
        {owners.length === 0 && <Text>No owners</Text>}
      </VStack>
    </VStack>
  );
}
