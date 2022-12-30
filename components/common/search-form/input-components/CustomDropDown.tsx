import React, {SyntheticEvent, useEffect, useState} from "react";
import {MenuItem, TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

interface CustomDropDownProps {
    label: string,
    name: string,
    values : {value : Date,label : string}[],
    currentValue : string,
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>,
    borderRadius: string,
    variant: "standard" | "filled" | "outlined" | undefined,
    bgColor?: string,
    disable: boolean,
    error: boolean,
    errorMessage: string,
}

const CustomDropDown = (props: CustomDropDownProps) => {

    const [textError, setTextError] = useState<boolean>(false)

    useEffect(() => {
        console.log('in useEffect ', props.error)
        if(props.currentValue === '')
            setTextError(props.error)
    }, [props.error])

    const onChange = (event: any) => {
        console.log('select : ', event.target.value)
        props.setCurrentValue(event.target.value)
        setTextError(false)
    }

    return (
        <TextField
            select
            label={props.label}
            name={props.name}
            onChange={onChange}
            value={props.currentValue}

            fullWidth
            variant={"outlined"}
            size={"small"}

            error={(!props.disable && props.error && textError)}
            helperText={(!props.disable && props.error && textError) && props.errorMessage}

            disabled={props.disable}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" >
                        <CalendarMonthOutlinedIcon />
                        {/*{iconMap.find(item => item.iconName === iconName).icon}*/}
                    </InputAdornment>
                ),
            }}
            sx={{
                    height: '2.5rem',
                    minHeight: 0,
                    '& .MuiSelect-icon': {
                        display: 'none',
                        width: 0,
                    },

                    '& .MuiOutlinedInput-input': {
                        padding: '8.5px 6px',
                    },

                    '& .MuiInputBase-root': {
                        borderRadius: props.borderRadius,
                        borderColor: "grey.200",
                        backgroundColor: props.bgColor,
                    },

                    // '& .MuiInputBase-root::before': {
                    //     borderColor: "grey.200",
                    // },
                    //
                    // '& .MuiInput-root::after': {
                    //     borderColor: "grey.300",
                    // },

                    '& .MuiOutlinedInput-root.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: "grey.400",
                            borderWidth: '0.5px',
                        },
                    },

                    // '& .MuiInputLabel-root.Mui-focused': {
                    //     color: 'secondary.100'
                    // },

                    '& .MuiInput-input': {
                        height: '2.4rem',
                    },
                }}
        >
            {props.values.map((option, index) => (
                <MenuItem key={index} value={option.value.toLocaleDateString()}
                sx={{
                    '&:hover, &.Mui-selected:hover, &.Mui-selected ': {
                        backgroundColor: 'secondary.100',
                    },
                }}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default CustomDropDown;


