import { Box, Button, Flex } from "@chakra-ui/react";

import { AttestModal } from "../../components/evaluate/AttestModal";
import ClaimContributors from "../../components/claim/ClaimContributors";
import ClaimCreator from "../../components/claim/ClaimCreator";
import ClaimOwner from "../../components/claim/ClaimOwner";
import ClaimOwners from "../../components/claim/ClaimOwners";
import ClaimProperties from "../../components/claim/ClaimProperties";
import ClaimTitle from "../../components/claim/ClaimTitle";
import ClaimWorkScope from "../../components/claim/ClaimWorkScope";
import ClaimWorkTimeFrame from "../../components/claim/ClaimWorkTimeFrame";
import { FullClaimFragment } from "../../claims/fragments";
import FullpageLoader from "../../components/FullpageLoader";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../../components/layout";
import LoadError from "../../components/LoadError";
import { isValidImageSrc } from "../../utils/isValidImageSrc";
import { readFragment } from "gql.tada";
import { useClaim } from "../../claims/useClaim";
import { useRouter } from "next/router";
import { useState } from "react";

function ClaimDetails({ id }: { id: string }) {
  const { data, isPending, error } = useClaim(id);
  const [attestModalOpen, setAttestModalOpen] = useState(false);

  if (isPending) return <FullpageLoader />;

  if (error) {
    console.error(error);
    return <LoadError>Failed to load claim.</LoadError>;
  }

  const claim = readFragment(FullClaimFragment, data.claim);

  if (!claim || !data.claim) return <LoadError>Claim not found.</LoadError>;

  const imageSrc = isValidImageSrc(claim.metadata?.image)
    ? claim.metadata?.image
    : null;

  return (
    <>
      <Flex borderLeft={"1px solid black"} borderRight={"1px solid black"}>
        {imageSrc && (
          <Box borderRight={"1px solid black"} padding={"20px"}>
            <Image src={imageSrc} alt="Hypercert" width="160" height="200" />
          </Box>
        )}
        <Flex flexDirection={"column"} width="100%">
          <ClaimTitle claim={data.claim} />
          <Flex>
            <ClaimCreator
              claim={data.claim}
              borderTop="1px solid black"
              borderRight="1px solid black"
            />
            <ClaimOwner claim={data.claim} borderTop="1px solid black" />
          </Flex>
        </Flex>
      </Flex>

      <Flex borderLeft={"1px solid black"} borderRight={"1px solid black"}>
        <Flex flexDirection={"column"} w="50%">
          <ClaimWorkScope
            claim={data.claim}
            borderTop="1px solid black"
            borderRight="1px solid black"
          />
          <ClaimWorkTimeFrame
            claim={data.claim}
            borderTop="1px solid black"
            borderRight="1px solid black"
          />
          <ClaimContributors
            claim={data.claim}
            borderTop="1px solid black"
            borderRight="1px solid black"
          />
        </Flex>
        <Flex flexDirection={"column"} w="50%">
          <ClaimProperties claim={data.claim} borderTop="1px solid black" />
          <ClaimOwners claim={data.claim} borderTop="1px solid black" />
        </Flex>
      </Flex>

      <Flex
        width="100%"
        justifyContent={"center"}
        borderTop={"1px solid black"}
        p={5}
      >
        <Button
          variant="blackAndWhite"
          onClick={() => setAttestModalOpen(true)}
        >
          Evaluate this Hypercert
        </Button>
        <AttestModal
          claimId={id}
          isOpen={attestModalOpen}
          onClose={() => setAttestModalOpen(false)}
        />
      </Flex>
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
