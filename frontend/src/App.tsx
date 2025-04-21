import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Table height={"calc(100% - 64px"} />
    </Box>
  );
}

export default App;
