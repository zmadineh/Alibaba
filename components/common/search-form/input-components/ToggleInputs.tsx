import React, {useEffect, useState} from "react";
import CustomTextField from "./CustomTextField";

import {searchFromValue} from "../../../../model/searchFormValue.type";

import {MenuItem, useTheme} from "@mui/material";
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
    oneWayRoad: boolean,
    formError: any,
}

export default function ToggleInputs({firstLabel, secondLabel, firstName, secondName, oneWayRoad, formError,
                                         iconName, firstValue, setFirstValue, setSecValue, secValue} : ToggleInputsProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));

    const dateOptionCreator = () => {
        const today = new Date();
        let dateOption = [{label: today.toLocaleDateString('fa-IR'), value: today}];

        for (let i=1; i<10; ++i){
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + i)
            dateOption.push({label: tomorrow.toLocaleDateString('fa-IR'), value: tomorrow})
        }
        console.log('toggle: ', dateOption)
        return dateOption
    }

    const onChange = (event: any) => {
        const name = event.target.name
        const value = event.target.value

        if(name === firstName)
            setFirstValue(value)
        else if(name === secondName)
            setSecValue(value)
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
                                 currentValue={firstValue}
                                 setCurrentValue={setFirstValue}
                                 borderRadius={'8px 0 0 8px'}
                                 variant={"outlined"}
                                 bgColor={(tabletMatch ? 'grey.100' : '#fff')}
                                 disable={false}
                                 error={formError[firstName]}
                                 errorMessage={`${firstLabel} را پر کنید. `}
                />
            }
            {!mobileMatch &&
                <CustomDropDown
                                 label={secondLabel}
                                 name={secondName}
                                 values={dateOptionCreator()}
                                 currentValue={secValue}
                                 setCurrentValue={setSecValue}
                                 borderRadius={'0 8px 8px 0'}
                                 variant={"outlined"}
                                 bgColor={(tabletMatch ? 'grey.100' : '#fff')}
                                 disable={oneWayRoad}
                                 error={formError[secondName]}
                                 errorMessage={`${secondLabel} را پر کنید. `}
                />
            }

            {mobileMatch &&
                <Grid item container display={"flex"} flexDirection={"column"} gap={1.5}>
                    <TextField
                        select
                        placeholder={firstLabel}
                        name={firstName}
                        onChange={onChange}
                        value={firstValue}

                        error={formError[firstName]}
                        helperText={(formError[firstName] && '')}

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

                    <TextField
                       select
                       placeholder={secondLabel}
                       name={secondName}

                       value={secValue}
                       onChange={onChange}

                       error={formError[secondName]}
                       helperText={(formError[secondName] && '')}

                       disabled={!oneWayRoad}
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
                    >
                        {dateOptionCreator().map((option, index) => (
                            <MenuItem key={index} value={option.value.toLocaleDateString()} // onClick={(event) => console.log(event.currentTarget)}
                                      sx={{
                                          '&:hover, &.Mui-selected:hover, &.Mui-selected ': {
                                              backgroundColor: 'secondary.100',
                                          },
                                      }}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            }

        </Grid>
    )
}