import React, { createRef, useEffect, useState } from 'react';
import $ from 'jquery';
import { SaveOutlined, SaveAlt } from '@mui/icons-material';
import { GridDeleteIcon } from '@mui/x-data-grid';
import { Box, Button, Container, Stack, Tab, Tabs } from '@mui/material';

import classes from '../FormBuilder/FormReviewer.module.css';
import EDCBreadcrumbs from '../BreadCrumbs';


window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

function FormReviewer() {
    const fb = createRef();
    const [value, setValue] = useState(0);
    const newAttributes = {
        showListofComments: {
            type: 'paragraph',
            label: 'History Comments',
            value: "Add some subject identifiers"
        },
        showInGroupDesc: {
            type: 'textarea',
            label: 'Reviewer Comments',
            value: "Please entry correct value for this field"
        }, 
    };
    const formData = [{ "type": "header", "subtype": "h4", "label": "Demographic - EDC Form Builder" }, { "type": "paragraph", "subtype": "p", "label": "Clinical Form builder helps to derive the form which are required for data entry for a subject" }, { "type": "text", "label": "Name", "className": "form-control", "name": "text-1682062119138", "subtype": "text", "showInGroupDesc": "This Field is not required for demographic", "className": `${classes.danger} form-control` }, { "type": "text", "label": "Age", "className": "form-control", "name": "text-1682062140339", "subtype": "text", "showInGroupDesc": "Please entry correct value for this field" }, { "type": "text", "label": "Gender", "className": "form-control", "name": "text-1682062149300", "subtype": "text", "showInGroupDesc": "Use Radio button with M and F value", "className": `${classes.danger} form-control` }, { "type": "text", "label": "Marital Status", "className": "form-control", "name": "text-1682062158959", "subtype": "text", "showInGroupDesc": "Please entry correct value for this field" }, { "type": "text", "label": "Blood Group", "className": "form-control", "name": "text-1682062187301", "subtype": "text", "showInGroupDesc": "Please entry correct value for this field" }];

    var userAttrs = {};
    const fields = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "maxlength", "button", "file", "header", "paragraph", "hidden"];
    fields.forEach(function (item, index) {
        userAttrs[item] = newAttributes;
    });
    console.log(userAttrs);
    useEffect(() => {
        console.log(fb);
        $(fb.current).formBuilder({
            formData, showActionButtons: false, typeUserAttrs: userAttrs, disabledAttrs: ['maxlength']
            /* typeUserDisabledAttrs: {
                'text': ['name',
                    'description',
                    'required',
                    'inline',
                    'toggle']
            } */
        });
    }, []);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
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
                    <Button variant="contained" endIcon={<SaveOutlined />}>
                        Save
                    </Button>
                </Stack>
            </Container>
        </>

    );
}

export default FormReviewer;