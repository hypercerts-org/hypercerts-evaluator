import { FragmentOf, readFragment } from "gql.tada";
import { Text, VStack } from "@chakra-ui/react";

import EthAddress from "../ui/EthAddress";
import { FullClaimFragment } from "../../hypercerts/fragments";

export default function ClaimProperties({
  claim,
  ...props
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
  [key: string]: any;
}) {
  let _claim = readFragment(FullClaimFragment, claim);
  return (
    <VStack p={5} alignItems={"flex-start"} width="100%" {...props}>
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Properties
      </Text>
      <Text>…</Text>
    </VStack>
  );
}
