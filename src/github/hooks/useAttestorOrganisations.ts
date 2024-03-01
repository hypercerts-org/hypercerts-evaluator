import { AttestorOrganisation } from "../types/attestor-organisation.type";
import { TrustedAttestor } from "../types/trusted-attestor.type";
import { useQuery } from "@tanstack/react-query";

export const useAttestorOrganisations = () => {
  return useQuery<AttestorOrganisation[]>({
    queryKey: ["attestorOrganisations"],
    queryFn: async () => {
      const res = await fetch("/api/attestor-organisations");
      return res.json();
    },
  });
};
