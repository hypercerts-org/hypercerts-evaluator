import { Box, Stack } from "@chakra-ui/react";
import { FragmentOf, graphql, readFragment } from "gql.tada";

import { ClaimFragment } from "../claims/fragments";
import Head from "next/head";
import { Layout } from "../components/layout";
import Link from "next/link";
import { useAllClaims } from "../claims/useClaims";

function TestClaimBox({ data }: { data: FragmentOf<typeof ClaimFragment> }) {
  const claim = readFragment(ClaimFragment, data);
  return (
    <Link href={`/claims/${claim.id}`}>
      <Box border="1px" borderColor="black" w="200px" h="300px">
        {claim.metadata ? claim.metadata.name : claim.id}
      </Box>
    </Link>
  );
}

function TestClaimsList() {
  const { data, isPending, error } = useAllClaims(6, 0);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Stack direction={["column", "row"]} spacing="24px">
      {data.claims.map((claim, i) => (
        <TestClaimBox data={claim} key={i} />
      ))}
    </Stack>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <TestClaimsList />
      </Layout>
    </>
  );
}
