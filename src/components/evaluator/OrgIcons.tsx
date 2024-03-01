import { Avatar, AvatarGroup } from "@chakra-ui/react";

import OrgIcon from "./OrgIcon";

export default function OrgIcons({ orgs }: { orgs: string[] }) {
  return (
    <AvatarGroup size="xl" max={2} spacing={1}>
      {orgs.map((org) => (
        <OrgIcon key={org} org={org} />
      ))}
    </AvatarGroup>
  );
}
