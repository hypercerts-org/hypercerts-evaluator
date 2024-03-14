import { Button, Tooltip } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import { isTrustedAttestor } from "../../github/isTrustedAttestor";
import { useAccount } from "wagmi";
import { useContext } from "react";
import { useTrustedAttestors } from "../../github/hooks/useTrustedAttestors";

export default function ClaimEvaluateButton() {
  const attestContext = useContext(AttestContext);
  const { address, isConnected } = useAccount();
  const { data: attestors, error } = useTrustedAttestors();

  if (error) {
    console.error(error);
  }

  const disabled =
    !isConnected ||
    !address ||
    error !== null ||
    !isTrustedAttestor(attestors, address);

  return (
    <Tooltip
      label="Evaluation is only available to the group of trusted evaluators at this time."
      isDisabled={!disabled}
    >
      <Button
        variant="blackAndWhite"
        onClick={() => attestContext?.openAttestModal()}
        isDisabled={disabled}
        size={"sm"}
      >
        Evaluate this Hypercert
      </Button>
    </Tooltip>
  );
}
