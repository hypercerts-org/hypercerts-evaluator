import { FaCheckSquare, FaMinusCircle } from "react-icons/fa";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { fromBytes, hexToString } from "viem";

function EvaluationSymbols({ value }: { value: number }) {
  return (
    <Flex gap={2}>
      <FaCheckSquare
        style={{
          color: value === 1 ? "limegreen" : "gray",
        }}
      />
      <FaMinusCircle
        style={{
          color: value === 2 ? "red" : "gray",
        }}
      />
    </Flex>
  );
}

export default function Evaluations({
  basic,
  work,
  properties,
  contributors,
  ...props
}: {
  basic?: number;
  work?: number;
  properties?: number;
  contributors?: number;
  [key: string]: any;
}) {
  return (
    <VStack alignItems={"flex-start"} width="100%" {...props}>
      {basic && (
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
            Basic
          </Text>
          <EvaluationSymbols value={basic} />
        </Flex>
      )}
      {work && (
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
            Work
          </Text>
          <EvaluationSymbols value={work} />
        </Flex>
      )}
      {properties && (
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
            Properties
          </Text>
          <EvaluationSymbols value={properties} />
        </Flex>
      )}
      {contributors && (
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
            Contributors
          </Text>
          <EvaluationSymbols value={contributors} />
        </Flex>
      )}
    </VStack>
  );
}
