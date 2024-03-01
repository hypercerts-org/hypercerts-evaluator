import { Avatar, Flex, Text } from "@chakra-ui/react";

import { useAttestorOrganisation } from "../../github/hooks/useAttetstorOrganisation";

export default function OrgItem({ org }: { org: string }) {
  const orgDetails = useAttestorOrganisation({ org });
  if (!orgDetails) return null;
  return (
    <Flex direction={"column"} gap={2}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name={orgDetails.name} src={orgDetails.logo_url} size={"sm"} />
        <Text>
          <a href={orgDetails.org_url} target="_blank" rel="noreferrer">
            {" "}
            {orgDetails.name}
          </a>
        </Text>
      </Flex>
      <Text>{orgDetails.description}</Text>
    </Flex>
  );
}
