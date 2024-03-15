import { Flex, Text } from "@chakra-ui/react";

import EthAddress from "../ui/EthAddress";

type Owner = {
  owner: unknown;
  units: unknown;
  tokenID: unknown;
};

export default function ClaimOwnersRow({ owner }: { owner?: Owner | null }) {
  if (!owner) return null;
  return (
    <Flex width="100%" justifyContent="space-between">
      <EthAddress address={owner.owner as string} showEnsName />
      {owner.units as string}
    </Flex>
  );
}
