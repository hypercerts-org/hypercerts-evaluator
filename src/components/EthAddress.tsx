import { Text } from "@chakra-ui/react";
export default function EthAddress({ address }: { address?: string }) {
  if (!address) {
    return <Text>Unknown</Text>;
  }
  return (
    <Text>
      {address.slice(0, 6)}...{address.slice(-4)}
    </Text>
  );
}
