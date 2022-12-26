import React, {useState} from "react";
import CustomTextField from "./CustomTextField";
import CustomDropDown from "./CustomDropDown";

import {searchFromValue} from "../../../../model/searchFormValue.type";
import {dateOptions} from "../../../../data/form/dateOptions.data";

import {useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


interface SingleDropDownProps {
    firstLabel: string,
    firstName: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    iconName: string,
}


export default function SingleDropDown({firstLabel, firstName, value , setValue, iconName} : SingleDropDownProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    // const [firstValue,setFirstValue] = useState('');

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
                    currentValue={value}
                    setCurrentValue={setValue}
                    borderRadius={'8px'}
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

        </Grid>
    )
}