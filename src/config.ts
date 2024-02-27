import { configureChains, createConfig, mainnet, sepolia } from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { optimism } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

// Hypercerts API

export const HYPERCERTS_API_URL =
  "https://hypercerts-api-staging.up.railway.app/graphql";

export const GQL_QUERY_STALE_TIME = 1000 * 60 * 30; // 30 minutes

// Ethereum Attetation Service (EAS)

export const EAS_SCHEMA_UID_EVALUATIONS =
  "0x33e9094830a5cba5554d1954310e4fbed2ef5f859ec1404619adea4207f391fd";

type EasConfig = {
  id: number;
  address: string;
  registryAddress: string;
  explorerUrl: string;
};

export const EAS_CONFIG: EasConfig[] = [
  {
    id: 11155111, // Ethereum Sepolia
    address: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
    registryAddress: "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0",
    explorerUrl: "https://sepolia.easscan.org",
  },
];

// Wagmi

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: "hmHpo1v4GNpkau5frOZ744RIS5nOxtXF" }),
    publicProvider(),
  ]
);
export { chains as supportedChains };

const { connectors } = getDefaultWallets({
  appName: "Hypercerts Evaluator",
  projectId: "8e594d53331b16a73ef2ef21879e2337",
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
