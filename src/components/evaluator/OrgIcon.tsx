import { Avatar, Tooltip } from "@chakra-ui/react";

import { useAttestorOrganisation } from "../../github/hooks/useAttetstorOrganisation";

export default function OrgIcon({ org }: { org: string }) {
  const orgDetails = useAttestorOrganisation({ org });
  if (!orgDetails) return null;
  return (
    <Tooltip label={orgDetails.description}>
      <Avatar name={orgDetails.name} src={orgDetails.logo_url} size={"sm"} />
    </Tooltip>
  );
}
