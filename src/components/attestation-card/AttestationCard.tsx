import { Flex, Text } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import ClaimRow from "./ClaimRow";
import Comments from "./Comments";
import Evaluations from "./Evaluations";
import FormattedDate from "../ui/FormattedDate";
import Link from "next/link";
import { attestationCardFragment } from "../../eas/fragments/attestation-card.fragment";
import { getDecodedValue } from "../../eas/getDecodedValue";
import { useRouter } from "next/router";

export default function AttestationCard({
  data,
  ...props
}: {
  data: FragmentOf<typeof attestationCardFragment> | null;
  [key: string]: any;
}) {
  const router = useRouter();
  const attestation = readFragment(attestationCardFragment, data);
  if (!attestation) return null;
  const decodedData = JSON.parse(attestation.decodedDataJson);

  const tokenId = getDecodedValue<string>(decodedData, "token_id");
  const evaluateBasic = getDecodedValue<number>(decodedData, "evaluate_basic");
  const evaluateWork = getDecodedValue<number>(decodedData, "evaluate_work");
  const evaluateProperties = getDecodedValue<number>(
    decodedData,
    "evaluate_properties"
  );
  const evaluateContributors = getDecodedValue<number>(
    decodedData,
    "evaluate_contributors"
  );
  const comments = getDecodedValue<string>(decodedData, "comments");

  return (
    <Flex
      direction="column"
      _hover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
      h="100%"
      onClick={() => router.push(`/claim/${tokenId}`)}
      cursor="pointer"
      {...props}
    >
      <Link href={`/claim/${tokenId}`}>
        <Flex direction="column" p={5} gap={2} h="100%">
          <FormattedDate seconds={attestation.timeCreated} />
          <ClaimRow claimId={tokenId} />
          <Evaluations
            basic={evaluateBasic}
            work={evaluateWork}
            properties={evaluateProperties}
            contributors={evaluateContributors}
          />
          <Comments comments={comments} />
        </Flex>
      </Link>
    </Flex>
  );
}
