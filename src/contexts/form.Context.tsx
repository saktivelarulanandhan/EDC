import React from "react";

export const sampleForm: any = {
  formTabs: [
    {
      formName: "Demographic",
      formElements: [
        [
          {
            type: "header",
            subtype: "h4",
            label: "Demographic - EDC Form Builder",
          },
          {
            type: "paragraph",
            subtype: "p",
            label:
              "Clinical Form builder helps to derive the form which are required for data entry for a subject",
          },
          {
            type: "autocomplete",
            label: "Gender",
            className: "form-control",
            name: "autocomplete-1682763352613",
            values: [
              {
                label: "Male",
                value: "M",
              },
              {
                label: "FeMale",
                value: "F",
              },
            ],
          },
          {
            type: "date",
            label: "DOB",
            className: "form-control",
            name: "date-1682763356100",
          },
          {
            type: "autocomplete",
            label: "Marital Status",
            className: "form-control",
            name: "autocomplete-1682763357548",
            values: [
              {
                label: "Married",
                value: "M",
              },
              {
                label: "UnMarried",
                value: "UM",
              },
            ],
          },
        ],
      ],
    },
    { formName: "HAEM - BioChemistry", formElements: [] },
  ],
};
// Creating the context object and passing the default values.
const FormContext = React.createContext(sampleForm);

export default FormContext;
