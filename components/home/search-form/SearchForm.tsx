import InternalFlightSearchForm from "./InternalFlightSearchForm";
import InternationalFlightSearchForm from "./InternationalFlightSearchForm";
import TrainTicketSearchForm from "./TrainTicketSearchForm";
import BusTicketSearchForm from "./BusTicketSearchForm";
import TourSearchForm from "./TourSearchForm";
import React, {useCallback, useState} from "react";
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
    searches: searchFromValue[],
    setSearches: React.Dispatch<React.SetStateAction<searchFromValue[]>>,
}

export default function SearchForm({index, searches, setSearches} : SearchFormProps) {

    const [mainForm, setMainForm] = useState<searchFromValue>({...emptySearchFormData, formType: 0})

    const mainHandleSubmit = (form : searchFromValue) => {
        setMainForm(form);
        const searchesTemp = searches
        const repeatedDataIndex = searchesTemp.findIndex(item => item === form)
        if (repeatedDataIndex !== -1){
            searchesTemp.splice(repeatedDataIndex, 1)
        }
        searchesTemp.unshift(form)
        setSearches(searchesTemp)
        console.log('search', JSON.stringify(searches))
    }

    return (
        <Grid zIndex={1000} py={2}>
            {index === 0 && <InternalFlightSearchForm submit={mainHandleSubmit}/>}
            {index === 1 && <InternationalFlightSearchForm submit={mainHandleSubmit}/>}
            {index === 2 && <TrainTicketSearchForm submit={mainHandleSubmit}/>}
            {index === 3 && <BusTicketSearchForm submit={mainHandleSubmit}/>}
            {index === 4 && <TourSearchForm submit={mainHandleSubmit}/>}
        </Grid>
    )
}