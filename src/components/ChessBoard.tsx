import { Grid, GridItem } from "@chakra-ui/react";

export const ChessBoard = () => {
  function getSquareColor(i: number, j: number) {
    if (i % 2 === 0) return j % 2 == 0 ? "white" : "black";
    else return j % 2 == 0 ? "black" : "white";
  }

  return (
    <Grid
      templateColumns="repeat(8, 1fr)"
      w="80vw"
      maxW={{ base: "100vh", md: "80vh" }}
      maxH={{ base: "100vh", md: "80vh" }}
      h="80vw"
      margin="auto"
    >
      {Array(8)
        .fill("")
        .map((_, i) =>
          Array(8)
            .fill("")
            .map((_, j) => (
              <GridItem
                pb="100%"
                h="0"
                bgColor={getSquareColor(i, j)}
                aspectRatio={1}
              ></GridItem>
            ))
        )}
    </Grid>
  );
};

export default ChessBoard;
