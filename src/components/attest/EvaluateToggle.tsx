import { Flex, IconButton } from "@chakra-ui/react";

import { EvaluationStates } from "../../eas/types/evaluation-states.type";
import { FaCheckSquare } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

export default function EvaluateToggle({
  state,
  setState,
}: {
  state: EvaluationStates;
  setState: (state: EvaluationStates) => void;
}) {
  const handleClick = (s: EvaluationStates) => {
    if (state === s) {
      setState("not-evaluated");
    } else {
      setState(s);
    }
  };

  return (
    <Flex>
      <IconButton
        aria-label="Valid"
        icon={<FaCheckSquare />}
        onClick={() => handleClick("valid")}
        color={state === "valid" ? "limegreen" : "gray"}
        size="lg"
        variant="ghost"
      />
      <IconButton
        aria-label="Invalid"
        icon={<FaMinusCircle />}
        onClick={() => handleClick("invalid")}
        color={state === "invalid" ? "red" : "gray"}
        size="lg"
        variant="ghost"
      />
    </Flex>
  );
}
