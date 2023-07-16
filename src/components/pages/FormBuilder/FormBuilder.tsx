import React, { createRef, useEffect, useRef, useState } from "react";
import $ from "jquery";
import FormContext, { sampleForm } from "../../../contexts/form.Context";
import { Box, Button, Container, IconButton, Stack, Tab, Tabs, Tooltip } from "@mui/material";
import {
  SaveOutlined,
  SaveAlt,
  PhonelinkLockOutlined,
  AddCircleOutline,
} from "@mui/icons-material";
import { GridDeleteIcon } from "@mui/x-data-grid";
window.jQuery = $;
window.$ = $;
require("jquery-ui-sortable");
require("formBuilder");
const FormBuilder = () => {
  const [formTabDetails, setFormTabDetails] = useState(sampleForm.formTabs);
  const fb = useRef<HTMLDivElement>(null);
  let userAttrs: any = {};
  let formObj: any;
  const fields = [
    "autocomplete",
    "checkbox-group",
    "date",
    "number",
    "radio-group",
    "select",
    "text",
    "textarea",
    "maxlength",
    "button",
    "file",
    "header",
    "paragraph",
    "hidden",
  ];
  const newAttributes = {
    units: {
      type: "select",
      label: "Units",
      values: ["Kg"],
    },
  };
  const formData = [
    {
      type: "header",
      subtype: "h4",
      label: "Demographic - EDC Form Builder",
    },
    {
      type: "paragraph",
      label:
        "Clinical Form builder helps to derive the form which are required for data entry for a subject",
    },
    {
      type: "select",
      label: "Display As",
      className: "form-control",
      name: "autocomplete-1684562050751",
      values: [
        { label: "Row", value: "row" },
        { label: "Column", value: "col" },
      ],
    },
  ];
  const saveForm = () => {
    const result = formObj.actions.save();
    console.log(result);
  };
  useEffect(() => {
    fields.forEach(function (item, index) {
      userAttrs[item] = newAttributes;
    });
    formObj = $(fb.current).formBuilder({
      formData,
      showActionButtons: false,
      typeUserAttrs: userAttrs,
    });
  }, []);
  return (
    <>
      <FormContext.Provider value={formTabDetails}>
        <Container sx={{ maxWidth: { xs: "100%", sm: "100%" }, bgcolor: "background.paper" }}>
          <Box pt={2}>
            <div id="fb-editor" ref={fb} />
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            pt={4}
            pb={2}
          >
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
    </>
  );
};
export default FormBuilder;
