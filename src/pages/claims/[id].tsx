import { ClaimFragment } from "../../claims/fragments";
import Head from "next/head";
import { Layout } from "../../components/layout";
import { readFragment } from "gql.tada";
import { useClaim } from "../../claims/useClaim";
import { useRouter } from "next/router";

function ClaimDetails({ id }: { id: string }) {
  const { data, isPending, error } = useClaim(id);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const claim = readFragment(ClaimFragment, data.claim);

  if (!claim) return null;

  return (
    <>
      <h2>Claim</h2>
      <div>{claim.metadata?.name}</div>
      <div>{claim.id}</div>
      <div>{claim.metadata?.description}</div>
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
