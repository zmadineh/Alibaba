import React, {useCallback, useEffect, useState} from "react";

import {data} from "../../../../model/data.type";

import SelectDialogListItem from "./SelectDialogListItem";
import CustomTextField from "../input-components/CustomTextField";
import SwappableTemplate from "../input-components/swappable-inputs/SwappableTemplate";
import TabletDialogHeader from "./TabletDialogHeader";

import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Divider from "@mui/material/Divider";
import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid/Grid";
import {ListItem} from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import DataList from "./DataList";
import InputWithPlaceholder from "../input-components/InputWithPlaceholder";
import {swappableInputsDetailType} from "../../../../model/swappableInputsDetail.type";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const StyledDialog = styled(Dialog)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        "& .MuiPaper-root": {
            width: '500px',
            height: '90%',
            maxHeight: '680px',
            borderRadius: '12px',
        }
    }
}));

interface selectDialogProps {
    details: swappableInputsDetailType[],
    values: {[key: string]: string},
    setValues: React.Dispatch<React.SetStateAction<{[key: string]: string}>>,
    error: {[key: string]: boolean},
    validationData: (name:string, value: string) => boolean,
    open: boolean,
    data: data[],
    onClose: (value: string) => void,
    label: string,
    selectedName: string,
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>,
    borderRadius: {r1: string, r2: string},
    flipData: () => void,
    setDialogDetails: (e: any) => void,
}

export default function TabletSelectDialog( props : selectDialogProps) {

    const {open, setOpen, data, onClose, label, selectedName,
        borderRadius, flipData, setDialogDetails,
        values, setValues, details, error, validationData} = props

    const firstInputDetail = details[0]
    const secondInputDetail = details[1]

    const [search, setSearch] = useState<string>('');
    const [inputFirst, setInputFirst] = useState<string>(values[firstInputDetail.name]);
    const [inputSecond, setInputSecond] = useState<string>(values[secondInputDetail.name]);


    const closeDialog = () => {
        setOpen(false)
    }

    const handleClose = () => {
        // onClose(selectedValue);
    };

    const handelItemClick = (value : string) => {
        console.log(JSON.stringify(values))
        setValues({...values, [selectedName]: value})
        const validate = validationData(selectedName, value)
        if(!validate && error)
            console.log('error', error)

        if(selectedName === firstInputDetail.name){
            if(value === inputSecond)
                setInputSecond('')
            setInputFirst(value)
        }
        else if(selectedName === secondInputDetail.name) {
            if(value === inputFirst)
                setInputFirst('')
            setInputSecond(value)
        }

        setSearch('')
        onClose(value);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = e.target.value.toString().toLowerCase();
        setSearch(currentSearch)
        if(selectedName === firstInputDetail.name) setInputFirst(currentSearch)
        else if(selectedName === secondInputDetail.name) setInputSecond(currentSearch)
    }

    const flipData_ = useCallback(() => {

        if (inputFirst && inputSecond) {
            const temp1 = inputFirst;
            const temp2 = inputSecond;
            setInputFirst(temp2)
            setInputSecond(temp1)
        }
        flipData();
    }, [inputFirst, inputSecond]);

    return (
        <div>
            <StyledDialog
                onClose={handleClose}
                open={open}
                role={"presentation"}
                TransitionComponent={Transition}
            >
                <TabletDialogHeader

                    handleClose={closeDialog}
                    label={label}
                >
                    <SwappableTemplate
                        children1={
                            <InputWithPlaceholder
                                label={firstInputDetail.label}
                                name={firstInputDetail.name}
                                placeholder={firstInputDetail.label}
                                borderRadius={borderRadius.r1}
                                changeHandler={handleSearch}
                                withIcon={true}
                                onClick={setDialogDetails}
                                value={inputFirst}
                            />

                        }
                        children2={
                            <InputWithPlaceholder
                                label={secondInputDetail.label}
                                name={secondInputDetail.name}
                                placeholder={secondInputDetail.label}
                                borderRadius={borderRadius.r2}
                                changeHandler={handleSearch}
                                withIcon={true}
                                onClick={setDialogDetails}
                                value={inputSecond}
                            />
                        }
                        flipData={flipData_}
                    />

                </TabletDialogHeader>
                <div style={{overflow: "hidden", height: '1px'}}></div>

                <DataList
                    data={data}
                    search={search}
                    handelItemClick={handelItemClick}
                    listDescription={false}
                />
            </StyledDialog>
        </div>
    );
}