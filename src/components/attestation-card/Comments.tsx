import { Text, VStack } from "@chakra-ui/react";

export default function Comments({
  comments,
  ...props
}: {
  comments?: string;
  [key: string]: any;
}) {
  if (!comments) return null;
  return (
    <VStack py={5} alignItems={"flex-start"} width="100%" {...props}>
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Comments
      </Text>
      <Text>{comments}</Text>
    </VStack>
  );
}
