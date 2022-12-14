import React from 'react';

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import VerticalFlip from "../../../public/svg/VerticalFlip-icon.svg";


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

            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <VerticalFlip />
                        {/*{iconMap.find(item => item.iconName === iconName).icon}*/}
                    </InputAdornment>
                ),
            }}

            sx={{
                minHeight: 0,
                borderColor: "secondary.main",
                backgroundColor: 'secondary.100',
                color: 'secondary.main',

                '& .MuiSelect-icon': {
                    color: 'secondary.main',
                },
                '& .MuiInputBase-root': {
                    borderRadius: '20px',
                    borderColor: "secondary.main",
                    color: 'secondary.main',
                },

                '& .MuiInputBase-root::before': {
                    borderColor: "secondary.main",
                },

                '& .MuiInput-root::after': {
                    borderColor: "secondary.main",
                },

                '& .MuiOutlinedInput-root.Mui-focused': {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: "secondary.main",
                        borderWidth: '0.5px',
                    },
                },

                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'secondary.100',
                },

                '& .MuiInput-input': {
                    height: '2.4rem',
                },
            }}

        >
            {inputs.map((option, index) => (
                <MenuItem key={index} value={index}
                sx={{
                    '&:hover, &.Mui-selected:hover': {
                        backgroundColor: 'secondary.100',
                    },
                    '&.Mui-selected ': {
                        backgroundColor: 'secondary.100',
                        color: 'secondary.main'
                    },
                }}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}
