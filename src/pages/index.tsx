import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  VStack,
} from "@chakra-ui/react";

import Head from "next/head";
import { Header } from "../components/layout/header";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Stack direction={["column", "row"]} spacing="24px">
          <Box border="1px" borderColor="black" w="200px" h="300px">
            1
          </Box>
          <Box border="1px" borderColor="black" w="200px" h="300px">
            2
          </Box>
          <Box border="1px" borderColor="black" w="200px" h="300px">
            3
          </Box>
        </Stack>
      </Layout>
    </>
  );
}
