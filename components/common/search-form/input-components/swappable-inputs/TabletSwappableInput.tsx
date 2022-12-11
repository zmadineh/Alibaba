import React, {useCallback, useEffect, useState} from "react";

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

    const firstInputDetail = details[0]
    const secondInputDetail = details[1]

    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [label, setLabel] = useState<string>('');
    const [data, setData] = useState<data[]>([])

    const borderRadius = {r1: "8px 8px 0 0px", r2: "0 0 8px 8px"}

    const setDialogDetails = (event: any) => {
        console.log('in set dialog ', JSON.stringify(values))
        setName(event.target.name);
        if (event.target.name === firstInputDetail.name){
            setLabel(details[0].label)
            setData(details[0].data)
        }
        else if (event.target.name === secondInputDetail.name) {
            setLabel(details[1].label)
            setData(details[1].data)
        }
        console.log('name: ',name)
        setOpen(true)
    }

     const onClose = useCallback((value : string) => {
            console.log(name, values[firstInputDetail.name], values[secondInputDetail.name], 'select')
    }, [ name]);

    return (
        <>
            <TabletSelectDialog
                details={details}
                values={values}
                setValues={setValues}
                error={error}
                validationData={validationData}
                open={open}
                data={data}
                onClose={onClose}
                label={label}
                selectedName={name}
                setOpen={setOpen}
                borderRadius={borderRadius}
                flipData={flipData}
                setDialogDetails={setDialogDetails}
            />

            <SwappableTemplate
                children1={
                    <InputWithPlaceholder
                        label={firstInputDetail.label}
                        name={firstInputDetail.name}
                        borderRadius={borderRadius.r1}
                        onClick={setDialogDetails}
                        withIcon={true}
                        placeholder={firstInputDetail.label}
                        value={values[firstInputDetail.name]}
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
                        value={values[secondInputDetail.name]}
                    />
            }
                flipData={flipData}
            />
        </>
    )
}