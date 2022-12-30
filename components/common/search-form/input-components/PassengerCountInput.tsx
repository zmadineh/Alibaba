import React, {useState} from "react";

import PassengerCountPopover from "../passenger-count/PassengerCountPopover";
import SwipeableEdgeDrawer from "../passenger-count/SwipeableEdgeDrawer";

import {searchFromValue} from "../../../../model/form/searchFormValue.type";
import {passengersCount} from "../../../../model/form/passengerCount.type";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import InputAdornment from "@mui/material/InputAdornment";
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';

interface PassengerCountInput {
    passengerCount: passengersCount,
    setPassengerCount: React.Dispatch<React.SetStateAction<passengersCount>>,
    name: string,
}

export default function PassengerCountInput({passengerCount, setPassengerCount, name}: PassengerCountInput) {

    const theme = useTheme();
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const [count, setCount] = useState<passengersCount>({adult: 1, child: 0, baby: 0})
    const [open, setOpen] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log('in open ')
        setOpen(true)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
        console.log(count)
        setPassengerCount(count)
    };

    return (
        <Grid
            display={"flex"}
            flexDirection={{xs: 'column', sm: 'row'}}
            alignItems={{xs: 'flex-end', sm: 'center'}}
            justifyContent={"center"}
            position={"relative"}
            width={'100%'}
            sx={{margin: 0}}
        >
            {(tabletMatch || mobileMatch) &&
                <SwipeableEdgeDrawer count={count} setCount={setCount} open={open} setOpen={setOpen} handleClose={handleClose} />
            }

            {mobileMatch &&
                <TextField
                    variant={'standard'}
                    size={"medium"}
                    fullWidth
                    placeholder={`بزرگسال${count.adult.toString()}` + '، ' + `کودک${count.child.toString()}` + ' و ' + `نوزاد${count.baby.toString()}`}
                    onClick={(event) =>  handleClick(event)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{margin: 1}}>
                                <AirlineSeatReclineExtraOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        padding: 1,

                        '& .MuiInputBase-root::before': {
                            borderColor: "grey.200",
                        },

                        '& .MuiInput-root::after': {
                            borderColor: "grey.300",
                        },

                        '& .MuiInput-input': {
                            height: '2.4rem',
                        },
                    }}
                />
            }

            {!tabletMatch && !mobileMatch &&
                <PassengerCountPopover count={count} setCount={setCount} open={open} setOpen={setOpen} anchorEl={anchorEl} handleClose={handleClose} />
            }

            {!mobileMatch &&
                <TextField
                    label={'مسافران'}
                    variant={"outlined"}
                    size={"small"}
                    fullWidth
                    value={`${count.adult.toString()}بزرگسال` + '، ' + `${count.child.toString()}کودک` + ' و ' + `${count.baby.toString()}نوزاد`}
                    onClick={(event) => handleClick(event)}
                    sx={{
                        '& .MuiInputBase-root': {
                            borderRadius: "8px",
                            backgroundColor: (tabletMatch ? 'grey.100' : '#fff')
                        },
                    }}
                />
            }
        </Grid>
    )
}