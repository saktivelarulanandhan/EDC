import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Autocomplete, Button, Chip, Grid, Stack, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { useRef } from 'react';

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

export default function DataEntryReviwerComments(props) {
    const inputElement = useRef();

    const [value, setValue] = React.useState(0);
    const [comments, setComments] = React.useState({ "preferred": [{ comment: "Reviewer 1 Comment", date: "06 May 2023, 12:57" }], "mannual": [{ comment: "Reviewer 2 Comment", date: "06 May 2023, 12:57"  }] });


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const addCommentsHandler = (params) => {
        const currDt = new Date();
        const addComment = [{ comment: inputElement.current.value, date: `${currDt.getDate()} ${currDt.toLocaleString("default",{month: 'short'})} ${currDt.getFullYear()}, ${currDt.getHours()}: ${currDt.getMinutes()}`}];
        setComments(prevcomments => {
            prevcomments.preferred = [...prevcomments.preferred, ...addComment];
            return { ...prevcomments };
        });
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
                    <Tab label="Reviewer 1" {...a11yProps(0)} />
                    <Tab label="Reviewer 2" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <Box

                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <Box minHeight={'150px'} maxHeight={'500px'} overflow={'auto'} >
                        {comments.preferred.length !== 0 ? comments.preferred.map(userComment => {
                            return <Box mb={1} style={{
                                display: "flex",
                                borderBottom: '1px solid #e3e0e0'
                            }}>
                                <Chip label="S" variant="outlined" style={{ color: "#000", background: "#EADDFF" }} />
                                <Box mb={1} mt={1}>
                                    <Typography variant="body2" ml={2} gutterBottom style={{ lineHeight: '1' }}>
                                        {userComment.comment}
                                    </Typography>
                                    <Typography variant="caption" ml={2} gutterBottom >
                                        {userComment.date}
                                    </Typography>
                                </Box>
                            </Box>
                        })
                            :
                            <Box style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Typography variant="subtitle2" gutterBottom>
                                    Enter your comments here...
                                </Typography>
                            </Box>
                        }
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} marginTop={'1rem'}>
                            <TextField
                                inputRef={inputElement}
                                required
                                id="lastName"
                                name="lastName"
                                label="Comments"
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
                            <Stack direction="row"
                                alignItems="center"
                                justifyContent="center" spacing={2} pt={4} pb={2}>
                                <Button variant="contained" endIcon={<SaveOutlined />} onClick={addCommentsHandler}>
                                    Add Comments
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box minHeight={'150px'} > {comments.mannual.length !== 0 ? comments.mannual.map(userComment => {
                        return <Box mb={1} style={{
                            display: "flex",
                            borderBottom: '1px solid #e3e0e0'
                        }}>
                            <Chip label="S" variant="outlined" style={{ color: "#000", background: "#EADDFF" }} />
                            <Box mb={1} mt={1}>
                                <Typography variant="body2" ml={2} gutterBottom style={{ lineHeight: '1' }}>
                                    {userComment.comment}
                                </Typography>
                                <Typography variant="caption" ml={2} gutterBottom >
                                    {userComment.date}
                                </Typography>
                            </Box>
                        </Box>
                    })
                        :
                        <Box style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Typography variant="subtitle2" gutterBottom>
                                Enter your comments here...
                            </Typography>
                        </Box>
                    }
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Comments"
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
                            <Stack direction="row"
                                alignItems="center"
                                justifyContent="center" spacing={2} pt={4} pb={2}>
                                <Button variant="contained" endIcon={<SaveOutlined />}>
                                    Add Comments
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
        </Box>
    );
}