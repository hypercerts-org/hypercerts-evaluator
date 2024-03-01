import { mainnet, useEnsName } from "wagmi";

import { Text } from "@chakra-ui/react";

export default function EnsName({ address }: { address?: string }) {
  const { data: ensName } = useEnsName({
    address: address as `0x${string}`,
    chainId: mainnet.id,
  });

  if (!address || !ensName) return null;

  return <Text as="b">{ensName}</Text>;
}
