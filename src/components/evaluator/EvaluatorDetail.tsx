import { Flex, Heading, Text } from "@chakra-ui/react";

import EnsName from "../ui/EnsName";
import EthAddress from "../ui/EthAddress";
import EvaluatorEvaluationsList from "../../components/evaluator/EvaluatorEvaluationsList";
import FullpageLoader from "../../components/FullpageLoader";
import LoadError from "../../components/LoadError";
import OrgItems from "./OrgItems";
import { UserIcon } from "../ui/UserIcon";
import { useRouter } from "next/router";
import { useTrustedAttestor } from "../../github/hooks/useTrustedAttestor";
import { useTrustedAttestors } from "../../github/hooks/useTrustedAttestors";

export default function EvaluatorDetails() {
  const router = useRouter();
  const { address } = router.query;
  const { data: attestors, isPending, error } = useTrustedAttestors();
  const attestor = useTrustedAttestor({
    address: typeof address === "string" ? address : undefined,
  });

  if (isPending) {
    return <FullpageLoader />;
  }

  if (typeof address !== "string") {
    return <LoadError>Invalid address</LoadError>;
  }

  if (error || !attestors || !attestor) {
    console.error(error);
    return <LoadError>Could not load trusted attestors.</LoadError>;
  }

  return (
    <>
      <Flex
        borderLeft={"1px solid black"}
        borderRight={"1px solid black"}
        borderBottom={"1px solid black"}
      >
        <Flex p={5} w="250px" justifyContent={"center"}>
          <UserIcon address={attestor.eth_address} size="huge" />
        </Flex>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          borderLeft={"1px solid black"}
          w="100%"
        >
          <Flex direction={"column"} gap={2} p={10} justifyContent={"center"}>
            <EnsName address={attestor.eth_address} fontSize="lg" />
            <EthAddress address={attestor.eth_address} />{" "}
          </Flex>
          <Flex
            direction={"column"}
            borderTop={"1px solid black"}
            w="100%"
            p={5}
            gap={2}
          >
            <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
              Organisations
            </Text>
            <OrgItems orgs={attestor.orgs} />
          </Flex>
        </Flex>
      </Flex>

      <Heading
        textStyle={"secondary"}
        fontWeight={"100"}
        size={"md"}
        whiteSpace={"nowrap"}
      >
        Evaluations
      </Heading>
      <EvaluatorEvaluationsList address={address} />
    </>
  );
}
