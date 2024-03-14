import { Box, Flex } from "@chakra-ui/react";

import { ATTESTORS_PER_PAGE } from "../../config";
import EvaluatorsListRow from "./EvaluatorsListRow";
import EvaluatorsListSkeleton from "./EvaluatorsListSkeleton";
import FullpageLoader from "../FullpageLoader";
import LoadError from "../LoadError";
import { useRouter } from "next/router";
import { useTrustedAttestors } from "../../github/hooks/useTrustedAttestors";

export default function EvaluatorsList({
  currentPage,
}: {
  currentPage: number;
}) {
  const { data: attestors, isPending, error } = useTrustedAttestors();
  const router = useRouter();

  if (isPending) return <EvaluatorsListSkeleton />;

  if (error) {
    console.error(error);
    return <LoadError>Could not load trusted attestors.</LoadError>;
  }

  const show = ATTESTORS_PER_PAGE;

  return (
    <Flex direction={"column"}>
      {attestors
        .slice((currentPage - 1) * show, currentPage * show)
        .map((attestor, i) => (
          <Box
            as="button"
            key={i}
            _hover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            p={5}
            onClick={() => router.push(`/evaluator/${attestor.eth_address}`)}
          >
            <EvaluatorsListRow attestor={attestor} />
          </Box>
        ))}
    </Flex>
  );
}
