import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

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
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { EVALUATIONS_SCHEMA, EVALUATIONS_SCHEMA_UID } from "../../config";
import EvaluateToggle, { ToggleState } from "./EvaluateToggle";
import { useAccount, useNetwork } from "wagmi";

import { BiSolidErrorAlt } from "react-icons/bi";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { isChainIdSupported } from "../../wagmi/isChainIdSupported";
import { isTrustedAttestor } from "../../github/isTrustedAttestor";
import { useEasConfig } from "../../eas/hooks/useEasConfig";
import { useSigner } from "../../wagmi/hooks/useSigner";
import { useState } from "react";
import { useTrustedAttestors } from "../../github/useTrustedAttestors";

type AllToggleState = {
  basics: ToggleState;
  work: ToggleState;
  properties: ToggleState;
  contributors: ToggleState;
};

function isAnySectionEvaluated(state: AllToggleState) {
  return (
    state.basics !== "none" ||
    state.work !== "none" ||
    state.properties !== "none" ||
    state.contributors !== "none"
  );
}

function isAnySectionInvalid(state: AllToggleState) {
  return (
    state.basics === "invalid" ||
    state.work === "invalid" ||
    state.properties === "invalid" ||
    state.contributors === "invalid"
  );
}

function AttestModalContent({
  onClose,
  claimId,
}: {
  onClose: () => void;
  claimId: string;
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
  const [comments, setComments] = useState<string>("");

  // At least one of the sections must be evaluated, and if any section is invalid,
  // a comment is required.
  let isDisabled =
    !isAnySectionEvaluated(allToggleState) ||
    (isAnySectionInvalid(allToggleState) && comments === "");

  async function attest() {
    if (!signer || !easConfig) return;

    setIsAttesting(true);

    const eas = new EAS(easConfig.address);
    eas.connect(signer);

    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder(EVALUATIONS_SCHEMA);

    // Encode the data according to schema
    const encodedData = schemaEncoder.encodeData([
      { name: "hypercert_id", value: claimId, type: "string" },
      {
        name: "evaluate_basic",
        value: allToggleState.basics,
        type: "bytes32",
      },
      { name: "evaluate_work", value: allToggleState.work, type: "bytes32" },
      {
        name: "evaluate_contributors",
        value: allToggleState.contributors,
        type: "bytes32",
      },
      {
        name: "evaluate_properties",
        value: allToggleState.properties,
        type: "bytes32",
      },
      { name: "comments", value: comments, type: "string" },
      { name: "tags", value: [], type: "string[]" },
    ]);

    try {
      const tx = await eas.attest({
        schema: EVALUATIONS_SCHEMA_UID,
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
    <>
      <ModalBody>
        <Flex direction="column" gap={5}>
          <Text>
            Review and evaluate the information in the Hypercert. Create
            attestations where you mark sections as <strong>valid</strong> or{" "}
            <strong>invalid</strong>. You also have the option to leave a
            comment that will be displayed along with your evaluation.
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

          <VStack alignItems={"flex-start"} width="100%">
            <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
              Tags
            </Text>
            <Text>
              Tags add context to the attestation and makes it easier to find.
            </Text>
            <Tags defaultValue="a,b,c" className="tags" />
          </VStack>

          <VStack alignItems={"flex-start"} width="100%">
            <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
              Comments
            </Text>
            <Textarea
              placeholder="Any comments entered here are saved with the attetstation. A comment is required when a section has been dismissed."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </VStack>
        </Flex>
      </ModalBody>

      <ModalFooter>
        <Flex gap={5} justifyContent={"center"} w="100%">
          <Button onClick={onClose} variant="blackAndWhiteOutline" w="50%">
            Cancel
          </Button>
          <Button
            isDisabled={isDisabled}
            isLoading={isAttesting}
            loadingText="Creating attestation"
            onClick={attest}
            variant="blackAndWhite"
            w="50%"
          >
            Create attestation
          </Button>
        </Flex>
      </ModalFooter>
    </>
  );
}

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
          <AttestModalContent onClose={onClose} claimId={claimId} />
        )}
      </ModalContent>
    </Modal>
  );
}
