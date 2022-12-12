import Grid from '@mui/material/Grid';
import React  from 'react';
import TripleSortingFilter from "../../components/common/triple-sorting-filter/TripleSortingFilter";
import FilterPopover from "../../components/common/triple-sorting-filter/FilterPopover";

export default function Filter() {

    const tripleSortingFilterData = [
        {
            label: 'پیشنهاد علی بابا',
            filterLabel: 'alibaba_offer'
        },
        {
            label: ' زودترین زمان حرکت',
            filterLabel: 'earliest_departure_time'
        },
        {
            label: 'کمترین قیمت',
            filterLabel: 'lowest_price'
        }
    ]
    return (

        <Grid container flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={10}>
           <TripleSortingFilter inputs={tripleSortingFilterData}/>
            <FilterPopover inputs={tripleSortingFilterData} />
        </Grid>
    )

}