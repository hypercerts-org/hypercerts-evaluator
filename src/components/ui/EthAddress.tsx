import { Flex, Text } from "@chakra-ui/react";

import { CopyButton } from "./CopyButton";
import JazziconImage from "./Jazzicon";

export default function EthAddress({ address }: { address?: string }) {
  if (!address) {
    return <Text>Unknown</Text>;
  }

  return (
    <>
      <Flex alignItems={"center"} gap={1}>
        <JazziconImage address={address} />
        {address.slice(0, 6)}...{address.slice(-4)}
        <CopyButton textToCopy={address} />
      </Flex>
    </>
  );
}
