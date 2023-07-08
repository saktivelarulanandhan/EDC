import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Autocomplete, Button, Grid, Stack, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function AddFormTab(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const createFormHandler = (params) => {
        props.createFormHandler(params);
        props.closeForm();
    }
    return (
        <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
            <AppBar position="static" style={{ background: '#fff', color: 'rgba(0, 0, 0, 0.87)' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Pull From DB" {...a11yProps(0)} />
                    <Tab label="Custom Form" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <Box

                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <Grid item xs={12} sm={12}>
                        <Autocomplete
                            id="disable-close-on-select"
                            autoHighlight
                            options={['MH - Medical Histroy']}
                            renderInput={(params) => (
                                <TextField {...params} label="Pull From DB" variant="standard" sx={{
                                    '& .MuiFormLabel-root': {
                                        fontSize: '1rem',
                                    },
                                }} />
                            )}
                        />
                    </Grid>
                    <Stack direction="row"
                        alignItems="center"
                        justifyContent="center" spacing={2} pt={4} pb={2}>
                        <Button variant="contained" endIcon={<SaveOutlined />} onClick={createFormHandler}>
                            Create From
                        </Button>
                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Form name"
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
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Sample Field1"
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
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Sample Field2"
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
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Sample Field3"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                sx={{
                                    '& .MuiFormLabel-root': {
                                        fontSize: '1rem',
                                    },
                                }}
                            />
                            <Stack direction="row"
                                alignItems="center"
                                justifyContent="center" spacing={2} pt={4} pb={2}>
                                <Button variant="contained" endIcon={<SaveOutlined />}>
                                    Create From
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
        </Box>
    );
}