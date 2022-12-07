import React from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface InputWithPlaceholderProps {
    label: string,
    name: string,
    borderRadius: string,
    onClick: (event: any) => void,
    withIcon: boolean,
    // placeholder: string,
    value: string
}

const InputWithPlaceholder = (props: InputWithPlaceholderProps) => {
    return (
        <TextField
            // placeholder={props.placeholder}
            label={props.label}
            name={props.name}
            value={props.value}
            variant={"outlined"}
            size={"small"}
            fullWidth
            sx={{
                '& .MuiInputBase-root': {
                    borderRadius: props.borderRadius
                }
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" sx={{margin: 1}}>
                        {props.withIcon ? <LocationOnOutlinedIcon /> : null}
                        {/*{iconMap.find(item => item.iconName === iconName).icon}*/}
                    </InputAdornment>
                ),
            }}
            onClick={props.onClick}
        />
    );
}

export default InputWithPlaceholder