import { Flex, Text } from "@chakra-ui/react";

import EthAddress from "../ui/EthAddress";
import { isNumber } from "remeda";

type Owner = {
  owner: unknown;
  units: unknown;
  tokenID: unknown;
};

export default function ClaimOwnersRow({
  owner,
  totalUnits,
}: {
  owner?: Owner | null;
  totalUnits?: unknown;
}) {
  const _units = Number.parseInt(owner?.units as string);
  const _totalUnits = Number.parseInt(totalUnits as string);
  if (!owner || !isNumber(_units) || !isNumber(_totalUnits)) return null;

  const percentage = ((_units / _totalUnits) * 100) as number;
  return (
    <Flex width="100%" justifyContent="space-between">
      <EthAddress address={owner.owner as string} showEnsName />
      {percentage.toFixed(2)}%
    </Flex>
  );
}
