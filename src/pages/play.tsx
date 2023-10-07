import { Flex } from "@chakra-ui/react";
import { GameContext } from "../components/contexts/GameContext";
import { useContext } from "react";
import ChessBoard from "../components/ChessBoard";

export function Play({ Component, pageProps }) {
  const { player1, player2 } = useContext(GameContext);

  return <ChessBoard />;
}

export default Play;
