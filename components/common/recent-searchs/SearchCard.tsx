import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {passengersCount} from "../../../model/passengerCount.type";

interface searchCardProps {
    origin: string,
    destination: string,
    oneWayRoad: boolean,
    departureDate: string,
    returnDate: string
    passengerCount: passengersCount,
}

export default function SearchCard({origin, destination, oneWayRoad, departureDate, returnDate, passengerCount} : searchCardProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Card
            variant="outlined"
            sx={{maxWidth: '300px', borderRadius: '8px', cursor: 'pointer'}}
        >
            <CardActionArea>
                <CardContent>
                    <Grid container flexDirection={"column"} gap={1}>
                        <Grid container gap={1} alignItems={"center"}>
                            <Typography gutterBottom variant="body1" noWrap textOverflow={'ellipsis'}>
                                {origin}
                            </Typography>
                            <KeyboardArrowLeftIcon fontSize={"large"}/>
                            <Typography gutterBottom variant="body1" noWrap textOverflow={'ellipsis'}>
                                {destination}
                            </Typography>
                        </Grid>


                        <Typography variant="body2" color={'grey.700'} noWrap textOverflow={'ellipsis'}>
                            {oneWayRoad ? 'سفر یک طرفه' : 'رفت و برگشت'}
                        </Typography>

                        <Grid container gap={1} color={'grey.700'}>
                            <CalendarMonthOutlinedIcon />
                            <Typography variant="body2" noWrap textOverflow={'ellipsis'}>
                                {departureDate}
                            </Typography>
                            {!oneWayRoad &&
                                <KeyboardArrowLeftIcon fontSize={"small"}/>
                            }
                            {!oneWayRoad &&
                                <Typography variant="body2" noWrap textOverflow={'ellipsis'}>
                                    {returnDate}
                                </Typography>
                            }
                        </Grid>


                        <Grid container gap={1} color={'grey.700'}>
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