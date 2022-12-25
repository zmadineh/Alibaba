import React from 'react'

import Grid from '@mui/material/Grid'

import {filterStatesPropsType} from "../../model/filter/filterStateType";

import FilterSidebarItem from './FilterSidebarItem';
import { filterSidebarAirplaneData } from "../../data/filterSidebarData"
import { filterSidebarAirplaneTwoData } from "../../data/filterSidebarData"
import { filterSidebarTrainData } from "../../data/filterSidebarData"
import { filterSidebarBusData } from "../../data/filterSidebarData"
import { filterSidebarTourData } from "../../data/filterSidebarData"


interface FilterSidebarProps {
    travelType: number,
    resetFunction: () => void,
    filterStateProps: filterStatesPropsType
    ticketCount: number,
}

const FilterSidebar = ({travelType, resetFunction, filterStateProps, ticketCount} : FilterSidebarProps) => {
    return (
        <Grid container width={'100%'}>
            <Grid display={(travelType === 0 ? "block" : "none")}>
                {filterSidebarAirplaneData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} filterStateProps={filterStateProps} resetFunction={resetFunction} ticketCount={ticketCount}/>
                ))} </Grid>
            <Grid display={(travelType === 1 ? "block" : "none")}>
                {filterSidebarAirplaneTwoData.map((item, index) => (
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