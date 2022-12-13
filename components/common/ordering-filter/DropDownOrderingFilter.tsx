import React from 'react';

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";


interface FilterDataType {
    label: string,
    filterLabel: string,
}

interface TripleSortingFilterProps {
    inputs: FilterDataType[]
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>,
}

export default function DropDownOrderingFilter({inputs, value, setValue} : TripleSortingFilterProps) {

    const onChange = (event: any) => {
        console.log(value)
        setValue(event.target.value)
    }

    return (
        <TextField
            select
            // label={label}
            name={'ordering_filter'}
            onChange={onChange}
            value={value}

            fullWidth
            variant={"outlined"}
            size={"small"}

            sx={{
                minHeight: 0,
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
            {inputs.map((option, index) => (
                <MenuItem key={index} value={index}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}
