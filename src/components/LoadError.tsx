import { FaSadTear } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function LoadError({ children }: { children?: ReactNode }) {
  return (
    <Flex
      direction={"column"}
      justifyContent="center"
      alignItems="center"
      grow={1}
      gap={5}
    >
      <FaSadTear size={50} />
      {children}
    </Flex>
  );
}
