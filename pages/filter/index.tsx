import Grid from '@mui/material/Grid';
import React, {useState} from 'react';
import OrderingFilter from "../../components/common/ordering-filter/OrderingFilter";
import PopoverOrderingFilter from "../../components/common/ordering-filter/PopoverOrderingFilter";

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
        label: 'بیشترین قیمت',
        filterLabel: 'highest_price'
    },
    {
        label: 'کمترین قیمت',
        filterLabel: 'lowest_price'
    },
]

export default function Filter() {

    const [filterIndex, setFilterIndex] = useState(0)

    return (

        <Grid container flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={10}>
           <OrderingFilter value={filterIndex} setValue={setFilterIndex} inputs={tripleSortingFilterData}/>
            <PopoverOrderingFilter checked={filterIndex} setChecked={setFilterIndex} inputs={tripleSortingFilterData} />
        </Grid>
    )

}