"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { GameContextProvider } from "../components/contexts/GameContext";

export function Layout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <ChakraProvider>
        <GameContextProvider>

          <Component {...pageProps} />
        </GameContextProvider>
      </ChakraProvider>
    </>
  );
}

export default Layout;
