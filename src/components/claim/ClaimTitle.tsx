import { Flex, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import { AttestContext } from "../../pages/claim/[id]";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { isValidUrl } from "../../utils/isValidUrl";
import { useContext } from "react";

const DESCRIPTION_MAX_LENGTH = 250;
const URL_MAX_LENGTH = 40;

export default function ClaimTitle() {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claim) return null;

  const externalUrl = isValidUrl(claim.external_url)
    ? claim.external_url
    : null;

  const description =
    claim.description && claim.description.length > DESCRIPTION_MAX_LENGTH
      ? claim.description?.substring(0, DESCRIPTION_MAX_LENGTH) + "..."
      : claim.description;

  const externalUrlDescription =
    externalUrl && externalUrl.length > URL_MAX_LENGTH
      ? externalUrl.substring(0, URL_MAX_LENGTH) + "..."
      : externalUrl;

  return (
    <Flex flexDirection={"column"} gap="2" p="10" overflow="hidden">
      <Text as="h2" fontSize="lg" textStyle="secondary" fontWeight={100}>
        {claim.name}
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
