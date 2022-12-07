import React, {useCallback, useState} from "react";

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
    open: boolean,
    data: data[],
    onClose: (value: string) => void,
    label: string,
    selectedName: string,
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>,

    borderRadius: {r1: string, r2: string},
    firstValue: string,
    secValue: string,
    firstInputName: string,
    secondInputName: string,
    firstLabel: string,
    secondLabel: string,
    flipData: () => void,
    inputOnClick: (e: any) => void,
}

export default function TabletSelectDialog( props : selectDialogProps) {

    const {open, setOpen, data, onClose, label, selectedName, firstLabel, firstInputName,
        firstValue, secondLabel, secondInputName, secValue, borderRadius, flipData, inputOnClick} = props

    const [search, setSearch] = useState<string>('');
    const [inputFirst, setInputFirst] = useState<string>(firstValue);
    const [inputSecond, setInputSecond] = useState<string>(secValue);

    const closeDialog = () => {
        setOpen(false)
    }

    const handleClose = () => {
        // onClose(selectedValue);
    };

    const handelItemClick = (value : string) => {
        if(selectedName === firstInputName) setInputFirst(value)
        else if(selectedName === secondInputName) setInputSecond(value)
        setSearch('')
        onClose(value);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = e.target.value.toString().toLowerCase();
        setSearch(currentSearch)
        if(selectedName === firstInputName) setInputFirst(currentSearch)
        else if(selectedName === secondInputName) setInputSecond(currentSearch)
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
                                label={firstLabel}
                                name={firstInputName}
                                placeholder={firstLabel}
                                borderRadius={borderRadius.r1}
                                changeHandler={handleSearch}
                                withIcon={true}
                                onClick={inputOnClick}
                                value={inputFirst}
                            />

                        }
                        children2={
                            <InputWithPlaceholder
                                label={secondLabel}
                                name={secondInputName}
                                placeholder={secondLabel}
                                borderRadius={borderRadius.r2}
                                changeHandler={handleSearch}
                                withIcon={true}
                                onClick={inputOnClick}
                                value={inputSecond}
                            />
                        }
                        flipData={flipData_}
                    />

                </TabletDialogHeader>
                <div style={{overflow: "hidden", height: '1px'}}></div>

                <DataList data={data} search={search} handelItemClick={handelItemClick} noDescription={true}/>
            </StyledDialog>
        </div>
    );
}