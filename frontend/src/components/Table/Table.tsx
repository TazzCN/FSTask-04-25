import { DataGrid } from "@mui/x-data-grid";
import { PROJECT_TABLE_COLUMNS } from "../../consts/tables";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../queries/projects/getAllProjects";

const Table = ({ height }: { height: string | number }) => {
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
  });

  return (
    <DataGrid
      sx={{ height }}
      columns={PROJECT_TABLE_COLUMNS}
      rows={projects.data || []}
    />
  );
};

export default Table;
