import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ height: "100%" }}>
      <Head>
        <meta
          name="description"
          content="This first version of the Hypercerts Evaluator allows a group of trusted evaluators attest to the correctness of the hypercert claim data."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={{ minHeight: "100%" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
