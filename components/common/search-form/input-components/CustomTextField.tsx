import React from "react";
import TextField from "@mui/material/TextField";

interface CustomTextFieldProps {
    label: string,
    name: string,
    borderRadius: string,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const CustomTextField = (props: CustomTextFieldProps) => {
    return (
        <TextField
            label={props.label}
            name={props.name}
            onChange={props.changeHandler}
            variant={"outlined"}
            size={"small"}
            sx={{
                '& .MuiInputBase-root': {
                    borderRadius: props.borderRadius
                }
            }}
        />
    );
}

export default CustomTextField