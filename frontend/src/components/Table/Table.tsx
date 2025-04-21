import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { PROJECT_TABLE_COLUMNS } from "../../consts/tables";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../queries/projects/getAllProjects";

const Table = () => {
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
  });

  console.log(projects.data);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <DataGrid columns={PROJECT_TABLE_COLUMNS} />
    </Box>
  );
};
export default Table;
