import { Box } from "@chakra-ui/react";
import ClaimsList from "../components/index/ClaimsList";
import ClaimsOrderByFilter from "../components/index/ClaimsOrderByFilter";
import ClaimsPagination from "../components/index/ClaimsPagination";
import ClaimsSearch from "../components/index/ClaimsSearch";
import Head from "next/head";
import { Layout } from "../components/layout";
import { WelcomeModal } from "../components/WelcomeModal";
import { useGlobalState } from "../state";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const page = router.query.p ? Number(router.query.p) : 1;

  const welcomeModalOpen = useGlobalState((state) => state.welcomeModalOpen);
  const setWelcomeModalOpen = useGlobalState(
    (state) => state.setWelcomeModalOpen
  );

  return (
    <>
      <Head>
        <title>Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <Box>
          <ClaimsSearch />
          <ClaimsOrderByFilter />
          <ClaimsList page={page} />
        </Box>
      </Layout>
      <WelcomeModal
        isOpen={welcomeModalOpen}
        onClose={() => setWelcomeModalOpen(false)}
      />
    </>
  );
}
