import { Flex, Grid, GridItem, Skeleton } from "@chakra-ui/react";

import { ATTESTORS_PER_PAGE } from "../../config";

export default function EvaluatorsListSkeleton() {
  return (
    <Flex direction={"column"} gap={5} p={5}>
      {Array.from({ length: ATTESTORS_PER_PAGE }).map((_, index) => (
        <Skeleton
          key={index}
          w="100%"
          h="60px"
          startColor="rgba(0,0,0,0.1)"
          endColor="rgba(0,0,0,0.2)"
          fadeDuration={2}
        />
      ))}
    </Flex>
  );
}
