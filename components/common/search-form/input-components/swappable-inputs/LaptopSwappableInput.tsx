import React, {useCallback, useEffect, useState} from "react";
import CustomAutocomplete from "../CustomAutocomplete";
import InputSelector from "../InputSelector";

import {searchFromValue} from "../../../../../model/searchFormValue.type";

import useMediaQuery from "@mui/material/useMediaQuery";
import {TextField, useTheme} from "@mui/material";
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import InputAdornment from "@mui/material/InputAdornment";
import {iconMap} from "../../../../../data/iconMap";
import SwappableTemplate from "./SwappableTemplate";


interface SwappableInputProps {
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
}

export default function LaptopSwappableInput({firstInputName, secondInputName, handleChange, firstData, secondData, firstLabel, secondLabel, form, setForm, iconName} : SwappableInputProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));
    const laptopMatch = useMediaQuery(theme.breakpoints.up('md'));

    const [firstValue,setFirstValue] = useState<string | null>('');
    const [secValue,setSecValue] = useState<string | null>('');
    const [firstInput,setFirstInput] = useState<string | undefined>('');
    const [secInput,setSecInput] = useState<string | undefined>('');
    const [openFirst, setOpenFirst] = useState<boolean>(false);
    const [openSec, setOpenSec] = useState<boolean>(false);
    const [selectInput, setSelectInput] = useState<boolean>(false)

    const [borderRadius, setBorderRadius] = useState<{r1: string, r2: string}>({r1: "0 8px 8px 0", r2: "8px 0 0 8px"})

    useEffect(() => {
        if (tabletMatch) {
            setBorderRadius({r1: "8px 8px 0 0px", r2: "0 0 8px 8px"})
        }
        if (!tabletMatch) {
            setBorderRadius({r1: "0 8px 8px 0", r2: "8px 0 0 8px"})
        }
    },[tabletMatch]);

    const flipCities = useCallback(() => {
        console.log(secValue, firstValue)

        if (secValue && firstValue) {
            const temp1 = firstValue;
            const temp2 = secValue;
            setSecValue(temp1)
            setFirstValue(temp2)
            setForm({...form, [firstInputName] : temp2, [secondInputName] : temp1});
            console.log(firstInputName, temp2, secondInputName, temp1)
        }
    }, [firstValue, secValue]);

    return (
        <SwappableTemplate
            children1={
                <CustomAutocomplete
                    value={firstValue}
                    setValue={setFirstValue}
                    input={firstInput}
                    setInput={setFirstInput}
                    dataArray={firstData}
                    label={firstLabel}
                    name={firstInputName}
                    handleChange={handleChange}
                    borderRadius={borderRadius.r1}
                    // selectInput={selectInput}
                />
            }
            children2={
                <CustomAutocomplete
                    value={secValue}
                    setValue={setSecValue}
                    input={secInput}
                    setInput={setSecInput}
                    dataArray={secondData}
                    label={secondLabel}
                    name={secondInputName}
                    handleChange={handleChange}
                    borderRadius={borderRadius.r2}
                    // selectInput={!selectInput}
                />
            }
            flipData={flipCities}
        />
    )
}