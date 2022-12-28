import React from 'react'

import Grid from '@mui/material/Grid'

import {filterStatesPropsType} from "../../model/filter/filterStateType";
import {filterSideType} from "../../data/filterSidebarData";

import FilterSidebarItem from './FilterSidebarItem';


interface FilterSidebarProps {
    travelType: number,
    resetFunction: () => void,
    filterStateProps: filterStatesPropsType
    ticketCount: number,
    getData: (travelType: number) => filterSideType[]
}

const FilterSidebarItems = ({getData, travelType, filterStateProps, resetFunction, ticketCount} : FilterSidebarProps) => {

    return (
        <Grid item container width={'100%'}>
                {getData(travelType).map((item, index) => (
                    <FilterSidebarItem item={item} key={index} filterStateProps={filterStateProps} resetFunction={resetFunction} ticketCount={ticketCount}/>
                ))}
        </Grid>
    )
}

export default FilterSidebarItems