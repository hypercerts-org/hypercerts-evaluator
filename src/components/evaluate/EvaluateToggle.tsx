import { Button, Flex, IconButton } from "@chakra-ui/react";

import { FaCheckSquare } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

export type ToggleState = "valid" | "invalid" | "none";

export default function EvaluateToggle({
  state,
  setState,
}: {
  state: ToggleState;
  setState: (state: ToggleState) => void;
}) {
  const handleClick = (s: ToggleState) => {
    if (state === s) {
      setState("none");
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
