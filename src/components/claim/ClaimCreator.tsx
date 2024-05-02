import { FragmentOf, readFragment } from "gql.tada";
import { Text, VStack } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import EthAddress from "../ui/EthAddress";
import { HypercertFullFragment } from "../../hypercerts/fragments/hypercert-full.fragment";
import { useContext } from "react";

export default function ClaimCreator({ ...props }: { [key: string]: any }) {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(HypercertFullFragment, attestContext?.claim);
  if (!claim) return null;
  return (
    <VStack p={5} alignItems={"flex-start"} width="100%" {...props}>
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Creator
      </Text>
      <Text>
        <EthAddress address={claim.owner_address as string} />
      </Text>
    </VStack>
  );
}
