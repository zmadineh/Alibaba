import React, {useCallback, useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";

import SearchCard from "./SearchCard";

import Grid from "@mui/material/Grid/Grid";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";

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
    },
    {
        origin: 'تهران',
        destination: 'رشت',
        oneWayRoad: false,
        departureDate: ' 21 آذر',
        returnDate: '1 دی',
        passengerCount: {adult: 2, child: 1, baby: 0}
    }
]

interface SearchCardContainerProps {
    categoryIndex: number,
    searches: searchFromValue[],
    setSearches: React.Dispatch<React.SetStateAction<searchFromValue[]>>,
}

export default function SearchCardContainer({categoryIndex, searches, setSearches} : SearchCardContainerProps) {

    const counter = searches.filter(search => search.formType === categoryIndex).length
    console.log(categoryIndex)

    const removeAllSearches = useCallback(() => {
        setSearches([])
    }, []);

    return (
        <Grid container flexDirection={"column"} spacing={1} my={3}>

            {counter > 0 &&
                <Grid item container color={'grey.800'} justifyContent={"space-between"}>
                    <Button variant={"text"}><Typography variant={'body1'} fontWeight={'600'} color={'grey.800'}>جستجوهای اخیر ({counter})</Typography></Button>
                    <Button variant={"text"}><Typography variant={'body2'} color={'secondary'}
                                                         onClick={removeAllSearches}>پاک کردن همه</Typography></Button>
                </Grid>
            }

                <Grid item container flexDirection={"column"} overflow={"scroll"} alignContent={"flex-start"} maxHeight={'250px'} gap={2} mt={4}>
                    {searches.filter(search => search.formType === categoryIndex).map((search , index) => (
                        <SearchCard key={index} {...search}/>
                    ))}

                </Grid>
        </Grid>
    )
}