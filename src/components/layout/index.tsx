import { Flex } from "@chakra-ui/react";
import { Header } from "@/components/layout/header";
import { PropsWithChildren } from "react";
import { colors } from "@/theme";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      width={"100vw"}
      minHeight={"100vh"}
      backgroundColor={colors.background}
      gap={"20px"}
    >
      <Header />
      {children}
    </Flex>
  );
};
