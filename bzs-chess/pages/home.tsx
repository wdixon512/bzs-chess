"use client";

import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Img,
  useColorMode,
} from "@chakra-ui/react";

export function Home({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction={"column"}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Center>
        <Img src="/bzs-chess.png"></Img>
      </Center>
      <Center>
        <Heading>It's Time to Play a Game</Heading>
      </Center>
      <Center>
        <Button
          mt={"5"}
          bgColor={"blueviolet"}
          textColor={"lightgrey"}
          width={"fit-content"}
          justifySelf={"center"}
        >
          Click Me
        </Button>
      </Center>
    </Flex>
  );
}

export default Home;
