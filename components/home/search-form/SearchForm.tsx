import React, {useCallback, useState} from "react";

import TourSearchForm from "./TourSearchForm";

import {emptySearchFormData} from "../../../data/form/emptySearchForm.data";
import {searchFromValue} from "../../../model/searchFormValue.type";
import {getInputDetailsByType} from "../../../data/search-form/serchFormInputDetails";
import SearchFormTemplates from "./SerchFormTemplate";

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
        console.log(form)
        setMainForm(form);
        const searchesTemp = searches
        const repeatedDataIndex = searchesTemp.findIndex(item => JSON.stringify(item) === JSON.stringify(form) )
        if (repeatedDataIndex !== -1){
            searchesTemp.splice(repeatedDataIndex, 1)
        }
        searchesTemp.unshift(form)
        setSearches(searchesTemp)
    }

    return (
        <Grid zIndex={1000} py={2}>
            <SearchFormTemplates submit={mainHandleSubmit} formType={index} inputDetails={getInputDetailsByType(index)} />
        </Grid>
    )
}