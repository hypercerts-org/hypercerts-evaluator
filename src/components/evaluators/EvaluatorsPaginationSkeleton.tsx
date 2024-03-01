import { Flex, Skeleton } from "@chakra-ui/react";

export default function EvaluatorsPaginationSkeleton() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="full"
      border={"1px solid black"}
      p={5}
      mb={20}
    >
      <Flex alignItems="center" justifyContent="start" gap={2} w="250px">
        {/* First Button */}
        <Skeleton
          w="50px"
          h="30px"
          startColor="rgba(0,0,0,0.1)"
          endColor="rgba(0,0,0,0.2)"
          fadeDuration={2}
          mx={5}
        />

        {/* Previous Button */}
        <Skeleton
          w="50px"
          h="30px"
          startColor="rgba(0,0,0,0.1)"
          endColor="rgba(0,0,0,0.2)"
          fadeDuration={2}
        />
      </Flex>

      <Flex alignItems="center" justifyContent="end" gap={2} w="250px">
        {/* Next Button */}
        <Skeleton
          w="50px"
          h="30px"
          startColor="rgba(0,0,0,0.1)"
          endColor="rgba(0,0,0,0.2)"
          fadeDuration={2}
        />
        {/* Last Button */}
        <Skeleton
          w="50px"
          h="30px"
          startColor="rgba(0,0,0,0.1)"
          endColor="rgba(0,0,0,0.2)"
          fadeDuration={2}
          mx={5}
        />
      </Flex>
    </Flex>
  );
}
