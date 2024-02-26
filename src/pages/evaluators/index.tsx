import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Layout } from "../../components/layout";
import Head from "next/head";

const ATTESTORS_REVALIDATE = 60 * 60; // 1 hour

type Attestor = {
  eth_address: string;
  orgs: string[];
};

export const getStaticProps = (async (context) => {
  const res = await fetch(
    "https://github.com/hypercerts-org/hypercerts-attestor-registry/raw/main/attestor.json"
  );
  const attestors: Attestor[] = await res.json();
  return { props: { attestors }, revalidate: ATTESTORS_REVALIDATE };
}) satisfies GetStaticProps<{
  attestors: Attestor[];
}>;

export default function Page({
  attestors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Evaluators - Hypercerts Evalutaor</title>
      </Head>
      <Layout>
        {attestors.map((attestor) => (
          <div key={attestor.eth_address}>
            <h2>{attestor.eth_address}</h2>
            <ul>
              {attestor.orgs.map((org) => (
                <li key={org}>{org}</li>
              ))}
            </ul>
          </div>
        ))}
      </Layout>
    </>
  );
}
