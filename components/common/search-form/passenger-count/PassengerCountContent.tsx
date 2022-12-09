import React from "react";

import {passengersCount} from "../../../../model/passengerCount.type";
import PassengerCountItem from "./passengerCountItem";

import Grid from "@mui/material/Grid";


interface passengerCountContentProps {
    count: passengersCount,
    setCount: React.Dispatch<React.SetStateAction<passengersCount>>,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function PassengerCountContent({count, setCount, open, setOpen}: passengerCountContentProps ) {

    return (
        <Grid container flexDirection={"column"} spacing={2}>
            <PassengerCountItem name={'adult'} currentCount={count.adult} count={count} setCount={setCount} />
            <PassengerCountItem name={'child'} currentCount={count.child} count={count} setCount={setCount} />
            <PassengerCountItem name={'baby'} currentCount={count.baby} count={count} setCount={setCount} />
        </Grid>
    )
}