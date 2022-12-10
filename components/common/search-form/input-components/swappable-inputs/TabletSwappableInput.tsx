import React, {useCallback, useState} from "react";

import {data} from "../../../../../model/data.type";
import {swappableInputsDetailType} from "../../../../../model/swappableInputsDetail.type";

import SwappableTemplate from "./SwappableTemplate";
import TabletSelectDialog from "../../select-dialog/TabletSelectDialog";
import InputWithPlaceholder from "../InputWithPlaceholder";


interface SwappableInputProps {
    details: swappableInputsDetailType[],
    values: {[key: string]: string},
    setValues: React.Dispatch<React.SetStateAction<{[key: string]: string}>>,
    flipData: () => void
    listWidth?: string,
    error: {[key: string]: boolean},
    validationData: (name:string, value: string) => boolean,
}

export default function TabletSwappableInput(props : SwappableInputProps) {

    const {details, flipData, listWidth = '100%', error, validationData, values, setValues} = props

    const firstInputName = details[0].name
    const secondInputName = details[1].name

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [label, setLabel] = useState<string>('');
    const [data, setData] = useState<data[]>([])

    const borderRadius = {r1: "8px 8px 0 0px", r2: "0 0 8px 8px"}

    const setDialogDetails = (event: any) => {

        setName(event.target.name);
        if (event.target.name === firstInputName){
            setLabel(details[0].label)
            setData(details[0].data)
            setValue(values[firstInputName])
        }
        else if (event.target.name === secondInputName) {
            setLabel(details[1].label)
            setData(details[1].data)
            setValue(values[secondInputName])
        }
        console.log('name: ',name)
        setOpen(true)
    }

     const onClose = useCallback((value : string) => {
            console.log(name, values[firstInputName], values[secondInputName], 'select')
    }, [ name]);

    const sendingProps = {values, setValues, validationData, error, details, borderRadius, flipData, setDialogDetails}

    return (
        <>
            <TabletSelectDialog firstValue={values[firstInputName]} secValue={values[secondInputName]}
                                firstInputName={details[0].name}
                                secondInputName={details[1].name}
                                firstLabel={details[0].label} secondLabel={details[1].label} open={open}
                                data={data} onClose={onClose} label={label} selectedName={name}
                                setOpen={setOpen} {...sendingProps}/>

            <SwappableTemplate
                children1={
                    <InputWithPlaceholder
                        label={details[0].label}
                        name={details[0].name}
                        borderRadius={borderRadius.r1}
                        onClick={setDialogDetails}
                        withIcon={true}
                        placeholder={details[0].label}
                        value={values[firstInputName]}
                    />

            }
                children2={
                    <InputWithPlaceholder
                        label={details[1].label}
                        name={details[1].name}
                        borderRadius={borderRadius.r2}
                        onClick={setDialogDetails}
                        withIcon={true}
                        placeholder={details[1].label}
                        value={values[secondInputName]}
                    />
            }
                flipData={flipData}
            />
        </>
    )
}