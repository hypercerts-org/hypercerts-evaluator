import { createContext, useState } from "react";

import ClaimDetails from "../../components/claim/ClaimDetails";
import Head from "next/head";
import { Layout } from "../../components/layout";
import { useRouter } from "next/router";

type AttestContext = {
  claimId: string;
  isAttestModalOpen: boolean;
  closeAttestModal: ({ success }: { success: boolean }) => void;
  openAttestModal: () => void;
};

export const AttestContext = createContext<AttestContext | undefined>(
  undefined
);

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [isAttestModalOpen, setIsAttestModalOpen] = useState(false);

  if (typeof id !== "string") return null;

  const context = {
    claimId: id,
    isAttestModalOpen,
    closeAttestModal: ({ success }: { success: boolean }) =>
      setIsAttestModalOpen(false),
    openAttestModal: () => setIsAttestModalOpen(true),
  };

  return (
    <>
      <Head>
        <title>Claims - Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <AttestContext.Provider value={context}>
          <ClaimDetails />
        </AttestContext.Provider>
      </Layout>
    </>
  );
}
