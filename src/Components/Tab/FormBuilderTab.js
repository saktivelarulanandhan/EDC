import React, { useContext, useState } from 'react';
import FormContext from '../../Context/FormContext';
import { IconButton, Tab, Tabs, Tooltip } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import CreateFormModal from '../Modal/CreateFormModal';

function FormBuilderTab(props) {

    const [popupForm, setPopupForm] = useState(false);
    const [value, setValue] = useState(0);
    const formTabList = useContext(FormContext);
    const addPopupOpenHandler = () => {
        setPopupForm(true);
    }

    const addPopupcloseHandler = () => {
        setPopupForm(false);
    }

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    const loadTabs = () => {
        console.log(formTabList)
        return formTabList.map((tab) => {
            return <Tab label={tab.formName} />
        })
    }

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {loadTabs()}
            </Tabs>
            <Tooltip title="Add Forms">
                <IconButton onClick={addPopupOpenHandler}>
                    <AddCircleOutline />
                </IconButton>
            </Tooltip>
            <CreateFormModal where={"addForm"} createFormHandler={props.createFormHandler} addPopupcloseHandler={addPopupcloseHandler} popupForm={popupForm}/>{/* } */}
        </>
    )
}

export default FormBuilderTab;