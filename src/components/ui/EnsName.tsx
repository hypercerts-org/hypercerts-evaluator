import { mainnet, useEnsName } from "wagmi";

import { Text } from "@chakra-ui/react";

export default function EnsName({
  address,
  ...props
}: {
  address?: string;
  [key: string]: any;
}) {
  const { data: ensName } = useEnsName({
    address: address as `0x${string}`,
    chainId: mainnet.id,
  });

  if (!address || !ensName) return null;

  return <Text {...props}>{ensName}</Text>;
}
