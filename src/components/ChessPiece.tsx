import { Image } from "@chakra-ui/react";
import { GamePiece } from "../models/GamePiece";

type ChessPieceProps = {
  piece?: GamePiece | null;
};

export const ChessPiece = (props: ChessPieceProps) => {
  const { piece } = props;

  return (
    <Image
      src={`${piece.image}`}
      alt={`${piece.color} ${piece.name}`}
      h="full"
    />
  );
};

export default ChessPiece;
