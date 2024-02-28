import ClaimSearch from "../components/index/ClaimSearch";
import ClaimSortFilter from "../components/index/ClaimSortFilter";
import ClaimsList from "../components/index/ClaimsList";
import Head from "next/head";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <ClaimSearch />
        <ClaimSortFilter />
        <ClaimsList />
      </Layout>
    </>
  );
}
