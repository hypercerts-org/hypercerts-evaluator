import { Flex, Grid, Text } from "@chakra-ui/react";

import { AttestContext } from "../../pages/claim/[id]";
import Comments from "../attestation-card/Comments";
import EnsName from "../ui/EnsName";
import EthAddress from "../ui/EthAddress";
import Evaluations from "../attestation-card/Evaluations";
import FormattedDate from "../ui/FormattedDate";
import { HypercertFullFragment } from "../../hypercerts/fragments/hypercert-full.fragment";
import Tags from "../attestation-card/Tags";
import { UserIcon } from "../ui/UserIcon";
import { gridCardBorder } from "../../utils/gridCardBorder";
import { readFragment } from "gql.tada";
import { useContext } from "react";
import { useRouter } from "next/router";

type Evaluation = {
  chain_id: number;
  comments: string;
  contract_address: string;
  evaluate_basic: number;
  evaluate_work: number;
  evaluate_properties: number;
  evaluate_contributors: number;
  tags: string[];
  token_id: string;
};

export default function ClaimEvaluationsList() {
  const router = useRouter();
  const attestContext = useContext(AttestContext);
  const claimFragment = readFragment(
    HypercertFullFragment,
    attestContext?.claim
  );
  if (!claimFragment) return null;

  const attestations = claimFragment?.attestations?.data;

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

          const evaluation = attestation.data as Evaluation;
          return (
            <Flex
              key={i}
              direction="column"
              p={5}
              gap={4}
              h="100%"
              style={gridCardBorder(i, attestations.length)}
            >
              <FormattedDate seconds={attestation.block_timestamp} />

              <Flex
                gap={2}
                p={2}
                _hover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                onClick={() =>
                  router.push(`/evaluator/${attestation.attester}`)
                }
                cursor="pointer"
              >
                <UserIcon
                  address={attestation.attester as string}
                  size="large"
                />
                <Flex
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"start"}
                  w="200px"
                >
                  <EnsName
                    address={attestation.attester as string}
                    textStyle={"secondary"}
                  />
                  <EthAddress address={attestation.attester as string} />{" "}
                </Flex>
              </Flex>

              <Evaluations
                basic={evaluation.evaluate_basic}
                work={evaluation.evaluate_work}
                properties={evaluation.evaluate_properties}
                contributors={evaluation.evaluate_contributors}
              />

              <Tags tags={evaluation.tags} />

              <Comments comments={evaluation.comments} />
            </Flex>
          );
        })}
    </Grid>
  );
}
