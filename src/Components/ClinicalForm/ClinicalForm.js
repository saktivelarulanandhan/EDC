import React, { useState } from 'react';
import $ from 'jquery';
import { Box, Button, Container, FormControl, FormControlLabel, Grid, Input, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, Tab, Tabs, Typography } from '@mui/material';
import { ClearAllOutlined, Message, SaveOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CreateFormModal from '../Modal/CreateFormModal';
import EDCBreadcrumbs from '../BreadCrumbs';
window.jQuery = $;
window.$ = $;
function ClinicalForm(props) {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const [popupForm, setPopupForm] = useState(false);
    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    const addPopupOpenHandler = () => {
        setPopupForm(true);
    }

    const addPopupcloseHandler = () => {
        setPopupForm(false);
    }
    const renderFormObj = () => {
        const formData = [
            { "type": "header", "subtype": "h4", "label": "Demographic - EDC Form Entry" },
            { "type": "paragraph", "subtype": "p", "label": "Clinical Form entry helps to collect data for a subject" },
            { "type": "text", "label": "Name", "className": "form-control", "name": "text-1682062140339", "subtype": "text", "showInGroupDesc": "Please entry correct value for this field", "value": "Subject name" },
            { "type": "text", "label": "Address", "className": "form-control", "name": "text-1682062149300", "subtype": "text", "showInGroupDesc": "Use Radio button with M and F value", "value": "Address comes here" },
            { "type": "select", "label": "Marital Status", "className": "form-control", "name": "select-1684565791229", "values": [{ "label": "Single", "value": "male", "selected": true }, { "label": "Married", "value": "female" }] },
            { "type": "number", "label": "Age", "className": "form-control", "name": "number-1684570307921" },
            { "type": "date", "label": "Date Of Birth", "className": "form-control", "name": "date-1684566227404" },
            { "type": "radio-group", "label": "Gender", "name": "radio-group-1684568281738", "values": [{ "label": "Male", "value": "M" }, { "label": "Female", "value": "F" }, { "label": "Other", "value": "O" }] },
            { "type": "text", "label": "Blood Group", "className": "form-control", "name": "text-1682062158959", "subtype": "text", "showInGroupDesc": "Please entry correct value for this field", "value": "B+" }, 
            { "type": "text", "label": "Test Field", "className": "form-control", "name": "text-1682062187301", "subtype": "text", "showInGroupDesc": "Please entry correct value for this field", "value": "Test field value" },
            { "type": "text", "label": "Weight", "className": "form-control", "name": "text-1684573352182", "subtype": "text", "units": "Kg", "value": "75" }];

        const filedMapper = [
            {
                type: 'header', value: (element) => <Box fullWidth><Typography component="h1" variant="h5" gutterBottom>
                    {element.label}
                </Typography></Box>
            },
            {
                type: 'paragraph', value: (element) => <Box sx={{ width: '100%', maxWidth: 800 }}><Typography variant='subtitle1' gutterBottom>
                    {element.label}
                </Typography></Box>
            },
            {
                type: 'text', value: (element) => <FormControl variant="standard" style={{display: 'flex', flexDirection: "row"}}>
                    <InputLabel htmlFor="input-with-icon-adornment" disableAnimation={true} shrink={true}>
                        {element.label}
                    </InputLabel>
                    <Box sx={{ '& > :not(style)': { m: 1, mt: 2 } }} style={{flex: 1}}>
                        <Input style={{ width: element.units && element.units.length !== 0 ? '80%' : '100%' }}
                            id="input-with-icon-adornment"
                            type="text"
                            value={element.value ? element.value : ''}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Message onClick={addPopupOpenHandler} /> 
                                </InputAdornment>
                            }
                        />
                        {element.units && element.units.length !== 0 && <Input width={300}
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">Units</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />}
                    </Box>
                    {props.isDataEntryOperator && <span style={{fontWeight: "bold", color: "green"}}>REVIEWED</span>}

                </FormControl>
            },
            {
                type: 'number', value: (element) => <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        {element.label}
                    </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        type="number"
                        startAdornment={
                            <InputAdornment position="start">
                                <Message onClick={addPopupOpenHandler} /> 
                            </InputAdornment>
                        }
                    />
                </FormControl>
            },
            {
                type: 'select', value: (element) => <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        {element.label}
                    </InputLabel>
                    <Select
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <Message onClick={addPopupOpenHandler} /> 
                            </InputAdornment>
                        }
                    >
                        {element.values.map(option => <MenuItem value={option.value}>{option.label}</MenuItem>)}
                    </Select>
                </FormControl>
            },
            {
                type: 'radio-group', value: (element) => <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="input-with-icon-adornment" disableAnimation={true} shrink={true}>
                        {element.label}
                    </InputLabel>
                    <Box pt={1} display={'flex'}>
                        <Box mt={2}><Message onClick={addPopupOpenHandler} /> </Box>
                        <Box mt={1} ml={1}><RadioGroup
                            row
                            id="input-with-icon-adornment"
                            ml={2}
                        >
                            {element.values.map(option => <FormControlLabel value={option.value} control={<Radio />} label={option.label} />)}
                        </RadioGroup></Box>
                    </Box>
                </FormControl>
            },
            {
                type: 'date', value: (element) => <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        {element.label}
                    </InputLabel>
                    <Box fullWidth pt={2} sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}>

                        <Select
                            id="input-with-icon-adornment"
                            label="Day"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Message onClick={addPopupOpenHandler} /> 
                                </InputAdornment>
                            }
                        >
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(option => <MenuItem value={option}>{option}</MenuItem>)}
                        </Select>

                        <Select
                            id="input-with-icon-adornment"
                            label="Month"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Message onClick={addPopupOpenHandler} /> 
                                </InputAdornment>
                            }
                        >
                            {Array.from({ length: 10 }, (_, i) => i + 1).map(option => <MenuItem value={option}>{option}</MenuItem>)}
                        </Select>


                        <Select
                            id="input-with-icon-adornment"
                            label="year"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Message onClick={addPopupOpenHandler} /> 
                                </InputAdornment>
                            }
                        >
                            <MenuItem value="2023">2023</MenuItem>
                        </Select>

                    </Box>
                </FormControl >
            }
        ]
        return formData.map(element => {
            const isFoundIndex = filedMapper.findIndex(field => field.type === element.type);
            if (isFoundIndex !== -1) {
                console.log(element);
                return <Grid item xs={12} sm={12} spacing={2} m={2} pt={2} mb={0}>
                    {filedMapper[isFoundIndex]['value'](element)}
                </Grid>
            }
        });
    }
    return (
        <>
        <Box pl={1} pb={1} pt={1} mb={1} sx={{ maxWidth: { xs: '100%', sm: '100%' }, bgcolor: 'background.paper', borderBottom: '1px solid #ccc' }}>
            <EDCBreadcrumbs />
        </Box>
        <Box sx={{ maxWidth: { xs: '100%', sm: '100%' }, bgcolor: 'background.paper', borderBottom: '1px solid #ccc' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="Demographic" />
                <Tab label="HAEM - BioChemistry " />
                <Tab label="MH - Medical Histroy" />
                <Tab label="LB - Urine Drug Test" />
                <Tab label="SU - Substance Abuse" />
                <Tab label="AE - Adverse Event" />
                <Tab label="CS01 - Condition Day 1" />
                <Tab label="CS02 - Condition Day 2" />
                <Tab label="CS03 - Condition Day 3" />
            </Tabs>
        </Box>
        <Container pt={1} sx={{ maxWidth: { xs: '100%', sm: '100%' }, bgcolor: 'background.paper' }}>
                <Box pt={2}>
                    {renderFormObj()}
                </Box>
                <Stack direction="row"
                    alignItems="center"
                    justifyContent="center" spacing={2} pt={4} pb={2}>
                    <Button variant="contained" endIcon={<SaveOutlined />}>
                        Submit
                    </Button>
                    <Button variant="contained" endIcon={<ClearAllOutlined />}>
                        Cancel
                    </Button>
                </Stack>
            </Container>
            <CreateFormModal where={"dataEntryReviewerComments"} addPopupcloseHandler={addPopupcloseHandler} popupForm={popupForm}/>
            </>
    );
}
export default ClinicalForm;