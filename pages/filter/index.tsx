import Grid from '@mui/material/Grid';
import React  from 'react';
import TripleSortingFilter from "../../components/common/triple-sorting-filter/TripleSortingFilter";

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

        <Grid maxWidth={'60%'}>
           <TripleSortingFilter inputs={tripleSortingFilterData}/>
        </Grid>
    )

}