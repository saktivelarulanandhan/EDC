import React from "react";
import { TextField } from "@mui/material";
export interface IFormInputTextProps{
    id: string;
    label: string;
    name: string;
    type?:string;
    autoComplete?: string;
    autoFocus?: boolean;
    required?: boolean;
}
const FormInputText = (props: IFormInputTextProps) => {
    const {id, label, name, autoComplete, autoFocus, required, type} = props;
    return (
        <TextField
            margin="normal"
            type={type || "text"}
            required={required}
            fullWidth
            id={id}
            label={label}
            name={name}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
        />
    );
}
export default FormInputText;