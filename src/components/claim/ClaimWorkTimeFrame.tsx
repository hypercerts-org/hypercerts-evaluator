import * as R from "remeda";

import { FragmentOf, readFragment } from "gql.tada";
import { Text, VStack } from "@chakra-ui/react";

import EthAddress from "../ui/EthAddress";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";

export default function ClaimWorkTimeFrame({
  claim,
  ...props
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
  [key: string]: any;
}) {
  let _claim = readFragment(FullClaimFragment, claim);

  if (
    !R.isNumber(_claim.work_timeframe_from) ||
    !R.isNumber(_claim.work_timeframe_to)
  ) {
    return null;
  }

  let workTimeFrameFrom = _claim.work_timeframe_from
    ? new Date(_claim.work_timeframe_from)
    : null;
  let workTimeFrameTo = _claim.work_timeframe_to
    ? new Date(_claim.work_timeframe_to)
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
