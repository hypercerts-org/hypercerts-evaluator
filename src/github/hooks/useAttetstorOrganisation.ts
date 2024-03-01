import { useAttestorOrganisations } from "./useAttestorOrganisations";

export function useAttestorOrganisation({ org }: { org: string }) {
  const {
    data: attestorOrganisations,
    isPending,
    error,
  } = useAttestorOrganisations();
  if (isPending || error) return;
  return attestorOrganisations.find((attestor) => attestor.id === org);
}
