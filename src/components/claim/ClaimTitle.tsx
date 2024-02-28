import { Flex, Heading, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import { FullClaimFragment } from "../../claims/fragments";

export default function ClaimTitle({
  claim,
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
}) {
  let _claim = readFragment(FullClaimFragment, claim);
  return (
    <Flex flexDirection={"column"} gap="5" width="100%" p="5">
      <Heading as="h2" size="md" textStyle="secondary" fontWeight={100}>
        {_claim.metadata?.name}
      </Heading>
      <Text>{_claim.metadata?.description}</Text>
      <Text>{_claim.metadata?.external_url}</Text>
    </Flex>
  );
}
