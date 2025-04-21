import { GridColDef } from "@mui/x-data-grid";

export const PROJECT_TABLE_COLUMNS: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "url",
    headerName: "URL",
  },
  {
    field: "status",
    headerName: "Status",
  },
  {
    field: "country",
    headerName: "Country",
  },
];
