export type ChessColor = "black" | "white";

export type GamePiece = {
  name: string;
  color: ChessColor;
  value: number;
  image: string;
};
