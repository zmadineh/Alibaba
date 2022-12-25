import { Grid } from '@mui/material'
import React from 'react'
import FilterSidebarItem from './FilterSidebarItem';
import { filterSidebarAirplaneData } from "../../data/filterSidebarData"
import { filterSidebarAirplanetwoData } from "../../data/filterSidebarData"
import { filterSidebarTrainData } from "../../data/filterSidebarData"
import { filterSidebarBusData } from "../../data/filterSidebarData"
import { filterSidebarTourData } from "../../data/filterSidebarData"
import { useState } from 'react';
import {filterStatesPropsType} from "../../model/filter/filterStateType";

interface FilterSidebarProps {
    travelType: number,
    resetFunction: () => void,
    filterStateProps: filterStatesPropsType
    ticketCount: number,
}

const FilterSidebar = ({travelType, resetFunction, filterStateProps, ticketCount} : FilterSidebarProps) => {
    const [page, setPage] = useState<number>(1)
    return (
        <Grid container width={'100%'}>
            <Grid display={(travelType === 0 ? "block" : "none")}>
                {filterSidebarAirplaneData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} filterStateProps={filterStateProps} resetFunction={resetFunction} ticketCount={ticketCount}/>
                ))} </Grid>
            <Grid display={(travelType === 1 ? "block" : "none")}>
                {filterSidebarAirplanetwoData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} filterStateProps={filterStateProps} resetFunction={resetFunction} ticketCount={ticketCount}/>
                ))} </Grid>
            <Grid display={(travelType === 2 ? "block" : "none")}>
                {filterSidebarTrainData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} filterStateProps={filterStateProps} resetFunction={resetFunction} ticketCount={ticketCount}/>
                ))} </Grid>
            <Grid display={(travelType === 3 ? "block" : "none")}>
                {filterSidebarBusData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} filterStateProps={filterStateProps} resetFunction={resetFunction} ticketCount={ticketCount}/>
                ))} </Grid>
            <Grid display={(travelType === 4 ? "block" : "none")}>
                {filterSidebarTourData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} filterStateProps={filterStateProps} resetFunction={resetFunction} ticketCount={ticketCount}/>
                ))} </Grid>
        </Grid>
    )
}

export default FilterSidebar