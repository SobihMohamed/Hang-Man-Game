import "@mantine/core/styles.css";
import { useRoutes } from "react-router-dom";
import { Box, MantineProvider } from "@mantine/core";
import Home from "./Pages/Home";
import Game from "./Pages/Game";
function App() {
  const routElements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Game",
      element: <Game />,
    },
  ]);
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Box mih="100vh" bg={"black"}>
        {routElements}
      </Box>
    </MantineProvider>
  );
}

export default App;
