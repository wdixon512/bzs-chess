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

export function Home({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const handlePlayClick = () => {
    // Perform actions when Play button is clicked
    console.log("Player 1 Name:", player1Name);
    console.log("Player 2 Name:", player2Name);
  };

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
