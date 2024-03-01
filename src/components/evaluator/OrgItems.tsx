import { Avatar, AvatarGroup, Flex } from "@chakra-ui/react";

import OrgItem from "./OrgItem";

export default function OrgItems({ orgs }: { orgs: string[] }) {
  return (
    <Flex direction="column" gap={2}>
      {orgs.map((org) => (
        <OrgItem key={org} org={org} />
      ))}
    </Flex>
  );
}
