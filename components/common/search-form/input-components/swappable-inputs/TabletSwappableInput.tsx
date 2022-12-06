import React, {useState} from "react";

import {searchFromValue} from "../../../../../model/searchFormValue.type";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SwappableTemplate from "./SwappableTemplate";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Grid from "@mui/material/Grid/Grid";


interface SwappableInputProps {
    firstValue: string | null,
    secValue: string | null,
    setFirstValue: React.Dispatch<React.SetStateAction<string | null>>,
    setSecValue: React.Dispatch<React.SetStateAction<string | null>>,
    firstInputName: string,
    secondInputName: string,
    firstData: string[],
    secondData: string[],
    firstLabel: string,
    secondLabel: string,
    handleChange: (name: string, value: string | null) => void,
    form: searchFromValue,
    setForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
    iconName: string,
    flipData: () => void
}

export default function TabletSwappableInput(props : SwappableInputProps) {

    const {firstInputName, secondInputName, handleChange, firstData, secondData,
        firstLabel, secondLabel, form, setForm, iconName, firstValue, setFirstValue, secValue, setSecValue, flipData} = props

    const [firstInput,setFirstInput] = useState<string | undefined>('');
    const [secInput,setSecInput] = useState<string | undefined>('');
    const [openFirst, setOpenFirst] = useState<boolean>(false);
    const [openSec, setOpenSec] = useState<boolean>(false);

    const borderRadius = {r1: "8px 8px 0 0px", r2: "0 0 8px 8px"}

    const inputOnClick = () => {

    }
    return (
        <SwappableTemplate

            children1={
            <Grid width={'100%'}>


                <TextField
                   placeholder={firstLabel}
                   name={firstInputName}
                   variant={"outlined"}
                   size={"small"}
                   sx={{
                       '& .MuiInputBase-root': {
                           borderRadius: borderRadius.r1,
                       }
                    }}
                   fullWidth
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start" sx={{margin: 1}}>
                               <LocationOnOutlinedIcon />
                               {/*{iconMap.find(item => item.iconName === iconName).icon}*/}
                           </InputAdornment>
                       ),
                   }}
                   onClick={inputOnClick}
                />
            </Grid>

        }
            children2={
                <TextField
                   placeholder={secondLabel}
                   name={secondInputName}
                   variant={"outlined"}
                   size={"small"}
                   sx={{
                       '& .MuiInputBase-root': {
                           borderRadius: borderRadius.r2,
                       }
                   }}
                   fullWidth
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start" sx={{margin: 1}}>
                               <LocationOnOutlinedIcon />
                               {/*{iconMap.find(item => item.iconName === iconName).icon}*/}
                           </InputAdornment>
                       ),
                   }}
                   onClick={inputOnClick}
                />
        }
            flipData={flipData}
        />


    )
}