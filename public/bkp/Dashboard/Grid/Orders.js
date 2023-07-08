import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../Components/Title';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '021345',
    '19 May, 2021 : 10:10 AM',
    '19 May, 2021 : 10:10 AM',
    'New York',
    'Yes'
  ),
  createData(
    1,
    '021345',
    '19 May, 2021 : 10:10 AM',
    '19 May, 2021 : 10:10 AM',
    'New York',
    'Yes'
  ),
  createData(2, '021345',
    '19 May, 2021 : 10:10 AM',
    '19 May, 2021 : 10:10 AM',
    'New York',
    'Yes'),
  createData(
    3,
    '021345',
    '19 May, 2021 : 10:10 AM',
    '19 May, 2021 : 10:10 AM',
    'New York',
    'Yes'
  ),
  createData(
    4,
    '021345',
    '19 May, 2021 : 10:10 AM',
    '19 May, 2021 : 10:10 AM',
    'New York',
    'Yes'
  ),
];

const columns = [
  {
    field: 'subjectId',
    headerName: 'Subject Id',
    width: 250,
    editable: true,
  },
  {
    field: 'visitTime',
    headerName: 'Visit Time',
    width: 250,
    editable: true,
  },
  {
    field: 'previousVisit',
    headerName: 'Previous Visit',
    width: 210,
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Location',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    /* valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`, */
  },
  {
    field: 'registered',
    headerName: 'Registered',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    /* valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`, */
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    /* valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`, */
  },
];

const rowsUpdated = [
  { id: 1, subjectId: '234897230', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location:'Mumbai', registered:'Yes', status: 'Visit' },
  { id: 2, subjectId: '234234244', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location:'Chennai', registered:'Yes', status: 'Visit' },
  { id: 3, subjectId: '329427202', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location:'Kerala', registered:'Yes', status: 'Visit' },
  { id: 4, subjectId: '093729289', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location:'Mumbai', registered:'Yes', status: 'Visit' },
  { id: 5, subjectId: '342342343', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location:'Mumbai', registered:'Yes', status: 'Visit' },
  { id: 6, subjectId: '982372373', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location:'Mumbai', registered:'Yes', status: 'Visit' },
  { id: 7, subjectId: '092332829', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location:'Mumbai', registered:'Yes', status: 'Visit' },
  { id: 8, subjectId: '213234234', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location:'Mumbai', registered:'Yes', status: 'Visit' },
  { id: 9, subjectId: '230937392', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location:'Mumbai', registered:'Yes', status: 'Visit' },
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Today's Visits</Title>
      {/* <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Subject Id</TableCell>
            <TableCell>Visit Time</TableCell>
            <TableCell>Previous Visit</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>registered</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>Show</TableCell>
              <TableCell><Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                Visit
              </Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
       <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowsUpdated}
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
      />
      </div>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
