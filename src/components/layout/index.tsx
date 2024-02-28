import { Flex } from "@chakra-ui/react";
import { Header } from "@/components/layout/header";
import { PropsWithChildren } from "react";
import { colors } from "@/theme";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
      minHeight={"100vh"}
      backgroundColor={colors.background}
    >
      <Header />
      <Flex
        flexDirection={"column"}
        width={"700px"}
        grow={1}
        borderBottom={"1px solid black"}
        borderLeft={"1px solid black"}
        borderRight={"1px solid black"}
      >
        {children}
      </Flex>
    </Flex>
  );
};
