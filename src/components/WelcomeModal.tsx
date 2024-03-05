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

import { useRef } from "react";

export function WelcomeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textStyle={"secondary"} fontWeight={"100"}>
          Welcome to the Hypercerts Evaluator
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack>
            <Text>
              Evaluations are a cornerstone of the hypercerts ecosystem. This
              first version of the Hypercerts Evaluator allows a group of
              trusted evaluators attest to the correctness of the hypercert
              claim data.
            </Text>
            <Text>
              In future versions, we will extend the group of evaluators as well
              as the scope of evaluations to include impact evaluations, etc.
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
