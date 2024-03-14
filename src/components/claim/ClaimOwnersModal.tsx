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
          Owners
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack alignItems="flex-start">
            {owners.map((owner, i) => (
              <Text key={i}>
                <EthAddress address={owner?.owner as string} showEnsName />
              </Text>
            ))}
            {owners.length === 0 && <Text>No owners</Text>}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
