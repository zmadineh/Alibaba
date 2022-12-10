import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import SearchCard from "./SearchCard";

export default function SearchCardContainer() {

    const input = [
        {
            origin: 'تهران',
            destination: 'اصفهان',
            oneWayRoad: true,
            departureDate: ' 29 آذر',
            returnDate: '',
            passengerCount: {adult: 1, child: 0, baby: 0}
        },
        {
            origin: 'تهران',
            destination: 'شیراز',
            oneWayRoad: false,
            departureDate: ' 29 آذر',
            returnDate: '1 دی',
            passengerCount: {adult: 1, child: 2, baby: 0}
        }
    ]


    return (
        <Grid container my={3} width={'1000px'} justifyContent={"center"} alignItems={"center"}>
            <Grid width={'100%'}>

                <Grid item container justifyContent={"space-between"} color={'grey.800'}>
                    <Button variant={"text"}><Typography variant={'body1'}>جستجوهای اخیر</Typography></Button>
                    <Button variant={"text"}><Typography variant={'body2'}>همه جستجوها</Typography></Button>
                </Grid>

                <Grid container gap={2} mt={4}>
                    {input.map((data , index) => (
                        <SearchCard key={index} {...data}/>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}