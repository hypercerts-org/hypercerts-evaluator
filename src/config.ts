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

export const EVALUATIONS_SCHEMA_UID =
  "0x6fc5f6423ba06f5ce1fd293d0eee50c24adf802e085fae755ad7296e35dd3f00";

export const EVALUATIONS_SCHEMA =
  "string hypercert_id,bytes32 evaluate_basic,bytes32 evaluate_work,bytes32 evaluate_contributors,bytes32 evaluate_properties,string comments,string[] tags";

type EasConfig = {
  id: number;
  address: string;
  registryAddress: string;
  explorerUrl: string;
  graphqlUrl: string;
};

export const EAS_CONFIG: EasConfig[] = [
  {
    id: 11155111, // Ethereum Sepolia
    address: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
    registryAddress: "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0",
    explorerUrl: "https://sepolia.easscan.org",
    graphqlUrl: "https://sepolia.easscan.org/graphql",
  },
];

// Wagmi

export const ETH_DEFAULT_CHAIN_ID = 11155111;

const { chains, publicClient } = configureChains(
  [sepolia, mainnet],
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

// UI

export const CLAIMS_PER_PAGE = 12;
export const ATTESTORS_PER_PAGE = 2;
