import React from "react";
import { Table } from "@mui/material";
import { DataGrid, GridMoreVertIcon } from "@mui/x-data-grid";
export interface ITableListProps {
  columns: any;
  rowClick: any;
  data: any;
}
function TableList(props: ITableListProps) {
  const { columns, rowClick, data } = { ...props };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowClick={rowClick}
      />
    </div>
  );
}
export default TableList;
