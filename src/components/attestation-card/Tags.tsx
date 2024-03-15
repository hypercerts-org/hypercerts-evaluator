import { Badge, Flex, Text, VStack } from "@chakra-ui/react";

export default function Tags({
  tags,
  ...props
}: {
  tags?: string[];
  [key: string]: any;
}) {
  if (!tags || tags.length === 0) return null;
  return (
    <VStack alignItems={"flex-start"} width="100%" {...props}>
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Tags
      </Text>
      <Flex alignItems={"flex-start"} width="100%" gap={1} {...props}>
        {tags.map((tag, index) => (
          <Badge key={index}>{tag}</Badge>
        ))}
      </Flex>
    </VStack>
  );
}
