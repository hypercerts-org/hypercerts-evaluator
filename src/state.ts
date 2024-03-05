import { create } from "zustand";

type GlobalState = {
  welcomeModalOpen: boolean;
  setWelcomeModalOpen: (isOpen: boolean) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  welcomeModalOpen: true,
  setWelcomeModalOpen: (isOpen: boolean) => set({ welcomeModalOpen: isOpen }),
}));
