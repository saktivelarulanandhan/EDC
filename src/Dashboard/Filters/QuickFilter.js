import { Autocomplete, Button, Grid, IconButton, TextField } from '@mui/material';
import React from 'react';
import Title from '../../Components/Title';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function QuickFilter() {
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
                            }}/>
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Autocomplete
                        id="disable-close-on-select"
                        autoHighlight
                        options={[239472]}
                        renderInput={(params) => (
                            <TextField {...params} label="Project Name" variant="standard" sx={{
                                '& .MuiFormLabel-root': {
                                    fontSize: '1rem',
                                },
                            }}/>
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Autocomplete
                        id="disable-close-on-select"
                        autoHighlight
                        options={[99383938,2131232,12323223]}
                        renderInput={(params) => (
                            <TextField {...params} label="Site Name" variant="standard" sx={{
                                '& .MuiFormLabel-root': {
                                    fontSize: '1rem',
                                },
                            }}/>
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        sx={{
                            '& .MuiFormLabel-root': {
                                fontSize: '1rem',
                            },
                        }}
                    />
                </Grid>
            </Grid>
            <Grid m={1} pt={0.5} container spacing={2} direction="row"
                alignItems="center"
                justifyContent="center">
                <Grid item xs={6} sm={1.2}>
                    <Button size="small" mr={1} color="primary" variant="contained">
                        <SearchIcon fontSize="small"/> Search
                    </Button>
                </Grid>
                <Grid item xs={6} sm={1.2}>
                    <Button size="small" variant="outlined">
                        <FilterAltIcon fontSize="small"/> Filter
                    </Button>
                </Grid>
            </Grid>


        </React.Fragment>
    );
}

export default QuickFilter;