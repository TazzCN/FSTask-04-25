import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

function App() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Header />
      <Table />
    </Box>
  );
}

export default App;
