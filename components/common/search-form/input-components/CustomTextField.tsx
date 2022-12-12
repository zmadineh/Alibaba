import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface CustomTextFieldProps {
    label: string,
    name: string,
    borderRadius: string,
    onClick: (event: any) => void,
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    withIcon: boolean,
    value: string,
}

const CustomTextField = (props: CustomTextFieldProps) => {
    return (
        <TextField
            label={props.label}
            name={props.name}
            value={props.value}
            onChange={props.changeHandler}
            variant={"outlined"}
            size={"small"}
            fullWidth
            sx={{
                '& .MuiInputBase-root': {
                    borderRadius: props.borderRadius
                },

                '& .MuiOutlinedInput-input ': {
                    height: '1.1rem',
                },
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

export default CustomTextField