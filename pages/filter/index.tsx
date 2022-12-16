import Grid from '@mui/material/Grid';
import React, {useState} from 'react';
import DateInput from "../../components/common/search-form/input-components/DateInput";
import TourContent from "../../components/home/tour-page/TourContent";

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
        <TourContent />
        // <Grid container flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={10}>
        //    {/*<TripleSortingFilter value={filterIndex} setValue={setFilterIndex} inputs={tripleSortingFilterData}/>*/}
        //    {/* <FilterPopover checked={filterIndex} setChecked={setFilterIndex} inputs={tripleSortingFilterData} />*/}
        //
        //     <DateInput />
        // </Grid>
    )

}