import { Box } from "@chakra-ui/react";
import ClaimsList from "../components/index/ClaimsList";
import ClaimsPagination from "../components/index/ClaimsPagination";
import ClaimsSearch from "../components/index/ClaimsSearch";
import ClaimsSortFilter from "../components/index/ClaimsSortFilter";
import Head from "next/head";
import { Layout } from "../components/layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router.query);

  const page = router.query.p ? Number(router.query.p) : 1;

  return (
    <>
      <Head>
        <title>Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <Box borderLeft={"1px solid black"} borderRight={"1px solid black"}>
          <ClaimsSearch />
          <ClaimsSortFilter />
          <ClaimsList page={page} />
        </Box>
        <ClaimsPagination currentPage={page} />
      </Layout>
    </>
  );
}
