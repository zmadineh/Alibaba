import React from "react";
import TextField from "@mui/material/TextField";

interface CustomTextFieldProps {
    label: string,
    name: string,
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
            margin={"dense"}
            sx={{
                '& label': {
                    transformOrigin: "right !important",
                    left: "inherit !important",
                    right: "1.75rem !important",
                    fontSize: "small",
                    color: "#807D7B",
                    fontWeight: 400,
                    overflow: "unset",
                },
                "& legend": {  textAlign: "right", },
            }}
        />
    );
}

export default CustomTextField