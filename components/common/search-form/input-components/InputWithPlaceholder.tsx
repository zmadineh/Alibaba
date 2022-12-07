import React from "react";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface InputWithPlaceholderProps {
    label: string,
    name: string,
    borderRadius: string,
    onClick: (event: any) => void,
    changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    withIcon: boolean,
    placeholder: string,
    value: string
}

const InputWithPlaceholder = (props: InputWithPlaceholderProps) => {
    return (
        <TextField
            placeholder={props.placeholder}
            // label={props.label}
            name={props.name}
            value={props.value}
            onChange={props.changeHandler}
            variant={"outlined"}
            size={"medium"}
            fullWidth
            sx={{
                '& .Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: "grey.300",
                    },
                },

                '& :hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: "grey.300",
                    },
                },

                '& .MuiInputBase-root': {
                    borderRadius: props.borderRadius,
                    backgroundColor: 'grey.100',
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