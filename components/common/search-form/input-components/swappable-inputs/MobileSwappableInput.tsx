import React, {useState} from "react";

import InputSelector from "../InputSelector";
import SwappableTemplate from "./SwappableTemplate";

import {searchFromValue} from "../../../../../model/searchFormValue.type";
import {data} from "../../../../../model/data.type";
import {swappableInputsDetailType} from "../../../../../model/swappableInputsDetail.type";

interface SwappableInputProps {
    details: swappableInputsDetailType[],
    firstValue: string,
    secValue: string,
    setFirstValue: React.Dispatch<React.SetStateAction<string>>,
    setSecValue: React.Dispatch<React.SetStateAction<string>>,
    // firstInputName: string,
    // secondInputName: string,
    // firstData: data[],
    // secondData: data[],
    // firstLabel: string,
    // secondLabel: string,
    handleChange: (name: string, value: string) => void,
    form: searchFromValue,
    setForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
    // iconName: string,
    flipData: () => void
}

export default function MobileSwappableInput(props : SwappableInputProps) {

    const {details, handleChange, form, setForm, firstValue, setFirstValue, secValue, setSecValue, flipData} = props

    const [openFirst, setOpenFirst] = useState<boolean>(false);
    const [openSec, setOpenSec] = useState<boolean>(false);

    return (
        <SwappableTemplate
            children1={
                <InputSelector
                    detail={details[0]}
                    open={openFirst}
                    setOpen={setOpenFirst}
                    value={firstValue}
                    setValue={setFirstValue}
                    // data={firstData}
                    // label={firstLabel}
                    // name={firstInputName}
                    handleChange={handleChange}
                    form={form}
                    // iconName={iconName}
                />
            }
            children2={
                <InputSelector
                    detail={details[1]}
                    open={openSec}
                    setOpen={setOpenSec}
                    value={secValue}
                    setValue={setSecValue}
                    // data={secondData}
                    // label={secondLabel}
                    // name={secondInputName}
                    handleChange={handleChange}
                    form={form}
                    // iconName={iconName}
                />
            }
            flipData={flipData}
        />
    )
}