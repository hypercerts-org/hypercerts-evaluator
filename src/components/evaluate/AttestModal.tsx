import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";

import { EAS_SCHEMA_UID_EVALUATIONS } from "../../config";
import { useEasConfig } from "../../eas/hooks/useEasConfig";
import { useNetwork } from "wagmi";
import { useSigner } from "../../wagmi/hooks/useSigner";
import { useState } from "react";

export function AttestModal({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}) {
  const { chain } = useNetwork();
  const easConfig = useEasConfig(chain?.id);
  const signer = useSigner();
  const [isAttesting, setIsAttesting] = useState(false);

  async function attest() {
    if (!signer || !easConfig) return;

    setIsAttesting(true);

    const eas = new EAS(easConfig.address);
    eas.connect(signer);

    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder("bool like");

    // Encode the data according to schema
    const encodedData = schemaEncoder.encodeData([
      { name: "like", value: true, type: "bool" },
    ]);

    try {
      const tx = await eas.attest({
        schema: EAS_SCHEMA_UID_EVALUATIONS,
        data: {
          recipient: "0x0000000000000000000000000000000000000000",
          expirationTime: BigInt(0),
          revocable: false,
          data: encodedData,
        },
      });
      await tx.wait();
      console.log("Attestation sent");
      onClose();
    } catch (e) {
      console.error(e);
    }
    setIsAttesting(false);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Save attestation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Message</ModalBody>

        <ModalFooter>
          <Button onClick={attest}>
            {isAttesting ? "Attesting..." : "Attest"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
