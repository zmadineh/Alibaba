import React, {useState} from "react";
import CustomTextField from "./CustomTextField";

import {searchFromValue} from "../../../../model/searchFormValue.type";

import {useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CustomDropDown from "./CustomDropDown";


interface ToggleInputsProps {
    firstValue: string,
    setFirstValue: React.Dispatch<React.SetStateAction<string>>,
    secValue: string,
    setSecValue: React.Dispatch<React.SetStateAction<string>>,
    firstLabel: string,
    secondLabel: string,
    firstName: string,
    secondName: string,
    iconName: string,
}

const dateOptions = [
    {label: '1 دی', value: ' 1 دی'},
    {label: '2 دی', value: '2 دی'},
    {label: '3 دی', value: '3 دی'},
    {label: '4 دی', value: '4 دی'},
    {label: '5 دی', value: '5 دی'},
    {label: '6 دی', value: '6 دی'},
    {label: '7 دی', value: '7 دی'},
]

export default function ToggleInputs({firstLabel, secondLabel, firstName, secondName,
                                         iconName, firstValue, setFirstValue, setSecValue, secValue} : ToggleInputsProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid
            display={"flex"}
            flexDirection={{xs: 'column', sm: 'row'}}
            alignItems={{xs: 'flex-end', sm: 'center'}}
            justifyContent={"center"}
            width={'100%'}
        >

            {!mobileMatch &&
                <CustomDropDown
                                 label={firstLabel}
                                 name={firstName}
                                 values={dateOptions}
                                 currentValue={firstValue}
                                 setCurrentValue={setFirstValue}
                                 borderRadius={'8px 0 0 8px'}
                                 variant={"outlined"}
                                 bgColor={(tabletMatch ? 'grey.100' : '#fff')}
                />
            }
            {!mobileMatch &&
                <CustomDropDown
                                 label={secondLabel}
                                 name={secondName}
                                 values={dateOptions}
                                 currentValue={secValue}
                                 setCurrentValue={setSecValue}
                                 borderRadius={'0 8px 8px 0'}
                                 variant={"outlined"}
                                 bgColor={(tabletMatch ? 'grey.100' : '#fff')}
                />
            }

            {mobileMatch &&
                <TextField
                   placeholder={firstLabel}
                   name={firstName}
                   // onChange={handleChange}
                   variant={"standard"}
                   size={"medium"}
                   fullWidth
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start" sx={{margin: 1}}>
                                <CalendarMonthOutlinedIcon />
                               {/*{iconMap.find(item => item.iconName === iconName).icon}*/}
                           </InputAdornment>
                       ),
                   }}
                   sx={{
                       padding: 1,

                       '& .MuiInputBase-root::before': {
                           borderColor: "grey.200",
                       },

                       '& .MuiInput-root::after': {
                           borderColor: "grey.300",
                       },

                       '& .MuiInput-input': {
                           height: '2.4rem',
                       },
                   }}

                />
            }
            {mobileMatch &&
                <TextField
                   placeholder={secondLabel}
                   name={secondName}
                   // onChange={handleChange}
                   variant={"standard"}
                   size={"medium"}
                   fullWidth
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start" sx={{margin: 1}}>
                                <CalendarMonthOutlinedIcon />
                               {/*{iconMap.find(item => item.iconName === iconName).icon}*/}
                           </InputAdornment>
                       ),
                   }}
                   sx={{
                       padding: 1,

                       '& .MuiInputBase-root::before': {
                           borderColor: "grey.200",
                       },

                       '& .MuiInput-root::after': {
                           borderColor: "grey.300",
                       },

                       '& .MuiInput-input': {
                           height: '2.4rem',
                       },
                   }}
                />
            }

        </Grid>
    )
}