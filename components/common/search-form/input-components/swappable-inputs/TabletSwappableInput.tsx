import React, {useCallback, useState} from "react";

import {searchFromValue} from "../../../../../model/searchFormValue.type";

import SwappableTemplate from "./SwappableTemplate";
import TabletSelectDialog from "../../select-dialog/TabletSelectDialog";
import InputWithPlaceholder from "../InputWithPlaceholder";


interface SwappableInputProps {
    firstValue: string,
    secValue: string,
    setFirstValue: React.Dispatch<React.SetStateAction<string>>,
    setSecValue: React.Dispatch<React.SetStateAction<string>>,
    firstInputName: string,
    secondInputName: string,
    firstData: string[],
    secondData: string[],
    firstLabel: string,
    secondLabel: string,
    handleChange: (name: string, value: string) => void,
    form: searchFromValue,
    setForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
    iconName: string,
    flipData: () => void
}

export default function TabletSwappableInput(props : SwappableInputProps) {

    const {firstInputName, secondInputName, handleChange, firstData, secondData,
        firstLabel, secondLabel, form, setForm, iconName, firstValue, setFirstValue, secValue, setSecValue, flipData} = props

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [label, setLabel] = useState<string>('');
    const [data, setData] = useState<string[]>([''])

    const borderRadius = {r1: "8px 8px 0 0px", r2: "0 0 8px 8px"}

    const inputOnClick = (event: any) => {
        setName(event.target.name);
        if (event.target.name === firstInputName){
            setLabel(firstLabel)
            setData(firstData)
            setValue(firstValue)
        }
        else if (event.target.name === secondInputName) {
            setLabel(secondLabel)
            setData(secondData)
            setValue(secValue)
        }
        console.log('name: ',name)
        setOpen(true)
    }

    const onClose = useCallback((value : string) => {
        // setOpen(false);
        if (value){
            if (name === firstInputName)
                setFirstValue(value)
            else if (name === secondInputName)
                setSecValue(value)

            handleChange(name, value)
            console.log(name, firstValue, secValue, 'select')
        }
    }, [ name]);

    const sendingProps = {firstLabel, firstInputName, firstValue, secondLabel, secondInputName, secValue, borderRadius, flipData, inputOnClick}

    return (
        <>
            <TabletSelectDialog open={open} data={data} onClose={onClose} label={label} selectedName={name} setOpen={setOpen} {...sendingProps}/>

            <SwappableTemplate
                children1={
                    <InputWithPlaceholder
                        label={firstLabel}
                        name={firstInputName}
                        borderRadius={borderRadius.r1}
                        onClick={inputOnClick}
                        withIcon={true}
                        // placeholder={firstLabel}
                        value={firstValue}
                    />

            }
                children2={
                    <InputWithPlaceholder
                        label={secondLabel}
                        name={secondInputName}
                        borderRadius={borderRadius.r2}
                        onClick={inputOnClick}
                        withIcon={true}
                        // placeholder={secondLabel}
                        value={secValue}
                    />
            }
                flipData={flipData}
            />
        </>
    )
}