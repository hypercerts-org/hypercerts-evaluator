import * as R from "remeda";

import { Button, Text, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { AttestContext } from "../../pages/claim/[id]";
import { ClaimOwnersModal } from "./ClaimOwnersModal";
import EthAddress from "../ui/EthAddress";
import { FaChevronDown } from "react-icons/fa";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { readFragment } from "gql.tada";

const MAX_OWNERS_DISPLAYED = 5;

export default function ClaimOwners({ ...props }: { [key: string]: any }) {
  const [ownerDialogOpen, setOwnerDialogOpen] = useState(false);
  const attestContext = useContext(AttestContext);
  const claim = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claim) return null;

  let owners =
    R.isArray(claim.fractions) && claim.fractions.length > 0
      ? claim.fractions
      : [];

  return (
    <VStack p={5} alignItems={"flex-start"} width="100%" {...props}>
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Owners
      </Text>
      <VStack alignItems="flex-start">
        {owners.slice(0, MAX_OWNERS_DISPLAYED).map((owner, i) => (
          <Text key={i}>
            <EthAddress address={owner?.owner as string} showEnsName />
          </Text>
        ))}
        {owners.length === 0 && <Text>No owners</Text>}
      </VStack>
      <Button
        visibility={owners.length > MAX_OWNERS_DISPLAYED ? "visible" : "hidden"}
        aria-label="More"
        rightIcon={<FaChevronDown style={{ width: "10px", height: "10px" }} />}
        onClick={() => setOwnerDialogOpen(true)}
        variant="ghost"
        size="sm"
      >
        More
      </Button>
      <ClaimOwnersModal
        isOpen={ownerDialogOpen}
        onClose={() => setOwnerDialogOpen(false)}
      />
    </VStack>
  );
}
