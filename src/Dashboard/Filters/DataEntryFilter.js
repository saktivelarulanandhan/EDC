import { Autocomplete, Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import Title from '../../Components/Title';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function DataEntryFilter() {
    return (
        <React.Fragment>
            <Title>Quick Filter</Title>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Autocomplete
                        id="disable-close-on-select"
                        autoHighlight
                        options={[3928336]}
                        renderInput={(params) => (
                            <TextField {...params} label="Client Name" variant="standard" sx={{
                                '& .MuiFormLabel-root': {
                                    fontSize: '1rem',
                                },
                            }} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Autocomplete
                        id="disable-close-on-select"
                        autoHighlight
                        options={[3262983]}
                        renderInput={(params) => (
                            <TextField {...params} label="Project Name" variant="standard" sx={{
                                '& .MuiFormLabel-root': {
                                    fontSize: '1rem',
                                },
                            }} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Autocomplete
                        id="disable-close-on-select"
                        autoHighlight
                        options={[239472]}
                        renderInput={(params) => (
                            <TextField {...params} label="Study Name" variant="standard" sx={{
                                '& .MuiFormLabel-root': {
                                    fontSize: '1rem',
                                },
                            }} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Autocomplete
                        id="disable-close-on-select"
                        autoHighlight
                        options={[239472]}
                        renderInput={(params) => (
                            <TextField {...params} label="Site Name" variant="standard" sx={{
                                '& .MuiFormLabel-root': {
                                    fontSize: '1rem',
                                },
                            }} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Autocomplete
                        id="disable-close-on-select"
                        autoHighlight
                        options={[239472]}
                        renderInput={(params) => (
                            <TextField {...params} label="Subject Name" variant="standard" sx={{
                                '& .MuiFormLabel-root': {
                                    fontSize: '1rem',
                                },
                            }} />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Autocomplete
                        id="disable-close-on-select"
                        autoHighlight
                        options={[99383938, 2131232, 12323223]}
                        renderInput={(params) => (
                            <TextField {...params} label="Visit Name" variant="standard" sx={{
                                '& .MuiFormLabel-root': {
                                    fontSize: '1rem',
                                },
                            }} />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid m={1} pt={2} container spacing={2} direction="row"
                alignItems="center"
                justifyContent="center">
                <Box mr={1}>
                    <Button size="small"  color="primary" variant="contained">
                        <SearchIcon fontSize="small" /> Search
                    </Button>
                </Box>
                <Box>
                    <Button size="small" variant="outlined">
                        <FilterAltIcon fontSize="small" /> Filter
                    </Button>
                </Box>
            </Grid>


        </React.Fragment>
    );
}

export default DataEntryFilter;