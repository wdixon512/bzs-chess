"use client";

import {
  Box,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Img,
} from "@chakra-ui/react";

export function Home({ Component, pageProps }) {
  return (
    <Flex direction={"column"}>
      <Center>
        <Img src="/bzs-chess.png"></Img>
      </Center>
      <Center>
        <Heading>It's Time to Play a Game</Heading>
      </Center>
    </Flex>
  );
}

export default Home;
