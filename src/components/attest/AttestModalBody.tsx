import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

import {
  Button,
  Flex,
  ModalBody,
  ModalFooter,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

import { AllEvaluationStates } from "../../eas/types/all-evaluation-states.type";
import { AttestContext } from "../../pages/claim/[id]";
import EvaluateToggle from "./EvaluateToggle";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { createAttestation } from "../../eas/createAttestation";
import { errorHasMessage } from "../../utils/errorHasMessage";
import { errorHasReason } from "../../utils/errorHasReason";
import { useNetwork } from "wagmi";
import { useSigner } from "../../wagmi/hooks/useSigner";

function isAnySectionEvaluated(state: AllEvaluationStates) {
  return (
    state.basics !== "not-evaluated" ||
    state.work !== "not-evaluated" ||
    state.properties !== "not-evaluated" ||
    state.contributors !== "not-evaluated"
  );
}

function isAnySectionInvalid(state: AllEvaluationStates) {
  return (
    state.basics === "invalid" ||
    state.work === "invalid" ||
    state.properties === "invalid" ||
    state.contributors === "invalid"
  );
}

export function AttestModalBody() {
  const { chain } = useNetwork();
  const signer = useSigner();
  const toast = useToast();
  const attestContext = useContext(AttestContext);

  // Local state
  const [isAttesting, setIsAttesting] = useState(false);
  const [allEvaluationStates, setAllEvaluationStates] =
    useState<AllEvaluationStates>({
      basics: "not-evaluated",
      work: "not-evaluated",
      properties: "not-evaluated",
      contributors: "not-evaluated",
    });
  const [comments, setComments] = useState<string>("");

  // At least one of the sections must be evaluated, and if any section is invalid,
  // a comment is required.
  let isDisabled =
    !isAnySectionEvaluated(allEvaluationStates) ||
    (isAnySectionInvalid(allEvaluationStates) && comments === "");

  const errorToast = (message: string | undefined) => {
    toast({
      title: message,
      status: "error",
      duration: 2000,
      position: "top",
    });
  };

  const attest = async () => {
    if (!signer || !chain?.id || !attestContext) {
      return;
    }
    setIsAttesting(true);
    try {
      const uid = await createAttestation({
        chainId: chain.id,
        signer,
        claimId: attestContext.claimId,
        allEvaluationStates,
        comments,
      });
      attestContext.setCreatedAttestationUid(uid);
      attestContext.closeAttestModal({ success: true });
    } catch (e) {
      if (errorHasReason(e)) {
        errorToast(e.reason);
      } else if (errorHasMessage(e)) {
        errorToast(e.message);
      } else {
        errorToast("An error occurred while creating the attestation.");
      }
      console.error(e);
    }
    setIsAttesting(false);
  };

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
                state={allEvaluationStates.basics}
                setState={(state) =>
                  setAllEvaluationStates({
                    ...allEvaluationStates,
                    basics: state,
                  })
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
                state={allEvaluationStates.work}
                setState={(state) =>
                  setAllEvaluationStates({
                    ...allEvaluationStates,
                    work: state,
                  })
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
                state={allEvaluationStates.properties}
                setState={(state) =>
                  setAllEvaluationStates({
                    ...allEvaluationStates,
                    properties: state,
                  })
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
                state={allEvaluationStates.contributors}
                setState={(state) =>
                  setAllEvaluationStates({
                    ...allEvaluationStates,
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
              placeholder="Any comments entered here are saved with the attestation. A comment is required when a section has been dismissed."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              variant={"black"}
              maxLength={250}
            />
          </VStack>
        </Flex>
      </ModalBody>

      <ModalFooter>
        <Flex gap={5} justifyContent={"center"} w="100%">
          <Button
            onClick={() => attestContext?.closeAttestModal({ success: false })}
            variant="blackAndWhiteOutline"
            w="50%"
          >
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
