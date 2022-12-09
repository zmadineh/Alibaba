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
    firstLabel: string,
    secondLabel: string,
    firstName: string,
    secondName: string,
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleChange: (name: string, value: string) => void,
    form: searchFromValue,
    setForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
    iconName: string,
}

interface dateOption {
    label: string,
    value: string,
}
const dateOptions = [
    {label: '1401/10/01', value: '1401/10/01'},
    {label: '1401/10/02', value: '1401/10/02'},
    {label: '1401/10/03', value: '1401/10/03'},
    {label: '1401/10/04', value: '1401/10/04'},
    {label: '1401/10/05', value: '1401/10/05'},
    {label: '1401/10/06', value: '1401/10/06'},
    {label: '1401/10/07', value: '1401/10/07'},
]


export default function ToggleInputs({firstLabel, secondLabel, firstName, secondName, handleChange, form, setForm, iconName} : ToggleInputsProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const [firstValue,setFirstValue] = useState('');
    const [secValue,setSecValue] = useState('');

    const onClick = () => {
        console.log('onChange')
    }

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
                                 changeHandler={handleChange}
                                 borderRadius={'8px 0 0 8px'}
                                 variant={"outlined"}
                                 // onClick={onClick}
                />
            }
            {!mobileMatch &&
                <CustomDropDown
                                 label={secondLabel}
                                 name={secondName}
                                 values={dateOptions}
                                 currentValue={secValue}
                                 setCurrentValue={setSecValue}
                                 changeHandler={handleChange}
                                 borderRadius={'0 8px 8px 0'}
                                 variant={"outlined"}
                                 // onClick={onClick}
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