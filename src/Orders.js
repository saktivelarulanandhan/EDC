import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

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

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Today's Visits</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Subject Id</TableCell>
            <TableCell>Visit Time</TableCell>
            <TableCell>Previous Visit</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Registered</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
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
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
