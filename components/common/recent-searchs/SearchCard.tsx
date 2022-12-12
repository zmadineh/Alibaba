import React from "react";

import {passengersCount} from "../../../model/passengerCount.type";
import FlipIcon from "../../../public/svg/Flip-icon.svg";

import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';


interface searchCardProps {
    origin: string,
    destination: string,
    oneWayRoad?: boolean,
    departureDate: string,
    returnDate: string
    passengerCount: passengersCount,
}

export default function SearchCard({origin, destination, oneWayRoad = false, departureDate, returnDate, passengerCount} : searchCardProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Card
            variant="outlined"
            sx={{borderRadius: '8px', cursor: 'pointer'}}
        >
            <CardActionArea>
                <CardContent>
                    <Grid container flexDirection={"column"} gap={1.5}>
                        <Grid container gap={1} alignItems={"center"} textOverflow={'ellipsis'} flexWrap={"nowrap"}>
                            <Typography gutterBottom variant="body1" noWrap textOverflow={'ellipsis'}>
                                {origin}
                            </Typography>
                            {oneWayRoad ? <KeyboardArrowLeftIcon fontSize={"medium"}/> : <FlipIcon />}
                            <Typography gutterBottom variant="body1" noWrap textOverflow={'ellipsis'}>
                                {destination}
                            </Typography>
                        </Grid>

                        <Grid container gap={1} color={'grey.500'} textOverflow={'ellipsis'} flexWrap={"nowrap"}>
                            <CalendarMonthOutlinedIcon />
                            <Typography variant="body2" noWrap textOverflow={'ellipsis'}>
                                {departureDate}
                            </Typography>
                            {!oneWayRoad &&
                                <Typography variant="body2" noWrap textOverflow={'ellipsis'}>
                                    تا {oneWayRoad}
                                </Typography>
                            }
                            {!oneWayRoad &&
                                <Typography variant="body2" noWrap textOverflow={'ellipsis'}>
                                    {returnDate}
                                </Typography>
                            }
                        </Grid>


                        <Grid container gap={1} color={'grey.500'} textOverflow={'ellipsis'} flexWrap={"nowrap"}>
                            <AirlineSeatReclineExtraOutlinedIcon />
                            <Typography variant="body2" noWrap textOverflow={'ellipsis'}>
                                {`${passengerCount.adult} بزرگسال`}{passengerCount.child > 0 ? ( ' ،' + `${passengerCount.child} کودک` ): null}{passengerCount.baby > 0 ? (' ،' + `${passengerCount.baby} نوزاد`): null }
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}