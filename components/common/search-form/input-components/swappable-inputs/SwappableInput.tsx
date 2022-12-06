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
import MobileSwappableInput from "./MobileSwappableInput";
import TabletSwappableInput from "./TabletSwappableInput";
import LaptopSwappableInput from "./LaptopSwappableInput";


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

export default function SwappableInput({firstInputName, secondInputName, handleChange, firstData, secondData, firstLabel, secondLabel, form, setForm, iconName} : SwappableInputProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));
    const laptopMatch = useMediaQuery(theme.breakpoints.up('md'));

    const [firstValue,setFirstValue] = useState<string | null>('');
    const [secValue,setSecValue] = useState<string | null>('');

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

    const props = {firstInputName, secondInputName, handleChange, firstData, secondData,
        firstLabel, secondLabel, form, setForm, iconName, firstValue, setFirstValue, secValue, setSecValue, flipData};

    return (
        <>
            {mobileMatch &&
                <MobileSwappableInput
                    {...props}
                    />
            }

            {!mobileMatch && tabletMatch &&
                <TabletSwappableInput
                    {...props}
                />
            }

            {laptopMatch &&
                <LaptopSwappableInput
                    {...props}
                />
            }
        </>
    )
}