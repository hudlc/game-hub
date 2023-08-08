import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
  grid,
  Hide,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `
        "nav"
        "main"
      `,
        lg: `
        "nav nav" 
        "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="blue.300">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="purple.300">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
