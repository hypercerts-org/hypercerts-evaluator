import { FaCheckSquare, FaMinusCircle } from "react-icons/fa";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { fromBytes, hexToString } from "viem";

function isValid(value: string) {
  const stringValue = hexToString(value as `0x${string}`).replace(/\0/g, ""); // Remove null characters
  return stringValue === "valid";
}

function isInvalid(value: string) {
  const stringValue = hexToString(value as `0x${string}`).replace(/\0/g, ""); // Remove null characters
  return stringValue === "invalid";
}

function EvaluationSymbols({ value }: { value: string }) {
  return (
    <Flex gap={2}>
      <FaCheckSquare
        style={{
          color: isValid(value) ? "limegreen" : "gray",
        }}
      />
      <FaMinusCircle
        style={{
          color: isInvalid(value) ? "red" : "gray",
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
  basic?: string;
  work?: string;
  properties?: string;
  contributors?: string;
  [key: string]: any;
}) {
  return (
    <VStack py={5} alignItems={"flex-start"} width="100%" {...props}>
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
