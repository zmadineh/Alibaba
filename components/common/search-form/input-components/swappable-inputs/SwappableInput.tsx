import React, {useCallback, useState} from "react";

import {searchFromValue} from "../../../../../model/searchFormValue.type";
import {data} from "../../../../../model/data.type";

import MobileSwappableInput from "./MobileSwappableInput";
import TabletSwappableInput from "./TabletSwappableInput";
import LaptopSwappableInput from "./LaptopSwappableInput";

import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material";


interface SwappableInputProps {
    firstInputName: string,
    secondInputName: string,
    firstData: data[],
    secondData: data[],
    firstLabel: string,
    secondLabel: string,
    handleChange: (name: string, value: string) => void,
    form: searchFromValue,
    setForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
    iconName: string,
}

export default function SwappableInput({firstInputName, secondInputName, handleChange, firstData, secondData, firstLabel, secondLabel, form, setForm, iconName} : SwappableInputProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));
    const laptopMatch = useMediaQuery(theme.breakpoints.up('md'));

    const [firstValue,setFirstValue] = useState<string>('');
    const [secValue,setSecValue] = useState<string>('');

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
                <MobileSwappableInput  {...props}/>
            }

            {!mobileMatch && tabletMatch &&
                <TabletSwappableInput {...props}/>
            }

            {laptopMatch &&
                <LaptopSwappableInput {...props}/>
            }
        </>
    )
}