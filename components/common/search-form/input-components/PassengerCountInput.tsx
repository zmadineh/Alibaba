import React, {useState} from "react";
import {passengersCount} from "../../../../model/passengerCount.type";

import Grid from "@mui/material/Grid";
import {Popover, TextField, useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import PassengerCountPopover from "../passenger-count/PassengerCountPopover";
import SwipeableEdgeDrawer from "../passenger-count/SwipeableEdgeDrawer";
import InputAdornment from "@mui/material/InputAdornment";
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';

export default function PassengerCountInput() {

    const theme = useTheme();
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const [count, setCount] = useState<passengersCount>({adult: 1, child: 0, baby: 0})
    const [open, setOpen] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setOpen(true)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
    };

    return (
        <Grid
            display={"flex"}
            flexDirection={{xs: 'column', sm: 'row'}}
            alignItems={{xs: 'flex-end', sm: 'center'}}
            justifyContent={"center"}
            position={"relative"}
            width={'100%'}
        >
            {tabletMatch &&
                <SwipeableEdgeDrawer count={count} setCount={setCount} open={open} setOpen={setOpen} />
            }

            {mobileMatch &&
                <TextField
                    variant={'standard'}
                    size={"small"}
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
                />
            }

            {!tabletMatch &&
                <PassengerCountPopover count={count} setCount={setCount} open={open} setOpen={setOpen} anchorEl={anchorEl} handleClose={handleClose} />
            }

            {!mobileMatch &&
                <TextField
                    variant={"outlined"}
                    size={"small"}
                    fullWidth
                    placeholder={`بزرگسال${count.adult.toString()}` + '، ' + `کودک${count.child.toString()}` + ' و ' + `نوزاد${count.baby.toString()}`}
                    onClick={(event) => handleClick(event)}
                />
            }
        </Grid>
    )
}