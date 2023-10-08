import { GridItem, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { GameContext } from "./contexts/GameContext";
import ChessPiece from "./ChessPiece";

export type ChessPieceProps = {
  row: number;
  column: number;
};

export const ChessSquare = (props: ChessPieceProps) => {
  const { getPiece } = useContext(GameContext);
  const { row, column } = props;
  const piece = getPiece({ rank: row, file: column });

  function getSquareColor(i: number, j: number) {
    if (i % 2 === 0) return j % 2 == 0 ? "white" : "black";
    else return j % 2 == 0 ? "black" : "white";
  }

  return (
    <GridItem
      bgColor={getSquareColor(row, column)}
      aspectRatio={1}
      display="flex"
      justifyContent="center"
    >
      {piece && <ChessPiece piece={piece} />}
    </GridItem>
  );
};

export default ChessSquare;
