import { TrustedAttestor } from "./trusted-attestor.type";
import { useQuery } from "@tanstack/react-query";

export const useTrustedAttestors = () => {
  return useQuery<TrustedAttestor[]>({
    queryKey: ["trustedAttestors"],
    queryFn: async () => {
      const res = await fetch("/api/trusted-attestors");
      return res.json();
    },
  });
};
