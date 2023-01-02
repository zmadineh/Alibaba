import React, {useState} from "react";
import CustomTextField from "./CustomTextField";
import CustomDropDown from "./CustomDropDown";

import {searchFromValue} from "../../../../model/form/searchFormValue.type";
import {dateOptions} from "../../../../data/search-form/dateOptions.data";

import {MenuItem, useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {dateOptionCreator} from "../../../../helper/dateOptionCreator.helper";


interface SingleDropDownProps {
    firstLabel: string,
    firstName: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    iconName: string,
    formError: any,
}


export default function SingleDropDown({firstLabel, firstName, value , setValue, iconName, formError} : SingleDropDownProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const onChange = (event: any) => {
        setValue(event.target.value)
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
                    values={dateOptionCreator()}
                    currentValue={value}
                    setCurrentValue={setValue}
                    borderRadius={'8px'}
                    variant={"outlined"}
                    disable={false}
                    error={formError[firstName]}
                    errorMessage={`${firstLabel} را پر کنید. `}
                />
            }

            {mobileMatch &&
                <TextField
                    select
                    placeholder={firstLabel}
                    name={firstName}
                    onChange={onChange}
                    value={value}

                    error={formError[firstName]}
                    helperText={(formError[firstName] && `${firstLabel} را پر کنید. `)}

                    disabled={false}
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

                        // '& .MuiInputBase-root::before': {
                        //     borderColor: "grey.200",
                        // },
                        //
                        // '& .MuiInput-root::after': {
                        //     borderColor: "grey.300",
                        // },

                        '& .MuiInput-input': {
                            height: '2.4rem',
                        },
                    }}
                >
                    {dateOptionCreator().map((option, index) => (
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
            }
        </Grid>
    )
}