import React, {useCallback, useEffect, useState} from "react";
import CustomAutocomplete from "../CustomAutocomplete";
import SwappableTemplate from "./SwappableTemplate";

import {searchFromValue} from "../../../../../model/searchFormValue.type";


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

export default function LaptopSwappableInput(props : SwappableInputProps) {

    const {firstInputName, secondInputName, handleChange, firstData, secondData,
        firstLabel, secondLabel, form, setForm, iconName, firstValue, setFirstValue, secValue, setSecValue, flipData} = props

    const [firstInput,setFirstInput] = useState<string | undefined>('');
    const [secInput,setSecInput] = useState<string | undefined>('');

    const borderRadius = {r1: "0 8px 8px 0", r2: "8px 0 0 8px"};

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
                />
            }
            flipData={flipData}
        />
    )
}