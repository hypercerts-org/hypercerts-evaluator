import { Flex, MenuItem as _MenuItem } from "@chakra-ui/react";

import { FaCheckSquare } from "react-icons/fa";
import { ReactNode } from "react";

export default function MenuItem({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <_MenuItem onClick={onClick}>
      <Flex justifyContent="space-between" w="100%" alignItems="center">
        {children}
        {selected && <FaCheckSquare />}
      </Flex>
    </_MenuItem>
  );
}
