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

import { AttestContext } from "../../pages/claim/[id]";
import { CopyButton } from "../ui/CopyButton";
import { FaRegThumbsUp } from "react-icons/fa6";
import { getEasConfig } from "../../eas/getEasConfig";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useNetwork } from "wagmi";

export function ConfirmationModal() {
  const attestContext = useContext(AttestContext);
  const { chain } = useNetwork();

  const easConfig = getEasConfig(chain?.id);

  if (
    !attestContext?.isConfirmationModalOpen ||
    !attestContext?.createdAttestationUid
  ) {
    return null;
  }

  return (
    <Modal
      isOpen={attestContext?.isConfirmationModalOpen || false}
      onClose={() => attestContext?.closeConfirmationModal()}
      size={"xl"}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textStyle={"secondary"} fontWeight={"100"}>
          Thank you!
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Flex
            gap={5}
            alignItems={"center"}
            justifyContent={"center"}
            h={"100px"}
          >
            <motion.div
              className="box"
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <FaRegThumbsUp style={{ width: "70px", height: "70px" }} />
            </motion.div>
            <Flex flexDirection={"column"} gap={2}>
              <Text fontSize="m">
                Your evaluation has been successfully submitted and saved as an
                attestation.
              </Text>
              <Text fontSize="m">
                View at easscan.org:{" "}
                <a
                  href={`${easConfig?.explorerUrl}/attestation/view/${attestContext?.createdAttestationUid}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {attestContext.createdAttestationUid.substring(0, 8)}...
                  {attestContext.createdAttestationUid.slice(-8)}
                </a>
                <CopyButton textToCopy={attestContext?.createdAttestationUid} />
              </Text>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
