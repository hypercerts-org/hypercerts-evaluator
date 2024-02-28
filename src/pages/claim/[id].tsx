import { Box, Button, Flex } from "@chakra-ui/react";

import ClaimContributors from "../../components/claim/ClaimContributors";
import ClaimCreator from "../../components/claim/ClaimCreator";
import ClaimOwner from "../../components/claim/ClaimOwner";
import ClaimOwners from "../../components/claim/ClaimOwners";
import ClaimProperties from "../../components/claim/ClaimProperties";
import ClaimTitle from "../../components/claim/ClaimTitle";
import ClaimWorkScope from "../../components/claim/ClaimWorkScope";
import ClaimWorkTimeFrame from "../../components/claim/ClaimWorkTimeFrame";
import { FullClaimFragment } from "../../claims/fragments";
import FullpageLoader from "../../components/FullpageLoader";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../../components/layout";
import { readFragment } from "gql.tada";
import { useClaim } from "../../claims/useClaim";
import { useRouter } from "next/router";

function ClaimDetails({ id }: { id: string }) {
  const { data, isPending, error } = useClaim(id);
  const router = useRouter();

  if (isPending) return <FullpageLoader />;

  if (error) return "An error has occurred: " + error.message;

  const claim = readFragment(FullClaimFragment, data.claim);

  if (!claim || !data.claim) return null;

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
          <ClaimTitle claim={data.claim} />
          <Flex>
            <ClaimCreator
              claim={data.claim}
              borderTop="1px solid black"
              borderRight="1px solid black"
            />
            <ClaimOwner claim={data.claim} borderTop="1px solid black" />
          </Flex>
        </Flex>
      </Flex>

      <Flex>
        <Flex flexDirection={"column"} w="50%">
          <ClaimWorkScope
            claim={data.claim}
            borderTop="1px solid black"
            borderRight="1px solid black"
          />
          <ClaimWorkTimeFrame
            claim={data.claim}
            borderTop="1px solid black"
            borderRight="1px solid black"
          />
          <ClaimContributors
            claim={data.claim}
            borderTop="1px solid black"
            borderRight="1px solid black"
          />
        </Flex>
        <Flex flexDirection={"column"} w="50%">
          <ClaimProperties claim={data.claim} borderTop="1px solid black" />
          <ClaimOwners claim={data.claim} borderTop="1px solid black" />
        </Flex>
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
