import { Flex, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { AttestContext } from "../../pages/claim/[id]";
import { ClaimDescriptionModal } from "./ClaimDescriptionModal";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { isValidUrl } from "../../utils/isValidUrl";
import { readFragment } from "gql.tada";

const DESCRIPTION_MAX_LENGTH = 250;
const URL_MAX_LENGTH = 40;

export default function ClaimTitle() {
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  const attestContext = useContext(AttestContext);
  const claim = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claim) return null;

  const externalUrl = isValidUrl(claim.external_url)
    ? claim.external_url
    : null;

  const truncateDescription =
    claim.description !== null &&
    claim.description.length > DESCRIPTION_MAX_LENGTH;

  const description = truncateDescription
    ? claim.description?.substring(0, DESCRIPTION_MAX_LENGTH) + "..."
    : claim.description;

  const externalUrlDescription =
    externalUrl && externalUrl.length > URL_MAX_LENGTH
      ? externalUrl.substring(0, URL_MAX_LENGTH) + "..."
      : externalUrl;

  const clickDescription = () => {
    if (truncateDescription) {
      setIsDescriptionModalOpen(true);
    }
  };

  return (
    <Flex flexDirection={"column"} gap="2" p="10" overflow="hidden">
      <Text as="h2" fontSize="lg" textStyle="secondary" fontWeight={100}>
        {claim.name}
      </Text>
      <Text
        onClick={clickDescription}
        cursor={truncateDescription ? "pointer" : "default"}
      >
        {description}{" "}
      </Text>
      {externalUrl && (
        <Text>
          <a href={externalUrl} target="_blank" rel="norefferer">
            {externalUrlDescription}
          </a>
        </Text>
      )}
      <ClaimDescriptionModal
        isOpen={isDescriptionModalOpen}
        onClose={() => setIsDescriptionModalOpen(false)}
      />
    </Flex>
  );
}
