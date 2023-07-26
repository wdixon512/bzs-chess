"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export function Layout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default Layout;
