import { GridItem, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { GameContext } from "./contexts/GameContext";
import ChessPiece from "./ChessPiece";
import { useDrag, useDrop } from "react-dnd";
import { m } from "framer-motion";
import { GameLocation } from "../models/GameLocation";

export type ChessPieceProps = {
  row: number;
  column: number;
};

export const ChessSquare = (props: ChessPieceProps) => {
  const { getPiece, movePiece } = useContext(GameContext);
  const { row, column } = props;

  const piece = getPiece({ rank: row, file: column });

  const [_, drop] = useDrop({
    accept: "chessPiece",
    drop: (item: GameLocation, monitor) => {
      movePiece(
        { rank: item.rank, file: item.file },
        { rank: row, file: column }
      );
    },
  });

  const [{}, drag] = useDrag({
    type: "chessPiece",
    item: { rank: row, file: column },
  });

  function getSquareColor(i: number, j: number) {
    if (i % 2 === 0) return j % 2 == 0 ? "white" : "black";
    else return j % 2 == 0 ? "black" : "white";
  }

  return (
    <GridItem
      ref={drop}
      bgColor={getSquareColor(row, column)}
      aspectRatio={1}
      display="flex"
      justifyContent="center"
    >
      {piece && <ChessPiece ref={drag} piece={piece} />}
    </GridItem>
  );
};

export default ChessSquare;
