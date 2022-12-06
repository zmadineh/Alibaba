import React, {useState} from "react";
import InputSelector from "../InputSelector";
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

export default function MobileSwappableInput(props : SwappableInputProps) {

    const {firstInputName, secondInputName, handleChange, firstData, secondData,
        firstLabel, secondLabel, form, setForm, iconName, firstValue, setFirstValue, secValue, setSecValue, flipData} = props

    const [openFirst, setOpenFirst] = useState<boolean>(false);
    const [openSec, setOpenSec] = useState<boolean>(false);

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