import { Flex, Heading, Show } from "@chakra-ui/react";

import { ConnectButton } from "../ui/ConnectButton";
import Image from "next/image";
import Link from "next/link";
import { ProfileInfo } from "../ProfileInfo";
import React from "react";
import { useAccount } from "wagmi";

export const TopHeader = () => {
  const { isConnected, address } = useAccount();
  return (
    <Flex width={"100%"} alignItems={"center"} justifyContent={"center"} my={5}>
      <Flex
        width={"700px"}
        height={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        border={"1px solid black"}
        p={5}
      >
        <Link href="/">
          <Flex gap={5} w={"400px"}>
            <Image
              src="/hypercerts_logo.svg"
              alt="Hypercerts Logo"
              width={30}
              height={30}
            />
            <Heading fontWeight={"100"} fontSize={"lg"} whiteSpace={"nowrap"}>
              Hypercerts Evaluator
            </Heading>
          </Flex>
        </Link>
        <Flex ml={"auto"} alignItems={"center"} height={"100%"}>
          <Show above={"md"}>
            <ConnectButton />
          </Show>
          <Show below={"md"}>
            {isConnected && address && (
              <Flex
                px={4}
                borderLeft={"1px solid black"}
                backgroundColor={"white"}
                height={"100%"}
              >
                <ProfileInfo address={address} />
              </Flex>
            )}
            <Flex
              alignItems={"center"}
              borderLeft={"1px solid black"}
              height={"100%"}
            ></Flex>
          </Show>
        </Flex>
      </Flex>
    </Flex>
  );
};
