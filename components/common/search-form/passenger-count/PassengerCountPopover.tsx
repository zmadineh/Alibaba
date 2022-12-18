import React, {useState} from "react";

import {passengersCount} from "../../../../model/passengerCount.type";
import PassengerCountContent from "./PassengerCountContent";

import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";


interface PassengerCountPopoverProps {
    count: passengersCount,
    setCount: React.Dispatch<React.SetStateAction<passengersCount>>,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    anchorEl: HTMLDivElement | null,
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