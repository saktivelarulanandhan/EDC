import React from "react";
import { useNavigate } from "react-router-dom";
import TableList from "../../organisms/TableList/TableList";
const FormsList = () => {
  const navigate = useNavigate();
  const columns = [
    { field: "formId", headerName: "Form Id", width: 250 },
    { field: "formName", headerName: "Form Name", width: 450 },
    { field: "status", headerName: "Status", width: 250 },
    { field: "formCode", headerName: "Form Code", width: 200 },
    { field: "formVersion", headerName: "Form Version", width: 250 },
    { field: "lastUpdated", headerName: "Last updated", width: 250 },
  ];
  const data = [
    {
      id: 1,
      formId: 1,
      formName: "Form 1",
      status: "In Progress",
      formCode: "Form 001",
      formVersion: "v-0.1",
      lastUpdated: "19 May, 2021 : 10:10 AM",
    },
  ];
  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Forms list</p>
          <p
            onClick={() => {
              navigate("/clinicalApp/forms/builder/new");
            }}
          >
            Create New Form
          </p>
        </div>
        <div>
          <TableList
            columns={columns}
            data={data}
            rowClick={(event: any) => {
              console.log("row clicked", event);
              navigate(`/clinicalApp/forms/form/${event.id}`);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default FormsList;
