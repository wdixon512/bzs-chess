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
    //test comment
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
      <Center>
        <Input
          type="text"
          value={player1Name}
          onChange={(e) => setPlayer1Name(e.target.value)}
          placeholder="Player 1 Name"
          marginInline={100}
          mt={5}
        />
        <Input
          type="text"
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
          placeholder="Player 2 Name"
          marginInline={100}
          mt={5}
        />
      </Center>
      <Center>
        <Button
          opacity={0.5}
          mt={"5"}
          bgColor={"teal"}
          textColor={"lightgrey"}
          width={"fit-content"}
          justifySelf={"center"}
        >
          Play
        </Button>
      </Center>
    </Flex>
  );
}

export default Home;
