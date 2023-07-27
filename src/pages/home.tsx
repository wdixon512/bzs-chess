"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Img,
  Input,
  useColorMode,
} from "@chakra-ui/react";

import { PlayerForm } from "../components/PlayerForm";


type Dog = {
  name: string,
  breed: string
}

export function Home({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    //TODO: test comment
    <Flex direction={"column"}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Center>
        <Img src="/bzs-chess.png"></Img>
      </Center>
      <Center>
        <Heading>Let's Chess it UP</Heading>
      </Center>
      <PlayerForm />
    </Flex>
  );
}

export default Home;
