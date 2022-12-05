import Grid from "@mui/material/Grid";

import React, {useState} from "react";
import {passengersCount} from "../../../../model/passengerCount.type";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import {searchFromValue} from "../../../../model/searchFormValue.type";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import {Divider} from "@mui/material";
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

interface passengerCountItemProps {
    name: string,
    currentCount: number,
    count: passengersCount,
    setCount: React.Dispatch<React.SetStateAction<passengersCount>>,
}

interface person {
    name: string,
    label: string,
    icon: any,
}

const passengerType : person[] = [
    {name: 'adult', label: 'تعداد برزگسال', icon: <FaceOutlinedIcon />},
    {name: 'child', label: 'تعداد کودک', icon: <FaceOutlinedIcon />},
    {name: 'baby', label: 'تعداد نوزاد', icon: <FaceOutlinedIcon />},
]

export default function PassengerCountItem({count, setCount, name, currentCount}: passengerCountItemProps ) {

    const addPassenger = (name: string, current: number) => {
        setCount({...count, [name] : current+1})
    }

    const decreasePassenger = (name: string, current: number) => {
        setCount({...count, [name] : (current-1 < 0 ? 0 : current-1)})
    }

    return (
        <Grid container item p={2} alignItems={"center"}>
            <Grid item xs={6} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={1}>
                <FaceOutlinedIcon />
                <Typography variant={'h6'}> {passengerType.find(item => item.name === name).label} </Typography>
            </Grid>

            <Grid item xs={6} gap={1} display={"flex"} justifyContent={"center"}>
                <Button variant={"contained"} color={"secondary"} sx={{width: '30px', height: '30px'}}
                        onClick={() => addPassenger(name, currentCount)}>
                    <Typography variant={'h6'} color={'secondary.100'}>+</Typography>
                </Button>
                {currentCount}
                <Button variant={"contained"} color={"secondary"} sx={{width: '30px', height: '30px'}}
                        onClick={() => decreasePassenger(name, currentCount)}>
                    <Typography variant={'h6'}  color={'secondary.100'}>-</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}