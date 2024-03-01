import { Flex, Heading, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
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
    <Flex flexDirection={"column"} gap="2" width="100%" p="10">
      <Text as="h2" fontSize="lg" textStyle="secondary" fontWeight={100}>
        {_claim.metadata?.name}
      </Text>
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
