import React, {useCallback, useEffect, useState} from "react";
import {useSearchesSelector} from "../../../redux/AuthHooks";
import {useDispatch} from "react-redux";
import {addRecent} from "../../../redux/Slices/SearchSlice";
import {useRouter} from "next/router";

import {emptySearchFormData} from "../../../data/search-form/emptySearchForm.data";
import {getInputDetailsByType} from "../../../data/search-form/serchFormInputDetails";

import {searchFromValue} from "../../../model/form/searchFormValue.type";

import SearchFormTemplates from "./SerchFormTemplate";

import Grid from "@mui/material/Grid/Grid";
import {getTicket} from "../../../data/database/trips.data";
import {swappableInputsDetailType} from "../../../model/swappableInputsDetail.type";
import SearchCardContainer from "../../common/recent-searchs/SearchCardContainer";
import {useMediaQuery, useTheme} from "@mui/material";


interface SearchFormProps {
    index: number,
    searches: searchFromValue[],
    setSearches: React.Dispatch<React.SetStateAction<searchFromValue[]>>,
}

export default function SearchForm({index, searches, setSearches} : SearchFormProps) {

    const router = useRouter();
    const dispatch = useDispatch();
    const theme = useTheme();

    const laptopMatch = useMediaQuery(theme.breakpoints.up('md'));
    const recentData = useSearchesSelector((state) => state.searches);

    const [mainForm, setMainForm] = useState<searchFromValue>({...emptySearchFormData, formType: index})
    const [inputDetails, setInputDetails] = useState<swappableInputsDetailType[]>([])

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
            }
        });
    }

    useEffect( () => {
        const fetchData = async () => {
            const data = await getInputDetailsByType(index)
            setInputDetails(data)
        }
        fetchData().catch(console.error);
    })

    return (
        <Grid zIndex={1000} py={2}>
            <SearchFormTemplates submit={mainHandleSubmit} formType={index} inputDetails={inputDetails} />

            {!laptopMatch && <SearchCardContainer categoryIndex={index} searches={searches} setSearches={setSearches} />}
        </Grid>
    )
}