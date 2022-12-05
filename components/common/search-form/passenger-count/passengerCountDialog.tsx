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
import PassengerCountContent from "./PassengerCountContent";

interface passengerCountDialogProps {
    count: passengersCount,
    setCount: React.Dispatch<React.SetStateAction<passengersCount>>,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function PassengerCountDialog({count, setCount, open, setOpen}: passengerCountDialogProps ) {
    
    return (
            <Dialog open={open}>
                <Grid>
                    <Typography>نوع و تعداد مسافران</Typography>
                    <IconButton onClick={() => setOpen(false)}><Close /></IconButton>
                    <Divider />
                </Grid>
                <PassengerCountContent count={count} setCount={setCount} open={open} setOpen={setOpen} />

                <Button onClick={() => setOpen(false)}> تایید </Button>
            </Dialog>

    )
}