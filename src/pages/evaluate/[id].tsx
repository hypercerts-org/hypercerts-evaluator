import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import router, { useRouter } from "next/router";

import { AttestModal } from "./components/AttestModal";
import { ClaimFragment } from "../../claims/fragments";
import { FaCheckSquare } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../../components/layout";
import { readFragment } from "gql.tada";
import { useClaim } from "../../claims/useClaim";
import { useState } from "react";

function ClaimDetails({ id }: { id: string }) {
  const { data, isPending, error } = useClaim(id);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const claim = readFragment(ClaimFragment, data.claim);

  if (!claim) return null;

  return (
    <>
      <Flex>
        {claim.metadata?.image && (
          <Box borderRight={"1px solid black"} padding={"20px"}>
            <Image
              src={claim.metadata?.image}
              alt="Hypercert"
              width="160"
              height="200"
            />
          </Box>
        )}
        <Flex flexDirection={"column"} width="100%">
          <Flex flexDirection={"column"} gap="5" width="100%" p="5">
            <Heading as="h2" size="md" textStyle="secondary" fontWeight={100}>
              {claim.metadata?.name}
            </Heading>
            <Text>{claim.metadata?.description}</Text>
          </Flex>
          <VStack
            px={4}
            py={5}
            alignItems={"flex-start"}
            width="100%"
            borderTop={"1px solid black"}
          >
            <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
              Creator
            </Text>
            <Text>{claim.creator as string}</Text>
          </VStack>
        </Flex>
      </Flex>

      <Flex flexDirection={"column"} width="100%">
        <VStack
          px={4}
          py={5}
          alignItems={"flex-start"}
          width="100%"
          borderTop={"1px solid black"}
        >
          <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
            Work
          </Text>
          <Flex justifyContent={"space-between"} width="100%">
            <Text>…</Text>
            <HStack>
              <FaCheckSquare />
              <FaMinusCircle />
            </HStack>
          </Flex>
        </VStack>
      </Flex>

      <Flex flexDirection={"column"} width="100%">
        <VStack
          px={4}
          py={5}
          alignItems={"flex-start"}
          width="100%"
          borderTop={"1px solid black"}
        >
          <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
            Contributors
          </Text>
          <Flex justifyContent={"space-between"} width="100%">
            <Text>…</Text>
            <HStack>
              <FaCheckSquare />
              <FaMinusCircle />
            </HStack>
          </Flex>
        </VStack>
      </Flex>

      <Flex flexDirection={"column"} width="100%">
        <VStack
          px={4}
          py={5}
          alignItems={"flex-start"}
          width="100%"
          borderTop={"1px solid black"}
        >
          <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
            Properties
          </Text>
          <Flex justifyContent={"space-between"} width="100%">
            <Text>…</Text>
            <HStack>
              <FaCheckSquare />
              <FaMinusCircle />
            </HStack>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
}

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);

  if (typeof id !== "string") return null;

  return (
    <>
      <Head>
        <title>Claims - Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <ClaimDetails id={id} />
        <Flex
          width="100%"
          justifyContent={"center"}
          borderTop={"1px solid black"}
          p={5}
        >
          <Button variant="blackAndWhite" onClick={() => setOpen(!open)}>
            Save evaluation
          </Button>
        </Flex>

        <AttestModal
          isOpen={open}
          onClose={() => setOpen(false)}
          data={"dummydata"}
        />
      </Layout>
    </>
  );
}
