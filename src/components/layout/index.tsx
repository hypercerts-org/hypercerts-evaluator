import { Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { ReactNode } from "react";
import TopMenu from "./TopMenu";
import { colors } from "../../theme";

export const Layout = ({
  children,
  ...props
}: {
  children?: ReactNode | undefined;
  [key: string]: any;
}) => {
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
      <Flex flexDirection={"column"} width={"700px"} grow={1} {...props}>
        {children}
      </Flex>
    </Flex>
  );
};
