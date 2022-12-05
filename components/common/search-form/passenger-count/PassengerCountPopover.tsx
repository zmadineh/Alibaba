import Grid from "@mui/material/Grid";

import React, {useState} from "react";
import {passengersCount} from "../../../../model/passengerCount.type";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import {searchFromValue} from "../../../../model/searchFormValue.type";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import {Divider, Popover} from "@mui/material";
import PassengerCountContent from "./PassengerCountContent";

interface PassengerCountPopoverProps {
    count: passengersCount,
    setCount: React.Dispatch<React.SetStateAction<passengersCount>>,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    anchorEl: HTMLButtonElement | null,
    handleClose: () => void
}

export default function PassengerCountPopover({count, setCount, open, setOpen, anchorEl, handleClose}: PassengerCountPopoverProps ) {

    return (
        <Popover
            id={'passenger-popover'}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Grid padding={2}>
                <PassengerCountContent count={count} setCount={setCount} open={open} setOpen={setOpen} />
            </Grid>

        </Popover>

    )
}