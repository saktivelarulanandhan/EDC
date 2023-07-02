import React from "react";
import { InputLabel } from "@mui/material";

interface ILabelText{
    label: string
}
const LabelText = (props: ILabelText) => {
    const {label} = props;
    return (
        <InputLabel htmlFor="input-with-icon-adornment" disableAnimation={true} shrink={true}>
            {label}
        </InputLabel>
    )
}
export default LabelText;