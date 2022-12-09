import InternalFlightSearchForm from "./InternalFlightSearchForm";
import InternationalFlightSearchForm from "./InternationalFlightSearchForm";
import TrainTicketSearchForm from "./TrainTicketSearchForm";
import BusTicketSearchForm from "./BusTicketSearchForm";
import TourSearchForm from "./TourSearchForm";
import React, {useState} from "react";
import {searchFromValue} from "../../../model/searchFormValue.type";
import {emptySearchFormData} from "../../../data/emptySearchForm.data";
import Grid from "@mui/material/Grid/Grid";

// const FormsComponent = {
//     0: InternalFlightSearchForm,
//     1: InternationalFlightSearchForm,
//     2: TrainTicketSearchForm,
//     3: BusTicketSearchForm,
//     4: TourSearchForm,
// }

interface SearchFormProps {
    index: number,
}

export default function SearchForm({index} : SearchFormProps) {

    const [mainForm, setMainForm] = useState<searchFromValue>(emptySearchFormData)

    return (
        <Grid zIndex={1000}>
            {index === 0 && <InternalFlightSearchForm mainForm={mainForm} setMainForm={setMainForm} />}
            {index === 1 && <InternationalFlightSearchForm mainForm={mainForm} setMainForm={setMainForm}/>}
            {index === 2 && <TrainTicketSearchForm mainForm={mainForm} setMainForm={setMainForm}/>}
            {index === 3 && <BusTicketSearchForm mainForm={mainForm} setMainForm={setMainForm}/>}
            {index === 4 && <TourSearchForm mainForm={mainForm} setMainForm={setMainForm}/>}
        </Grid>
    )
}