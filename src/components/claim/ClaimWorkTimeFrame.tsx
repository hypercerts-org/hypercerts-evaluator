import { FragmentOf, readFragment } from "gql.tada";
import { Text, VStack } from "@chakra-ui/react";

import EthAddress from "../EthAddress";
import { FullClaimFragment } from "../../claims/fragments";

export default function ClaimWorkTimeFrame({
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
        Work Scope
      </Text>
      <Text>
        {_claim.metadata?.work_timeframe_from as string} →{" "}
        {_claim.metadata?.work_timeframe_to as string}
      </Text>
    </VStack>
  );
}
