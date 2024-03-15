import * as R from "remeda";

import { Badge, Flex, Text, VStack } from "@chakra-ui/react";
import { FragmentOf, readFragment } from "gql.tada";

import { AttestContext } from "../../pages/claim/[id]";
import { FullClaimFragment } from "../../hypercerts/fragments/full-claim.fragment";
import { useContext } from "react";

export default function ClaimWorkScope({ ...props }: { [key: string]: any }) {
  const attestContext = useContext(AttestContext);
  const claim = readFragment(FullClaimFragment, attestContext?.claim);
  if (!claim) return null;

  const workScope =
    R.isArray(claim.work_scope) && claim.work_scope.length > 0
      ? claim.work_scope
      : null;

  return (
    <VStack p={5} alignItems={"flex-start"} width="100%" {...props}>
      <Text as="span" textStyle={"secondary"} fontSize={"sm"}>
        Work Scope
      </Text>
      <Flex gap={1} wrap={"wrap"} w="100%">
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
