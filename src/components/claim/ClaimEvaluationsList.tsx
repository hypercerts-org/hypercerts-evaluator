import { Flex, Grid, Text } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import Comments from "../attestation-card/Comments";
import EnsName from "../ui/EnsName";
import EthAddress from "../ui/EthAddress";
import Evaluations from "../attestation-card/Evaluations";
import FormattedDate from "../ui/FormattedDate";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import Tags from "../attestation-card/Tags";
import { UserIcon } from "../ui/UserIcon";
import { gridCardBorder } from "../../utils/gridCardBorder";
import { readFragment } from "gql.tada";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function ClaimEvaluationsList() {
  const router = useRouter();
  const attestContext = useContext(AttestContext);
  const claimFragment = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claimFragment) return null;

  const attestations = claimFragment?.claimAttestations?.data;

  if (!attestations || attestations.length === 0) {
    return <Text>This Hypercert has not been evaluated yet.</Text>;
  }

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      border="1px solid black"
      className="evaluations-list"
    >
      {attestations &&
        attestations.map((attestation, i) => {
          if (!attestation) return null;
          const data = JSON.parse(attestation.decoded_attestation as string);
          return (
            <Flex
              key={attestation.attestation_uid}
              direction="column"
              p={5}
              gap={4}
              h="100%"
              style={gridCardBorder(i, attestations.length)}
              _hover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              onClick={() =>
                router.push(`/evaluator/${attestation.attester_address}`)
              }
              cursor="pointer"
            >
              <FormattedDate seconds={attestation.block_timestamp} />

              <Flex gap={2}>
                <UserIcon address={attestation.attester_address} size="large" />
                <Flex
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"start"}
                  w="200px"
                >
                  <EnsName
                    address={attestation.attester_address}
                    textStyle={"secondary"}
                  />
                  <EthAddress address={attestation.attester_address} />{" "}
                </Flex>
              </Flex>

              <Evaluations
                basic={data.evaluate_basic}
                work={data.evaluate_work}
                properties={data.evaluate_properties}
                contributors={data.evaluate_contributors}
              />

              <Tags tags={data.tags} />

              <Comments comments={data.comments} />
            </Flex>
          );
        })}
    </Grid>
  );
}
