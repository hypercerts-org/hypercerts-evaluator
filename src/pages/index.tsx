import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import { ClaimFragment } from "../claims/fragments";
import ClaimGridSkeleton from "../components/index/ClaimGridSkeleton";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layout";
import Link from "next/link";
import { useAllClaims } from "../claims/useClaims";

function TestClaimBox({ data }: { data: FragmentOf<typeof ClaimFragment> }) {
  const claim = readFragment(ClaimFragment, data);
  return claim.metadata?.image ? (
    <GridItem w="100%" h="250px" pt={5}>
      <Link href={`/claim/${claim.id}`}>
        <Image
          src={claim.metadata.image}
          alt="Hypercert"
          width="200"
          height="250"
        />
      </Link>
    </GridItem>
  ) : (
    <GridItem w="100%" h="240px" p={5}>
      <Link href={`/claim/${claim.id}`}>
        <Box border="1px" borderColor="black" p={5} h="100%">
          No name available
        </Box>
      </Link>
    </GridItem>
  );
}

function ClaimsList() {
  const { data, isPending, error } = useAllClaims(12, 0);

  if (isPending) return <ClaimGridSkeleton />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5} p={5} w="100%">
      {data.claims.map((claim, i) => (
        <TestClaimBox data={claim} key={i} />
      ))}
    </Grid>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <ClaimsList />
      </Layout>
    </>
  );
}
