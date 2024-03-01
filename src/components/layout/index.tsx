import { Flex } from "@chakra-ui/react";
import { Header } from "@/components/layout/Header";
import { PropsWithChildren } from "react";
import TopMenu from "./TopMenu";
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
      <TopMenu />
      <Flex flexDirection={"column"} width={"700px"} grow={1}>
        {children}
      </Flex>
    </Flex>
  );
};
