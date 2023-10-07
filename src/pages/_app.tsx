"use client";

import { Box, ChakraProvider, Container } from "@chakra-ui/react";
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
          <Box h="100vh">
            <Component {...pageProps} />
          </Box>
        </GameContextProvider>
      </ChakraProvider>
    </>
  );
}

export default Layout;
