import { supportedChains } from "../config";

export function isChainIdSupported(id: number | undefined) {
  if (id === undefined) return false;
  return supportedChains.find((c) => c.id === id) !== undefined;
}
