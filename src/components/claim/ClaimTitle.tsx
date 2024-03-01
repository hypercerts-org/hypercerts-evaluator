import { Flex, Heading, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import { FullClaimFragment } from "../../hypercerts/fragments";
import { isValidUrl } from "../../utils/isValidUrl";

export default function ClaimTitle({
  claim,
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
}) {
  let _claim = readFragment(FullClaimFragment, claim);

  const externalUrl = isValidUrl(_claim.metadata?.external_url)
    ? _claim.metadata?.external_url
    : null;

  return (
    <Flex flexDirection={"column"} gap="5" width="100%" p="5">
      <Heading as="h2" size="md" textStyle="secondary" fontWeight={100}>
        {_claim.metadata?.name}
      </Heading>
      <Text>{_claim.metadata?.description}</Text>
      {externalUrl && (
        <Text>
          <a href={externalUrl} target="_blank" rel="norefferer">
            {externalUrl}
          </a>
        </Text>
      )}
    </Flex>
  );
}
