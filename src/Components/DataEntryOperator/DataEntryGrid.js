import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Title from '../Title';
import { Box, Chip, Grid, Paper } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import DataEntryFilter from '../../Dashboard/Filters/DataEntryFilter';

//Client -> Project -> Study -> Site -> Subject -> Visit
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



const DataEntryGrid = (props) => {
    const navigate = useNavigate();
    const [reject, setReject] = useState(0);
    const handleEvent = (event) => {
        navigate("/clinicalApp/dataEntry/form");
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const columns = [
        {
            field: 'subjectId',
            headerName: 'Form Id',
            width: 210,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 250,
            editable: true,
            renderCell: ({ row }) => {
                // this is a temp logic for demo
                console.log(reject);
                const listOfStatus = [{
                    status: 'pending', element: <Chip style={{ backgroundColor: '#1e9bcd', color: '#fff' }}
                        label="pending"
                    />
                },
                {
                    status: 'pending', element: <Chip style={{ backgroundColor: '#1e9bcd', color: '#fff' }}
                        label="pending"
                    />
                },
                {
                    status: 'in-progress', element: <Chip style={{ backgroundColor: '#d58633', color: '#fff' }}
                        label="In-Progress"
                    />
                }, {
                    status: 'pending', element: <Chip style={{ backgroundColor: '#1e9bcd', color: '#fff' }}
                        label="pending"
                    />
                }, {
                    status: 'pending', element: <Chip style={{ backgroundColor: '#1e9bcd', color: '#fff' }}
                        label="pending"
                    />
                },];
                const found = listOfStatus.find((status, index) => index + 1 === row.id);
                return (Number(reject) === row.id) ? listOfStatus[1].element : found.element;
                //listOfStatus.map((status, index) => (Number(reject) === 3) ? listOfStatus[1].element : index + 1 === row.id && status.element);
            }
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
    ];

    const rowsUpdated = [
        { id: 1, subjectId: '234897230', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location: 'Mumbai', registered: 'Yes', status: 'Visit' },
        { id: 2, subjectId: '234234244', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location: 'Chennai', registered: 'Yes', status: 'Visit' },
        { id: 3, subjectId: '329427202', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location: 'Kerala', registered: 'Yes', status: 'Visit' },
        { id: 4, subjectId: '093729289', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location: 'Mumbai', registered: 'Yes', status: 'Visit' },
        { id: 5, subjectId: '342342343', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location: 'Mumbai', registered: 'Yes', status: 'Visit' },
        { id: 6, subjectId: '982372373', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location: 'Mumbai', registered: 'Yes', status: 'Visit' },
        { id: 7, subjectId: '092332829', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location: 'Mumbai', registered: 'Yes', status: 'Visit' },
        { id: 8, subjectId: '213234234', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location: 'Mumbai', registered: 'Yes', status: 'Visit' },
        { id: 9, subjectId: '230937392', visitTime: '19 May, 2021 : 10:10 AM', previousVisit: '19 May, 2021 : 10:10 AM', location: 'Mumbai', registered: 'Yes', status: 'Visit' },
    ];


    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const id = query.get('reject');
        setReject(id);
    }, [])

    return (
        <React.Fragment>

            <Grid item xs={12} md={8} mb={4} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <DataEntryFilter />
                </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Box display={'flex'} flexDirection={'row'}>
                        <Title>Data Entry - Forms</Title>
                    </Box>
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
                            onRowClick={handleEvent}
                        />
                    </div>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default DataEntryGrid;