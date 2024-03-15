import ClaimRow from "../attestation-card/ClaimRow";
import Comments from "../attestation-card/Comments";
import Evaluations from "../attestation-card/Evaluations";
import { Flex } from "@chakra-ui/react";
import FormattedDate from "../ui/FormattedDate";
import Link from "next/link";
import Tags from "../attestation-card/Tags";
import { getDecodedValue } from "../../eas/getDecodedValue";
import { useRouter } from "next/router";

export default function EvaluatorEvaluationsListItem({
  created,
  data,
  ...props
}: {
  created: number;
  data: any;
  [key: string]: any;
}) {
  const router = useRouter();
  const tokenId = getDecodedValue<string>(data, "token_id");
  const evaluateBasic = getDecodedValue<number>(data, "evaluate_basic");
  const evaluateWork = getDecodedValue<number>(data, "evaluate_work");
  const evaluateProperties = getDecodedValue<number>(
    data,
    "evaluate_properties"
  );
  const evaluateContributors = getDecodedValue<number>(
    data,
    "evaluate_contributors"
  );
  const comments = getDecodedValue<string>(data, "comments");
  const tags = getDecodedValue<string[]>(data, "tags");
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
        <Flex direction="column" p={5} gap={4} h="100%">
          <FormattedDate seconds={created} />
          <ClaimRow claimId={tokenId} />
          <Evaluations
            basic={evaluateBasic}
            work={evaluateWork}
            properties={evaluateProperties}
            contributors={evaluateContributors}
          />
          <Tags tags={tags} />
          <Comments comments={comments} />
        </Flex>
      </Link>
    </Flex>
  );
}
