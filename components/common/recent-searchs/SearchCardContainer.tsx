import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {useSearchesSelector} from "../../../redux/AuthHooks";

import {searchFromValue} from "../../../model/form/searchFormValue.type";

import SearchCard from "./SearchCard";

import Grid from "@mui/material/Grid/Grid";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import {removeAll} from "../../../redux/Slices/SearchSlice";



interface SearchCardContainerProps {
    categoryIndex: number,
    searches: searchFromValue[],
    setSearches: React.Dispatch<React.SetStateAction<searchFromValue[]>>,
}

export default function SearchCardContainer({categoryIndex, searches, setSearches} : SearchCardContainerProps) {

    const dispatch = useDispatch();
    const recentData = useSearchesSelector((state) => state.searches);

    const counter = recentData.filter(search => search.formType === categoryIndex).length
    console.log('categoryIndex ', categoryIndex)

    const removeAllSearches = useCallback(() => {
        dispatch(removeAll())
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
                    {recentData.filter(search => search.formType === categoryIndex).map((search , index) => (
                        <SearchCard key={index} {...search}/>
                    ))}

                </Grid>
        </Grid>
    )
}