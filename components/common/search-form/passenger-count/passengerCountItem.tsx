import Grid from "@mui/material/Grid";

import React from "react";
import {passengersCount} from "../../../../model/form/passengerCount.type";

import Typography from "@mui/material/Typography/Typography";
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import IconButton from "@mui/material/IconButton";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

interface passengerCountItemProps {
    name: string,
    title: string,
    label: string,
    currentCount: number,
    count: passengersCount,
    setCount: React.Dispatch<React.SetStateAction<passengersCount>>,
}

export default function PassengerCountItem({count, setCount, name, title, label, currentCount}: passengerCountItemProps ) {

    const addPassenger = (name: string, current: number) => {
        setCount({...count, [name] : current+1})
    }

    const decreasePassenger = (name: string, current: number) => {
        setCount({...count, [name] : (current-1 < 0 ? 0 : current-1)})
    }

    return (
        <Grid container item p={2} alignItems={"center"} justifyContent={"space-between"} gap={1}>
            <Grid item display={"flex"} justifyContent={"flex-start"} alignItems={"center"} gap={1} flexWrap={"nowrap"}>
                <FaceOutlinedIcon />
                <Typography variant={'body1'}> {title} </Typography>
                <Typography variant={'body2'} color={'grey.500'}> ({label}) </Typography>
            </Grid>

            <Grid item gap={1} display={"flex"} justifyContent={"center"}>
                <IconButton color={"secondary"} sx={{width: '30px', height: '30px', color: 'secondary.400'}}
                        onClick={() => addPassenger(name, currentCount)}>
                    <AddCircle />
                </IconButton>
                {currentCount}
                <IconButton color={"secondary"} sx={{width: '30px', height: '30px', color: 'secondary.400', opacity: '0.525'}}
                        onClick={() => decreasePassenger(name, currentCount)}>
                    <RemoveCircleIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}