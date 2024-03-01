import { Box, Flex, Heading } from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";

export default function TopMenu() {
  const router = useRouter();

  const isCertRoute =
    router.pathname.startsWith("/claim") || router.pathname === "/";

  return (
    <Flex width={"100%"} justifyContent={"center"}>
      <Flex
        width={"700px"}
        borderBottom={"1px solid black"}
        borderLeft={"1px solid black"}
        borderRight={"1px solid black"}
      >
        <Box
          w="50%"
          justifyContent={"center"}
          display={"flex"}
          p={5}
          backgroundColor={isCertRoute ? "black" : "inherit"}
          _hover={{
            backgroundColor: isCertRoute ? "black" : "rgba(0,0,0,0.1)",
          }}
        >
          <Link href="/">
            <Heading
              textStyle={"secondary"}
              fontWeight={"100"}
              size={"md"}
              textColor={isCertRoute ? "white" : "inherit"}
            >
              Hypercerts
            </Heading>
          </Link>
        </Box>
        <Box
          w="50%"
          justifyContent={"center"}
          display={"flex"}
          borderLeft={"1px solid black"}
          p={5}
          backgroundColor={
            router.pathname.startsWith("/evaluator") ? "black" : "inherit"
          }
          _hover={{
            backgroundColor: router.pathname.startsWith("/evaluator")
              ? "black"
              : "rgba(0,0,0,0.1)",
          }}
        >
          <Link href="/evaluators">
            <Heading
              textStyle={"secondary"}
              fontWeight={"100"}
              size={"md"}
              textColor={
                router.pathname.startsWith("/evaluator") ? "white" : "inherit"
              }
            >
              Evaluators
            </Heading>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
