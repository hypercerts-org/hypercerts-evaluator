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
} from "@chakra-ui/react";
import { useAccount, useNetwork } from "wagmi";

import { AttestModalBody } from "./AttestModalBody";
import { BiSolidErrorAlt } from "react-icons/bi";
import { isChainIdSupported } from "../../wagmi/isChainIdSupported";
import { isTrustedAttestor } from "../../github/isTrustedAttestor";
import { useState } from "react";
import { useTrustedAttestors } from "../../github/useTrustedAttestors";

export function AttestModal({
  isOpen,
  onClose,
  claimId,
}: {
  isOpen: boolean;
  onClose: () => void;
  claimId: string;
}) {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { data: trustedAttestors, isPending, error } = useTrustedAttestors();
  const [isAttesting, setIsAttesting] = useState(false);

  const createDisabled =
    isPending ||
    isAttesting ||
    !chain ||
    !address ||
    !isChainIdSupported(chain.id) ||
    !isTrustedAttestor(trustedAttestors, address as string);

  const SubmitMessage = () => {
    if (!chain || !address) {
      return <Text>Connect your wallet to attest.</Text>;
    }

    if (!isChainIdSupported(chain.id)) {
      return <Text>Please connect to a supported chain to attest.</Text>;
    }

    if (isPending) {
      return null;
    }

    if (error) {
      return <Text>Error fetching trusted attestors.</Text>;
    }

    if (!isTrustedAttestor(trustedAttestors, address as string)) {
      return (
        <Text fontSize="m">
          You are not listed as a trusted attestor. See the{" "}
          <a
            href="https://github.com/hypercerts-org/hypercerts-attestor-registry"
            target="_blank"
          >
            {" "}
            Hypercerts Attestor Registry
          </a>{" "}
          for more information.
        </Text>
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={"xl"}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Evaluate Hypercert</ModalHeader>
        <ModalCloseButton />

        {createDisabled ? (
          <ModalBody>
            <Flex
              gap={5}
              alignItems={"center"}
              justifyContent={"center"}
              h={"100px"}
            >
              <BiSolidErrorAlt style={{ width: "70px", height: "70px" }} />
              <SubmitMessage />
            </Flex>
          </ModalBody>
        ) : (
          <AttestModalBody onClose={onClose} claimId={claimId} />
        )}
      </ModalContent>
    </Modal>
  );
}
