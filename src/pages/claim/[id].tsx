import { createContext, useState } from "react";

import ClaimDetails from "../../components/claim/ClaimDetails";
import { ConfirmationModal } from "../../components/claim/ConfirmationModal";
import Head from "next/head";
import { Layout } from "../../components/layout";
import { useRouter } from "next/router";

type AttestContext = {
  claimId: string;
  isAttestModalOpen: boolean;
  closeAttestModal: ({ success }: { success: boolean }) => void;
  openAttestModal: () => void;
  isConfirmationModalOpen: boolean;
  openConfirmationModal: () => void;
  closeConfirmationModal: () => void;
  createdAttestationUid?: string;
  setCreatedAttestationUid: (uid: string) => void;
};

export const AttestContext = createContext<AttestContext | undefined>(
  undefined
);

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [isAttestModalOpen, setIsAttestModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [createdAttestationUid, setCreatedAttestationUid] = useState<string>();

  if (typeof id !== "string") return null;

  const closeAttestModal = ({ success }: { success: boolean }) => {
    setIsAttestModalOpen(false);
    if (success) {
      setIsConfirmationModalOpen(true);
    }
  };

  const context = {
    claimId: id,
    isAttestModalOpen,
    closeAttestModal,
    openAttestModal: () => setIsAttestModalOpen(true),
    isConfirmationModalOpen,
    openConfirmationModal: () => setIsConfirmationModalOpen(true),
    closeConfirmationModal: () => setIsConfirmationModalOpen(false),
    createdAttestationUid,
    setCreatedAttestationUid,
  };

  return (
    <>
      <Head>
        <title>Claims - Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <AttestContext.Provider value={context}>
          <ClaimDetails />
          <ConfirmationModal />
        </AttestContext.Provider>
      </Layout>
    </>
  );
}
