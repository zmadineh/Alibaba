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
import PassengerCountItem from "./passengerCountItem";

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