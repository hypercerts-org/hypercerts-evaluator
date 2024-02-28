import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function FullpageLoader() {
  return (
    <Flex justifyContent="center" alignItems="center" grow={1}>
      <Image
        src="/hypercerts_logo.svg"
        alt="Hypercerts Logo"
        width={50}
        height={50}
        className="spin"
      />
    </Flex>
  );
}
