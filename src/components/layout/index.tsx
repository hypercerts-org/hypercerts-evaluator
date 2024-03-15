import { Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import { ReactNode } from "react";
import { TopHeader } from "./TopHeader";
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
      <TopHeader />
      <TopMenu />
      <Flex
        flexDirection={"column"}
        width={"700px"}
        grow={1}
        pb="10"
        {...props}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
