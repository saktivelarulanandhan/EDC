import React, { createRef, useEffect, useState } from 'react';
import $ from 'jquery';
import { SaveOutlined, SaveAlt, PhonelinkLockOutlined, AddCircleOutline } from '@mui/icons-material';
import { GridDeleteIcon } from '@mui/x-data-grid';
import { Box, Button, Container, IconButton, Stack, Tab, Tabs, Tooltip } from '@mui/material';
import EDCBreadcrumbs from '../BreadCrumbs';
import CreateFormModal from '../Modal/CreateFormModal';
import FormBuilderTab from '../Tab/FormBuilderTab';
import FormContext, { sampleForm } from '../../Context/FormContext';


window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

function FormBuilder() {
    const [formTabDetails, setFormTabDetails] = useState(sampleForm.formTabs)
    const fb = createRef();
    let formObj;

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
        formObj = $(fb.current).formBuilder({ formData, showActionButtons: false });
    }, []);



    const saveForm = () => {
        const result = formObj.actions.save();
        console.log(result);
    }

    const createFormHandler = () => {
        /* const tempFromObject = formTabDetails;
        tempFromObject.push({ formName: 'Demographic', formElements: [] }) */
        const addStaticObj = [{ formName: 'Demographic', formElements: [] }];
        setFormTabDetails((state) => {
            return [...state, ...addStaticObj] 
        });
        console.log(formTabDetails);
    }


    return (
        <FormContext.Provider value={formTabDetails}>
            {formTabDetails.length}
            <Box pl={1} pb={1} pt={1} mb={1} sx={{ maxWidth: { xs: '100%', sm: '100%' }, bgcolor: 'background.paper', borderBottom: '1px solid #ccc' }}>
                <EDCBreadcrumbs />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                maxWidth: { xs: '100%', sm: '100%' }, bgcolor: 'background.paper', borderBottom: '1px solid #ccc'
            }}>
                <FormBuilderTab createFormHandler={createFormHandler} />
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
        </FormContext.Provider>

    );
}

export default FormBuilder;