import { Box, Image, forwardRef } from "@chakra-ui/react";
import { GamePiece } from "../models/GamePiece";
import { ConnectDragSource, useDrag } from "react-dnd";
import { useRef } from "react";
import React from "react";

type ChessPieceProps = {
  piece?: GamePiece | null;
};

export const ChessPiece = forwardRef((props: ChessPieceProps, ref) => {
  const { piece } = props;

  return (
    <Box ref={ref}>
      <Image
        src={`${piece.image}`}
        alt={`${piece.color} ${piece.name}`}
        h="full"
      />
    </Box>
  );
});

export default ChessPiece;
