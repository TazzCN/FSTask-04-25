import { GridColDef } from "@mui/x-data-grid";

export const PROJECT_TABLE_COLUMNS: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "url",
    headerName: "URL",
    flex: 1,
    renderCell: (params) => {
      return (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          {params.value}
        </a>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
  {
    field: "country",
    headerName: "Country",
    flex: 1,
  },
];
