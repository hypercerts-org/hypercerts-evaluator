import { FragmentOf, readFragment } from "gql.tada";
import { createContext, useState } from "react";

import ClaimDetails from "../../components/claim/ClaimDetails";
import { ConfirmationModal } from "../../components/claim/ConfirmationModal";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import FullpageLoader from "../../components/FullpageLoader";
import Head from "next/head";
import { Layout } from "../../components/layout";
import LoadError from "../../components/LoadError";
import { useClaim } from "../../hypercerts/hooks/useClaim";
import { useRouter } from "next/router";

type AttestContext = {
  claim: FragmentOf<typeof FullClaimFragment>;
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

function AttestContextProvider() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isPending, error } = useClaim(Array.isArray(id) ? id[0] : id);

  const [isAttestModalOpen, setIsAttestModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [createdAttestationUid, setCreatedAttestationUid] = useState<string>();

  if (isPending) return <FullpageLoader />;

  if (error) {
    console.error(error);
    return <LoadError>Failed to load claim.</LoadError>;
  }

  const claim = data?.hypercertsCollection?.edges[0]?.node;

  const claimFragment = readFragment(FullClaimFragment, claim);

  if (!claim || !claimFragment)
    return <LoadError>Hypercert not found.</LoadError>;

  const closeAttestModal = ({ success }: { success: boolean }) => {
    setIsAttestModalOpen(false);
    if (success) {
      setIsConfirmationModalOpen(true);
    }
  };

  const context = {
    claim,
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
    <AttestContext.Provider value={context}>
      <ClaimDetails />
      <ConfirmationModal />
    </AttestContext.Provider>
  );
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Claims - Hypercerts Evaluator</title>
      </Head>
      <Layout>
        <AttestContextProvider />
      </Layout>
    </>
  );
}
