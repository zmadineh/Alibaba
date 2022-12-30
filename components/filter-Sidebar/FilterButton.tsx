import React from 'react';

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import GradingIcon from "@mui/icons-material/Grading";


interface FilterDataType {
    label: string,
    filterLabel: string,
}

interface FilterButtonPropsType {
   onClick: () => void,
}

export default function FilterButton({onClick} : FilterButtonPropsType) {

    return (
        <TextField
            // label={label}
            name={'side_filter'}
            onClick={onClick}

            value={'فیلترها'}
            fullWidth
            variant={"outlined"}
            size={"small"}

            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <GradingIcon color={'secondary'}/>
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
        </TextField>
    );
}
