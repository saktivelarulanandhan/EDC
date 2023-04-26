import React from 'react';

export const sampleForm = {
    formTabs: [
        { formName: 'Demographic', formElements: [] },
        { formName: 'HAEM - BioChemistry', formElements: [] },
        { formName: 'MH - Medical Histroy', formElements: [] },
        { formName: 'LB - Urine Drug Test', formElements: [] },
        { formName: 'SU - Substance Abuse', formElements: [] },
        { formName: 'AE - Adverse Event', formElements: [] },
        { formName: 'CS01 - Condition Day 1', formElements: [] },
        { formName: 'CS02 - Condition Day 2', formElements: [] },
        { formName: 'CS03 - Condition Day 3', formElements: [] }
    ]
}
// Creating the context object and passing the default values.
const FormContext = React.createContext(sampleForm);

export default FormContext;