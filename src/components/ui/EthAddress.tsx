import { Flex, Text, useToast } from "@chakra-ui/react";

import { CopyButton } from "./CopyButton";
import JazziconImage from "./Jazzicon";
import { useEnsName } from "wagmi";
import { useState } from "react";

export default function EthAddress({ address }: { address?: string }) {
  const [hover, setHover] = useState(false);
  const toast = useToast();
  const ensName = useEnsName({ address: address as `0x${string}` | undefined });

  if (!address) {
    return <Text>Unknown</Text>;
  }

  const copyAddress = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    void navigator.clipboard.writeText(address);
    toast({
      title: "Copied.",
      status: "info",
      duration: 1000,
      position: "top",
    });
  };

  return (
    <>
      <Flex
        alignItems={"center"}
        gap={1}
        _hover={{ textDecoration: "underline" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        cursor={"pointer"}
      >
        <JazziconImage address={address} />
        <Text onClick={copyAddress}>
          {ensName.data || address.slice(0, 6)}...{address.slice(-4)}
        </Text>
        {hover && <CopyButton textToCopy={address} />}
      </Flex>
    </>
  );
}
