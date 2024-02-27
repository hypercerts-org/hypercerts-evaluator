import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ClaimFragment } from "../../claims/fragments";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../../components/layout";
import Link from "next/link";
import { readFragment } from "gql.tada";
import { useClaim } from "../../claims/useClaim";
import { useRouter } from "next/router";

function ClaimDetails({ id }: { id: string }) {
  const { data, isPending, error } = useClaim(id);
  const router = useRouter();

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
          <Text>…</Text>
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
          <Text>…</Text>
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
          <Text>…</Text>
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
            Evaluations
          </Text>
          <Text>…</Text>
        </VStack>
      </Flex>

      <Flex
        width="100%"
        justifyContent={"center"}
        borderTop={"1px solid black"}
        p={5}
      >
        <Button
          variant="blackAndWhite"
          onClick={() => router.push(`/evaluate/${claim.id}`)}
        >
          Evaluate this Hypercert
        </Button>
      </Flex>
    </>
  );
}

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== "string") return null;

  return (
    <>
      <Head>
        <title>Claims - Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <ClaimDetails id={id} />
      </Layout>
    </>
  );
}
