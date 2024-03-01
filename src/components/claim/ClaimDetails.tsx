import { Box, Button, Flex } from "@chakra-ui/react";
import { createContext, useContext } from "react";

import { AttestContext } from "../../pages/claim/[id]";
import { AttestModal } from "./AttestModal";
import ClaimContributors from "../../components/claim/ClaimContributors";
import ClaimCreator from "../../components/claim/ClaimCreator";
import ClaimOwner from "../../components/claim/ClaimOwner";
import ClaimOwners from "../../components/claim/ClaimOwners";
import ClaimProperties from "../../components/claim/ClaimProperties";
import ClaimTitle from "../../components/claim/ClaimTitle";
import ClaimWorkScope from "../../components/claim/ClaimWorkScope";
import ClaimWorkTimeFrame from "../../components/claim/ClaimWorkTimeFrame";
import { FullClaimFragment } from "../../hypercerts/fragments";
import FullpageLoader from "../../components/FullpageLoader";
import Image from "next/image";
import LoadError from "../../components/LoadError";
import { isValidImageSrc } from "../../utils/isValidImageSrc";
import { readFragment } from "gql.tada";
import { useClaim } from "../../hypercerts/useClaim";

export default function ClaimDetails() {
  const attestContext = useContext(AttestContext);
  const { data, isPending, error } = useClaim(attestContext?.claimId);

  if (isPending) return <FullpageLoader />;

  if (error) {
    console.error(error);
    return <LoadError>Failed to load claim.</LoadError>;
  }

  const claim = readFragment(FullClaimFragment, data?.claim);

  if (!claim || !data?.claim) return <LoadError>Claim not found.</LoadError>;

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
          onClick={() => attestContext?.openAttestModal()}
        >
          Evaluate this Hypercert
        </Button>
        <AttestModal />
      </Flex>
    </>
  );
}
