import * as R from "remeda";

import { Button, Flex, Tag, TagLabel, Text, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { AttestContext } from "../../pages/claim/[id]";
import { ClaimOwnersModal } from "./ClaimOwnersModal";
import ClaimOwnersRow from "./ClaimOwnersRow";
import { FaChevronDown } from "react-icons/fa";
import { HypercertFullFragment } from "../../hypercerts/fragments/hypercert-full.fragment";
import { readFragment } from "gql.tada";

const MAX_OWNERS_DISPLAYED = 5;

export default function ClaimOwners({ ...props }: { [key: string]: any }) {
  const [ownerDialogOpen, setOwnerDialogOpen] = useState(false);
  const attestContext = useContext(AttestContext);
  const claim = readFragment(HypercertFullFragment, attestContext?.claim);
  if (!claim) return null;

  let owners =
    R.isArray(claim.fractions) && claim.fractions.length > 0
      ? claim.fractions
      : [];

  return (
    <VStack p={5} alignItems={"flex-start"} width="100%" {...props}>
      <Flex width="100%" justifyContent="space-between">
        <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
          Ownership
        </Text>
        {owners.length > MAX_OWNERS_DISPLAYED && (
          <Tag size={"sm"} borderRadius="full">
            <TagLabel>{owners.length}</TagLabel>
          </Tag>
        )}
      </Flex>
      <VStack alignItems="flex-start" w="100%">
        {owners.slice(0, MAX_OWNERS_DISPLAYED).map((owner, i) => (
          <ClaimOwnersRow key={i} owner={owner} totalUnits={claim.units} />
        ))}
        {owners.length === 0 && <Text>No owners</Text>}
      </VStack>
      <Flex width="100%" justifyContent="center">
        <Button
          visibility={
            owners.length > MAX_OWNERS_DISPLAYED ? "visible" : "hidden"
          }
          aria-label="More"
          rightIcon={
            <FaChevronDown style={{ width: "10px", height: "10px" }} />
          }
          onClick={() => setOwnerDialogOpen(true)}
          variant="ghost"
          size="sm"
        >
          More
        </Button>
      </Flex>
      <ClaimOwnersModal
        isOpen={ownerDialogOpen}
        onClose={() => setOwnerDialogOpen(false)}
      />
    </VStack>
  );
}
