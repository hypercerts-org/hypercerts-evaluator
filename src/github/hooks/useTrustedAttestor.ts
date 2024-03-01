import { useTrustedAttestors } from "./useTrustedAttestors";

export function useTrustedAttestor({
  address,
}: {
  address: string | undefined;
}) {
  const { data: trustedAttestors, isPending, error } = useTrustedAttestors();
  if (isPending || error || !address) return;
  return trustedAttestors.find((attestor) => attestor.eth_address === address);
}
