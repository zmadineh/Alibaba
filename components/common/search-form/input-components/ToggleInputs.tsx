import React, {useCallback, useState} from "react";
import CustomAutocomplete from "./CustomAutocomplete";
import InputSelector from "./InputSelector";
import CustomTextField from "./CustomTextField";

import {searchFromValue} from "../../../../model/searchFormValue.type";
import {iconMap} from "../../../../data/iconMap";

import useMediaQuery from "@mui/material/useMediaQuery";
import {TextField, useTheme} from "@mui/material";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";


interface ToggleInputsProps {
    firstLabel: string,
    secondLabel: string,
    firstName: string,
    secondName: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    form: searchFromValue,
    setForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
    iconName: string,
}

export default function ToggleInputs({firstLabel, secondLabel, firstName, secondName, handleChange, form, setForm, iconName} : ToggleInputsProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const onChange = () => {
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
                <CustomTextField label={firstLabel}
                                 name={firstName}
                                 changeHandler={handleChange}
                                 borderRadius={'0 8px 8px 0'}/>
            }
            {!mobileMatch &&
                <CustomTextField label={secondLabel}
                                 name={secondName}
                                 changeHandler={handleChange}
                                 borderRadius={'8px 0 0 8px'}/>
            }

            {mobileMatch &&
                <TextField placeholder={firstLabel}
                           name={firstName}
                           onChange={handleChange}
                           variant={"standard"}
                           size={"small"}
                           sx={{padding: 1}}
                           fullWidth
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start" sx={{margin: 1}}>
                                       {iconMap.find(item => item.iconName === iconName).icon}
                                   </InputAdornment>
                               ),
                           }}
                />
            }
            {mobileMatch &&
                <TextField placeholder={secondLabel}
                           name={secondName}
                           onChange={handleChange}
                           variant={"standard"}
                           size={"small"}
                           sx={{padding: 1}}
                           fullWidth
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start" sx={{margin: 1}}>
                                       {iconMap.find(item => item.iconName === iconName).icon}
                                   </InputAdornment>
                               ),
                           }}
                />
            }

        </Grid>
    )
}