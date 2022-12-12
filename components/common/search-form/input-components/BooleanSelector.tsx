import React, {SyntheticEvent, useState} from "react";
import {MenuItem, TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import {searchFromValue} from "../../../../model/searchFormValue.type";

interface CustomDropDownProps {
    name: string,
    options: string[],
    setValue: React.Dispatch<React.SetStateAction<boolean>>,
}

const BooleanSelector = (props: CustomDropDownProps) => {

    const {options, name, setValue} = props;
    const [selectedLabel, setSelectedLabel] = useState(options[0])

    const onChange = (event: any) => {
        console.log('select : ', event.target.value,  (event.target.value === options[0]))
        setSelectedLabel(event.target.value)

        setValue((event.target.value === options[0]))
    }

    return (
        <TextField
            select
            // label={label}
            name={name}
            onChange={onChange}
            value={selectedLabel}

            fullWidth
            variant={"outlined"}
            size={"small"}

            sx={{
                minHeight: 0,
                // '& .MuiSelect-icon' :{
                //     display: 'none',
                //     width: 0,
                // },
                // '& .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': { //MuiInputBase-input-MuiOutlinedInput-input
                    // '& .MuiInputBase-input': {
                    //     '& .MuiOutlinedInput-input': {
                    //         padding: '8.5px 40px',

                    //     },
                    // },
                // },

                '& .MuiInputBase-root': {
                    borderRadius: '20px',
                    borderColor: "grey.200",
                    // backgroundColor: props.bgColor,
                },

                '& .MuiInputBase-root::before': {
                    borderColor: "grey.200",
                },

                '& .MuiInput-root::after': {
                    borderColor: "grey.300",
                },

                '& .MuiOutlinedInput-root.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: "grey.400",
                        borderWidth: '0.5px',
                    },
                },

                '& .MuiInputLabel-root.Mui-focused': {
                    color: "grey.400",
                },

                '& .MuiInput-input': {
                    height: '2.4rem',
                },
            }}

        >
            {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default BooleanSelector;

