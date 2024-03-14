import { Flex, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { isValidUrl } from "../../utils/isValidUrl";

const DESCRIPTION_MAX_LENGTH = 250;
const URL_MAX_LENGTH = 40;

export default function ClaimTitle({
  claim,
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
}) {
  let _claim = readFragment(FullClaimFragment, claim);

  const externalUrl = isValidUrl(_claim.external_url)
    ? _claim.external_url
    : null;

  const description =
    _claim.description && _claim.description.length > DESCRIPTION_MAX_LENGTH
      ? _claim.description?.substring(0, DESCRIPTION_MAX_LENGTH) + "..."
      : _claim.description;

  const externalUrlDescription =
    externalUrl && externalUrl.length > URL_MAX_LENGTH
      ? externalUrl.substring(0, URL_MAX_LENGTH) + "..."
      : externalUrl;

  return (
    <Flex flexDirection={"column"} gap="2" p="10" overflow="hidden">
      <Text as="h2" fontSize="lg" textStyle="secondary" fontWeight={100}>
        {_claim.name}
      </Text>
      <Text>{description}</Text>
      {externalUrl && (
        <Text>
          <a href={externalUrl} target="_blank" rel="norefferer">
            {externalUrlDescription}
          </a>
        </Text>
      )}
    </Flex>
  );
}
