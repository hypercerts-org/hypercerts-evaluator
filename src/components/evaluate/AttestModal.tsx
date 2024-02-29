import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import EvaluateToggle, { ToggleState } from "./EvaluateToggle";

import { EAS_SCHEMA_UID_EVALUATIONS } from "../../config";
import { useEasConfig } from "../../eas/hooks/useEasConfig";
import { useNetwork } from "wagmi";
import { useSigner } from "../../wagmi/hooks/useSigner";
import { useState } from "react";

type AllToggleState = {
  basics: ToggleState;
  work: ToggleState;
  properties: ToggleState;
  contributors: ToggleState;
};

export function AttestModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { chain } = useNetwork();
  const easConfig = useEasConfig(chain?.id);
  const signer = useSigner();
  const [isAttesting, setIsAttesting] = useState(false);
  const [allToggleState, setAllToggleState] = useState<AllToggleState>({
    basics: "none",
    work: "none",
    properties: "none",
    contributors: "none",
  });

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
      onClose();
    } catch (e) {
      console.error(e);
    }
    setIsAttesting(false);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Evaluate Hypercert</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" gap={5}>
            <Text>
              Review and evaluate the information in the Hypercert. Create
              attestations where you certify or dismiss the information. You
              also have the option to leave a comment that will be displayed
              along with your evaluation.
            </Text>

            <Text as="b">
              All attestation fields are optional. Review only those sections
              where you confidently can attest to the correctness of the data.
            </Text>

            <VStack alignItems={"flex-start"} width="100%">
              <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
                Basics
              </Text>
              <Flex justifyContent="space-between" w="100%" alignItems="center">
                <Text>Name, description, URL, creator, owner</Text>
                <EvaluateToggle
                  state={allToggleState.basics}
                  setState={(state) =>
                    setAllToggleState({ ...allToggleState, basics: state })
                  }
                />
              </Flex>
            </VStack>

            <VStack alignItems={"flex-start"} width="100%">
              <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
                Work
              </Text>
              <Flex justifyContent="space-between" w="100%" alignItems="center">
                <Text>Work scope and timeframe</Text>
                <EvaluateToggle
                  state={allToggleState.work}
                  setState={(state) =>
                    setAllToggleState({ ...allToggleState, work: state })
                  }
                />
              </Flex>
            </VStack>

            <VStack alignItems={"flex-start"} width="100%">
              <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
                Properties
              </Text>
              <Flex justifyContent="space-between" w="100%" alignItems="center">
                <Text>(Not available on all certs)</Text>
                <EvaluateToggle
                  state={allToggleState.properties}
                  setState={(state) =>
                    setAllToggleState({ ...allToggleState, properties: state })
                  }
                />
              </Flex>
            </VStack>

            <VStack alignItems={"flex-start"} width="100%">
              <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
                Contributors
              </Text>
              <Flex justifyContent="space-between" w="100%" alignItems="center">
                <Text>The contributors involved in the work</Text>
                <EvaluateToggle
                  state={allToggleState.contributors}
                  setState={(state) =>
                    setAllToggleState({
                      ...allToggleState,
                      contributors: state,
                    })
                  }
                />
              </Flex>
            </VStack>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Flex gap={5} justifyContent={"center"} w="100%">
            <Button onClick={onClose} variant="blackAndWhiteOutline" w={40}>
              Cancel
            </Button>
            <Button onClick={attest} variant="blackAndWhite" w={40}>
              {isAttesting ? "Attesting..." : "Attest"}
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
