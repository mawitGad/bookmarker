import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "../appContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
        <Head>
        <title>Bookmarker | a bookmark saver</title>
        </Head>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
