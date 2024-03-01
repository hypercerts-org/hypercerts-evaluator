import { GetStaticProps, InferGetStaticPropsType } from "next";

import { Box } from "@chakra-ui/react";
import EvaluatorsList from "../../components/evaluators/EvaluatorsList";
import EvaluatorsPagination from "../../components/evaluators/EvaluatorsPagination";
import EvaluatorsSearch from "../../components/evaluators/EvaluatorsSearch";
import EvaluatorsSortFilter from "../../components/evaluators/EvaluatorsSortFilter";
import Head from "next/head";
import { Layout } from "../../components/layout";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const page = router.query.p ? Number(router.query.p) : 1;

  return (
    <>
      <Head>
        <title>Evaluators - Hypercerts Evalutaor</title>
      </Head>
      <Layout>
        <Box borderLeft={"1px solid black"} borderRight={"1px solid black"}>
          <EvaluatorsSearch />
          <EvaluatorsSortFilter />
          <EvaluatorsList currentPage={page} />
        </Box>
        <EvaluatorsPagination currentPage={page} />
      </Layout>
    </>
  );
}
