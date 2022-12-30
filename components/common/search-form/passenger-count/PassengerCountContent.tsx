import React from "react";

import {passengersCount} from "../../../../model/form/passengerCount.type";
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
            <PassengerCountItem name={'adult'} title={'بزرگسال'} label={'۱۲ سال به بالا'} currentCount={count.adult} count={count} setCount={setCount} />
            <PassengerCountItem name={'child'} title={'کودک'} label={'۲ تا ۱۲ سال'} currentCount={count.child} count={count} setCount={setCount} />
            <PassengerCountItem name={'baby'} title={'نوزاد'} label={'۱۰ روز تا ۲ سال'} currentCount={count.baby} count={count} setCount={setCount} />
        </Grid>
    )
}