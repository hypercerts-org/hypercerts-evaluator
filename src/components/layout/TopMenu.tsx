import { Box, Flex, Heading } from "@chakra-ui/react";

import Link from "next/link";
import { useEffect } from "react";
import { useGlobalState } from "../../state";
import { useRouter } from "next/router";

export default function TopMenu() {
  const router = useRouter();
  const hypercertsCurrentPath = useGlobalState(
    (state) => state.hypercertsCurrentPath
  );
  const setHypercertsCurrentPath = useGlobalState(
    (state) => state.setHypercertsCurrentPath
  );

  const isCertRoute =
    router.pathname.startsWith("/claim") || router.pathname === "/";

  // Remember the current path for the Hypercerts link so we can return to it
  // when clicking on the Hypercerts top menu item
  useEffect(() => {
    if (router.asPath.startsWith("/?")) {
      setHypercertsCurrentPath(router.asPath);
    }
  }, [router.asPath, setHypercertsCurrentPath]);

  return (
    <Flex width={"100%"} justifyContent={"center"}>
      <Flex width={"800px"} border={"1px solid black"}>
        <Link href={hypercertsCurrentPath} style={{ width: "50%" }}>
          <Box
            justifyContent={"center"}
            display={"flex"}
            p={5}
            backgroundColor={isCertRoute ? "black" : "inherit"}
            _hover={{
              backgroundColor: isCertRoute ? "black" : "rgba(0,0,0,0.1)",
            }}
          >
            <Heading
              textStyle={"secondary"}
              fontWeight={"100"}
              size={"md"}
              textColor={isCertRoute ? "white" : "inherit"}
            >
              Hypercerts
            </Heading>
          </Box>
        </Link>
        <Link href="/evaluators" style={{ width: "50%" }}>
          <Box
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
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
}
