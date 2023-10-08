import { Grid, GridItem } from "@chakra-ui/react";
import ChessSquare from "./ChessSquare";

export const ChessBoard = () => {
  return (
    <Grid
      templateColumns="repeat(8, 1fr)"
      w="80vw"
      h="80vw"
      maxW={{ base: "100vh", md: "80vh" }}
      maxH={{ base: "100vh", md: "80vh" }}
      margin="auto"
    >
      {Array(8)
        .fill("")
        .map((_, i) =>
          Array(8)
            .fill("")
            .map((_, j) => <ChessSquare row={i} column={j} />)
        )}
    </Grid>
  );
};

export default ChessBoard;
