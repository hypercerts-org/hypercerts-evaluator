import EvaluatorDetails from "../../components/evaluator/EvaluatorDetail";
import Head from "next/head";
import { Layout } from "../../components/layout";

export default function Page() {
  return (
    <>
      <Head>
        <title>Claims - Hypercerts Evaluator</title>
      </Head>
      <Layout gap={5}>
        <EvaluatorDetails />
      </Layout>
    </>
  );
}
