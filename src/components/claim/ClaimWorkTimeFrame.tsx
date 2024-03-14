import * as R from "remeda";

import { Text, VStack } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { readFragment } from "gql.tada";
import { useContext } from "react";

export default function ClaimWorkTimeFrame({
  ...props
}: {
  [key: string]: any;
}) {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claim) return null;

  if (
    !R.isNumber(claim.work_timeframe_from) ||
    !R.isNumber(claim.work_timeframe_to)
  ) {
    return null;
  }

  let workTimeFrameFrom = claim.work_timeframe_from
    ? new Date(claim.work_timeframe_from)
    : null;
  let workTimeFrameTo = claim.work_timeframe_to
    ? new Date(claim.work_timeframe_to)
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
