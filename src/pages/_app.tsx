import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { GQL_QUERY_STALE_TIME, supportedChains, wagmiConfig } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../fonts";
import Head from "next/head";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { hyperTheme } from "../theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: GQL_QUERY_STALE_TIME, gcTime: GQL_QUERY_STALE_TIME },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <WagmiConfig config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider chains={supportedChains}>
            <ChakraProvider theme={hyperTheme}>
              <Fonts />
              <Component {...pageProps} />
            </ChakraProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiConfig>
    </>
  );
}
