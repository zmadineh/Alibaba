import React, {useCallback, useState} from "react";
import InputSelector from "../InputSelector";

import {searchFromValue} from "../../../../../model/searchFormValue.type";

import useMediaQuery from "@mui/material/useMediaQuery";
import {TextField, useTheme} from "@mui/material";
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import SwappableTemplate from "./SwappableTemplate";
import CustomAutocomplete from "../CustomAutocomplete";



interface valueType {
    first: string | null,
    second: string | null,
}


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

export default function MobileSwappableInput({firstInputName, secondInputName, handleChange, firstData, secondData, firstLabel, secondLabel, form, setForm, iconName} : SwappableInputProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const [firstValue,setFirstValue] = useState<string | null>('');
    const [secValue,setSecValue] = useState<string | null>('');
    const [openFirst, setOpenFirst] = useState<boolean>(false);
    const [openSec, setOpenSec] = useState<boolean>(false);

    const flipData = useCallback(() => {
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
                <InputSelector
                    open={openFirst}
                    setOpen={setOpenFirst}
                    value={firstValue}
                    setValue={setFirstValue}
                    data={firstData}
                    label={firstLabel}
                    name={firstInputName}
                    handleChange={handleChange}
                    form={form}
                    iconName={iconName}
                />
            }
            children2={
                <InputSelector
                    open={openSec}
                    setOpen={setOpenSec}
                    value={secValue}
                    setValue={setSecValue}
                    data={secondData}
                    label={secondLabel}
                    name={secondInputName}
                    handleChange={handleChange}
                    form={form}
                    iconName={iconName}
                />
            }
            flipData={flipData}
        />
    )
}