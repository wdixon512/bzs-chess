import { Text, Flex, Grid, Box } from "@chakra-ui/react";
import { GameContext } from "../components/contexts/GameContext";
import { useContext } from "react"



export function Play({ Component, pageProps }) {

  const { player1, player2 } = useContext(GameContext);

  return (
    <Flex>
      <Box>{player1}</Box>
      <Box>{player2}</Box>
    </Flex>
  );
}

export default Play;
