import { Flex, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import ClaimRow from "./ClaimRow";
import Comments from "./Comments";
import Evaluations from "./Evaluations";
import Link from "next/link";
import { attestationCardFragment } from "../../eas/fragments/attestation-card.fragment";
import { getDecodedValue } from "../../eas/getDecodedValue";

export default function AttestationCard({
  data,
}: {
  data: FragmentOf<typeof attestationCardFragment> | null;
}) {
  const attestation = readFragment(attestationCardFragment, data);
  if (!attestation) return null;
  const decodedData = JSON.parse(attestation.decodedDataJson);

  const hypercertId = getDecodedValue<string>(decodedData, "hypercert_id");
  const evaluateBasic = getDecodedValue<string>(decodedData, "evaluate_basic");
  const evaluateWork = getDecodedValue<string>(decodedData, "evaluate_work");
  const evaluateProperties = getDecodedValue<string>(
    decodedData,
    "evaluate_properties"
  );
  const evaluateContributors = getDecodedValue<string>(
    decodedData,
    "evaluate_contributors"
  );
  const comments = getDecodedValue<string>(decodedData, "comments");

  return (
    <Link href={`/claim/${hypercertId}`}>
      <Flex
        direction="column"
        border="1px solid black"
        p={5}
        gap={2}
        _hover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
      >
        <ClaimRow claimId={hypercertId} />
        <Evaluations
          basic={evaluateBasic}
          work={evaluateWork}
          properties={evaluateProperties}
          contributors={evaluateContributors}
        />
        <Comments comments={comments} />
      </Flex>
    </Link>
  );
}
