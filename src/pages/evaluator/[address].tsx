import EvaluatorRow from "../../components/evaluator/EvaluatorRow";
import FullpageLoader from "../../components/FullpageLoader";
import Head from "next/head";
import { Layout } from "../../components/layout";
import LoadError from "../../components/LoadError";
import { useRouter } from "next/router";
import { useTrustedAttestor } from "../../github/hooks/useTrustedAttestor";
import { useTrustedAttestors } from "../../github/hooks/useTrustedAttestors";

export default function Page() {
  const router = useRouter();
  const { address } = router.query;
  const { data: attestors, isPending, error } = useTrustedAttestors();
  const attestor = useTrustedAttestor({
    address: typeof address === "string" ? address : undefined,
  });

  if (isPending) {
    return <FullpageLoader />;
  }

  if (typeof address !== "string") {
    return <LoadError>Invalid address</LoadError>;
  }

  if (error || !attestors || !attestor) {
    console.error(error);
    return <LoadError>Could not load trusted attestors.</LoadError>;
  }

  return (
    <>
      <Head>
        <title>Claims - Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <EvaluatorRow attestor={attestor} />
      </Layout>
    </>
  );
}
