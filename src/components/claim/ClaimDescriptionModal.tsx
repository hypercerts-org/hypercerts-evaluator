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
import { HypercertFullFragment } from "../../hypercerts/fragments/hypercert-full.fragment";
import { readFragment } from "gql.tada";

export function ClaimDescriptionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(HypercertFullFragment, attestContext?.claim);
  if (!claim) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textStyle={"secondary"} fontWeight={"100"}>
          Description
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack>
            <Text>{claim.metadata?.data?.[0]?.description}</Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
