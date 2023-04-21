import React, { createRef, useEffect, useState } from 'react';
import $ from 'jquery';
import { SaveOutlined, SaveAlt } from '@mui/icons-material';
import { GridDeleteIcon } from '@mui/x-data-grid';
import { Box, Button, Container, Stack, Tab, Tabs } from '@mui/material';
import EDCBreadcrumbs from '../BreadCrumbs';


window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

function FormBuilder() {
    const fb = createRef();
    let formObj;
    const [value, setValue] = useState(0);   
    const formData = [
        {
            type: "header",
            subtype: "h4",
            label: "Demographic - EDC Form Builder"
        },
        {
            type: "paragraph",
            label: "Clinical Form builder helps to derive the form which are required for data entry for a subject"
        }
    ];
        
    useEffect(() => {
        console.log(fb);
        formObj = $(fb.current).formBuilder({ formData, showActionButtons: false});
    }, []);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    const saveForm = () => {
        const result = formObj.actions.save();
        console.log(result);
    }
    return (
        <>
            <Box pl={1} pb={1} pt={1} mb={1} sx={{ maxWidth: { xs: '100%', sm: '100%' }, bgcolor: 'background.paper', borderBottom: '1px solid #ccc' }}>
                <EDCBreadcrumbs />
            </Box>
            <Box  sx={{ maxWidth: { xs: '100%', sm: '100%' }, bgcolor: 'background.paper', borderBottom: '1px solid #ccc' }}>
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
                    <div id="fb-editor" ref={fb} />
                </Box>
                <Stack direction="row"
                    alignItems="center"
                    justifyContent="center" spacing={2} pt={4} pb={2}>
                    <Button variant="outlined" startIcon={<GridDeleteIcon />}>
                        Clear
                    </Button>
                    <Button variant="outlined" endIcon={<SaveAlt />}>
                        Save As Draft
                    </Button>
                    <Button variant="contained" endIcon={<SaveOutlined />} onClick={saveForm}>
                        Save
                    </Button>
                </Stack>
            </Container>
        </>

    );
}

export default FormBuilder;