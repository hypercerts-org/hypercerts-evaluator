import { FragmentOf, readFragment } from "gql.tada";
import { Text, VStack } from "@chakra-ui/react";

import EthAddress from "../ui/EthAddress";
import { FullClaimFragment } from "../../claims/fragments";

export default function ClaimWorkTimeFrame({
  claim,
  ...props
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
  [key: string]: any;
}) {
  let _claim = readFragment(FullClaimFragment, claim);

  let workTimeFrameFrom = _claim.metadata?.work_timeframe_from
    ? new Date(_claim.metadata?.work_timeframe_from as string)
    : null;
  let workTimeFrameTo = _claim.metadata?.work_timeframe_to
    ? new Date(_claim.metadata?.work_timeframe_to as string)
    : null;

  return (
    <VStack p={5} alignItems={"flex-start"} width="100%" {...props}>
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Work Scope
      </Text>
      <Text>
        {workTimeFrameFrom && workTimeFrameTo
          ? workTimeFrameFrom.toISOString().substring(0, 10) +
            " → " +
            workTimeFrameTo.toISOString().substring(0, 10)
          : "No work time frame"}
      </Text>
    </VStack>
  );
}
