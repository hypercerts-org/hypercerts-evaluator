import { Box, Flex, Grid, Heading } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import { AttestModal } from "../attest/AttestModal";
import ClaimContributors from "../../components/claim/ClaimContributors";
import ClaimCreatedDate from "./ClaimCreatedDate";
import ClaimCreator from "../../components/claim/ClaimCreator";
import ClaimEvaluateButton from "./ClaimEvaluateButton";
import ClaimEvaluationsList from "./ClaimEvaluationsList";
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
        <Flex flexDirection={"column"} w="100%" h="100%">
          <ClaimTitle />
          <Flex>
            <ClaimCreator
              borderTop="1px solid black"
              borderRight="1px solid black"
            />

            <ClaimCreatedDate borderTop="1px solid black" />
          </Flex>
        </Flex>
      </Flex>

      <ClaimWorkScope
        borderTop="1px solid black"
        borderLeft="1px solid black"
        borderRight="1px solid black"
      />

      <Grid
        templateColumns="repeat(2, 1fr)"
        borderLeft={"1px solid black"}
        borderRight="1px solid black"
      >
        <Flex flexDirection={"column"}>
          <ClaimWorkTimeFrame borderTop="1px solid black" />
          <ClaimContributors borderTop="1px solid black" />
        </Flex>
        <Flex flexDirection={"column"} borderLeft="1px solid black">
          <ClaimOwners borderTop="1px solid black" />
        </Flex>
      </Grid>

      <Flex
        width="100%"
        justifyContent={"space-between"}
        borderTop={"1px solid black"}
        py={5}
      >
        {" "}
        <Heading
          textStyle={"secondary"}
          fontWeight={"100"}
          size={"md"}
          whiteSpace={"nowrap"}
        >
          Evaluations
        </Heading>
        <ClaimEvaluateButton />
      </Flex>
      <ClaimEvaluationsList />
      <AttestModal />
    </>
  );
}
