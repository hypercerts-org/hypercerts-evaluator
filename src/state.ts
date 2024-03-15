import { create } from "zustand";

type GlobalState = {
  welcomeModalOpen: boolean;
  setWelcomeModalOpen: (isOpen: boolean) => void;
  whitelistAttestTags: string[];
  addWhitelistAttestTag: (tag: string) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  welcomeModalOpen: true,
  setWelcomeModalOpen: (isOpen: boolean) => set({ welcomeModalOpen: isOpen }),
  whitelistAttestTags: [],
  addWhitelistAttestTag: (tag: string) => {
    set((state) => ({
      whitelistAttestTags: state.whitelistAttestTags.includes(tag)
        ? state.whitelistAttestTags
        : [...state.whitelistAttestTags, tag],
    }));
  },
}));
