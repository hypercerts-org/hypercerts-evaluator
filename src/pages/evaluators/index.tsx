import { GetStaticProps, InferGetStaticPropsType } from "next";

import { Box } from "@chakra-ui/react";
import EvaluatorsList from "../../components/evaluators/EvaluatorsList";
import EvaluatorsPagination from "../../components/evaluators/EvaluatorsPagination";
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
        <Box
          borderLeft={"1px solid black"}
          borderRight={"1px solid black"}
          borderBottom={"1px solid black"}
          p={5}
        >
          Evaluations are a cornerstone of the hypercerts ecosystem. This first
          version of the Hypercerts Evaluator allows a group of trusted
          evaluators attest to the correctness of the hypercert claim data. In
          future versions, we will extend the group of evaluators as well as the
          scope of evaluations to include impact evaluations, etc.
        </Box>
        <Box borderLeft={"1px solid black"} borderRight={"1px solid black"}>
          <EvaluatorsList currentPage={page} />
        </Box>
        <EvaluatorsPagination currentPage={page} />
      </Layout>
    </>
  );
}
