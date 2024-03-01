import { Box, Flex } from "@chakra-ui/react";

import EnsName from "../ui/EnsName";
import EthAddress from "../ui/EthAddress";
import EvaluationsCount from "./EvaluationsCount";
import OrgIcons from "./OrgIcons";
import { TrustedAttestor } from "../../github/types/trusted-attestor.type";
import { UserIcon } from "../ui/UserIcon";

export default function EvaluatorRow({
  attestor,
  ...props
}: {
  attestor: TrustedAttestor;
  [key: string]: any;
}) {
  return (
    <Flex gap={2} {...props}>
      <UserIcon address={attestor.eth_address} size="large" />
      <Flex direction={"column"} justifyContent={"center"} alignItems={"start"}>
        <EnsName address={attestor.eth_address} as="b" />
        <EthAddress address={attestor.eth_address} />{" "}
      </Flex>
      <Flex grow={1} />
      <Flex direction={"column"} justifyContent={"center"}>
        <OrgIcons orgs={attestor.orgs} />
      </Flex>
      <Flex grow={1} />
      <Flex direction={"column"} justifyContent={"center"}>
        <EvaluationsCount address={attestor.eth_address} />
      </Flex>
    </Flex>
  );
}
