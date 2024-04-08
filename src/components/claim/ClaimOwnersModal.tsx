import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

import * as R from "remeda";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import ClaimOwnersRow from "./ClaimOwnersRow";
import EthAddress from "../ui/EthAddress";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { readFragment } from "gql.tada";
import { useContext } from "react";

export function ClaimOwnersModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claim) return null;

  let owners =
    R.isArray(claim.fractions) && claim.fractions.length > 0
      ? claim.fractions
      : [];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textStyle={"secondary"} fontWeight={"100"}>
          Ownership
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack alignItems="flex-start">
            <VStack alignItems="flex-start" w="100%">
              {owners.map((owner, i) => (
                <ClaimOwnersRow
                  key={i}
                  owner={owner}
                  totalUnits={claim.claim?.totalUnits}
                />
              ))}
              {owners.length === 0 && <Text>No owners</Text>}
            </VStack>
            {owners.length === 0 && <Text>No owners</Text>}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
