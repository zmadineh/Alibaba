import { Grid } from '@mui/material'
import React from 'react'
import FilterSidebarItem from './FilterSidebarItem';
import { filterSidebarAirplaneData } from "../../data/filterSidebarData"
import { filterSidebarAirplanetwoData } from "../../data/filterSidebarData"
import { filterSidebarTrainData } from "../../data/filterSidebarData"
import { filterSidebarBusData } from "../../data/filterSidebarData"
import { filterSidebarTourData } from "../../data/filterSidebarData"
import { useState } from 'react';


const FilterSidebar = () => {
    const [page, setPage] = useState<number>(1)
    return (
        <Grid container>
            <Grid  >
                {filterSidebarAirplaneData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} />
                ))} </Grid>
            <Grid display={"none"}>
                {filterSidebarAirplanetwoData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} />
                ))} </Grid>
            <Grid display={"none"}>
                {filterSidebarTrainData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} />
                ))} </Grid>
            <Grid display={"none"}>
                {filterSidebarBusData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} />
                ))} </Grid>
            <Grid display={"none"}>
                {filterSidebarTourData.map((item, index) => (
                    <FilterSidebarItem item={item} key={index} />
                ))} </Grid>
        </Grid>
    )
}

export default FilterSidebar