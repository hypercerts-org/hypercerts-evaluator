import { Badge, Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import EthAddress from "../EthAddress";
import { FullClaimFragment } from "../../claims/fragments";

export default function ClaimWorkScope({
  claim,
  ...props
}: {
  claim: FragmentOf<typeof FullClaimFragment>;
  [key: string]: any;
}) {
  let _claim = readFragment(FullClaimFragment, claim);

  const workScope = Array.isArray(_claim.metadata?.work_scope)
    ? _claim.metadata?.work_scope
    : null;

  return (
    <VStack p={5} alignItems={"flex-start"} width="100%" {...props}>
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Work Scope
      </Text>
      <Flex gap={2} wrap={"wrap"} w="100%">
        {workScope ? (
          workScope.map((scope, i) => (
            <Badge
              key={i}
              colorScheme="purple"
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
            >
              {scope}
            </Badge>
          ))
        ) : (
          <Text>No work scope</Text>
        )}
      </Flex>
    </VStack>
  );
}
