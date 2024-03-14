import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";

import { AttestContext } from "../../pages/claim/[id]";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { readFragment } from "gql.tada";

export function ClaimDescriptionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claim) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textStyle={"secondary"} fontWeight={"100"}>
          Hypercert Description
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack>
            <Text>{claim.description}</Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
