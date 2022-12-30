import React, {useCallback, useState} from "react";

import TourSearchForm from "./TourSearchForm";

import {emptySearchFormData} from "../../../data/form/emptySearchForm.data";
import {searchFromValue} from "../../../model/form/searchFormValue.type";
import {getInputDetailsByType} from "../../../data/search-form/serchFormInputDetails";
import SearchFormTemplates from "./SerchFormTemplate";

import Grid from "@mui/material/Grid/Grid";
import {useRouter} from "next/router";
import {useSearchesSelector} from "../../../redux/AuthHooks";
import {useDispatch} from "react-redux";
import {addRecent} from "../../../redux/Slices/SearchSlice";

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

    const router = useRouter();
    const dispatch = useDispatch();
    const recentData = useSearchesSelector((state) => state.searches);

    const [mainForm, setMainForm] = useState<searchFromValue>({...emptySearchFormData, formType: 0})

    const mainHandleSubmit = (form : searchFromValue) => {
        console.log(form)
        setMainForm(form);
        dispatch(addRecent(form))

        // let startPoint = 0
        // if(index === 0 || index === 1)

        router.push({ pathname: 'search-page',
            query: {
                transportType: index,
                currStartPoint: form.origin,
                currDestinationPoint: form.destination,
                currDepartureDate: form.departureDate,
                returnDate: form.returnDate,
                roundWay: form.oneWayRoad,
                adultCount: form.passengerCount.adult,
                childCount: form.passengerCount.child,
                babyCount: form.passengerCount.baby,
            }});
    }

    return (
        <Grid zIndex={1000} py={2}>
            <SearchFormTemplates submit={mainHandleSubmit} formType={index} inputDetails={getInputDetailsByType(index)} />
        </Grid>
    )
}