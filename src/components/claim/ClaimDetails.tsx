import { Box, Button, Flex } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import { AttestModal } from "../attest/AttestModal";
import ClaimContributors from "../../components/claim/ClaimContributors";
import ClaimCreator from "../../components/claim/ClaimCreator";
import ClaimOwner from "../../components/claim/ClaimOwner";
import ClaimOwners from "../../components/claim/ClaimOwners";
import ClaimProperties from "../../components/claim/ClaimProperties";
import ClaimTitle from "../../components/claim/ClaimTitle";
import ClaimWorkScope from "../../components/claim/ClaimWorkScope";
import ClaimWorkTimeFrame from "../../components/claim/ClaimWorkTimeFrame";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import Image from "next/image";
import { readFragment } from "gql.tada";
import { useContext } from "react";

export default function ClaimDetails() {
  const attestContext = useContext(AttestContext);

  const claimFragment = readFragment(FullClaimFragment, attestContext?.claim);

  if (!claimFragment) return null;

  return (
    <>
      <Flex borderLeft={"1px solid black"} borderRight={"1px solid black"}>
        <Flex
          borderRight={"1px solid black"}
          p={10}
          direction={"column"}
          justifyContent={"center"}
        >
          <Box w="160px" h="200px">
            <Image
              src={`${window.location.origin}/api/image/${claimFragment.claim_id}`}
              alt="Hypercert"
              width="160"
              height="200"
            />
          </Box>
        </Flex>
        <Flex flexDirection={"column"} w="inherit">
          <ClaimTitle />
          <Flex>
            <ClaimCreator
              borderTop="1px solid black"
              borderRight="1px solid black"
            />
            <ClaimOwner borderTop="1px solid black" />
          </Flex>
        </Flex>
      </Flex>

      <Flex borderLeft={"1px solid black"} borderRight={"1px solid black"}>
        <Flex flexDirection={"column"} w="50%">
          <ClaimWorkScope
            borderTop="1px solid black"
            borderRight="1px solid black"
          />
          <ClaimWorkTimeFrame
            borderTop="1px solid black"
            borderRight="1px solid black"
          />
          <ClaimContributors
            borderTop="1px solid black"
            borderRight="1px solid black"
          />
        </Flex>
        <Flex flexDirection={"column"} w="50%">
          <ClaimProperties borderTop="1px solid black" />
          <ClaimOwners borderTop="1px solid black" />
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
