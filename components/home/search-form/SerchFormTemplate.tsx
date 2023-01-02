import React, {useEffect, useState} from "react";

import {searchFromValue} from "../../../model/form/searchFormValue.type";
import {swappableInputsDetailType} from "../../../model/form/swappableInputsDetail.type";

import {emptySearchFormData} from "../../../data/search-form/emptySearchForm.data";

import SwappableInput from "../../common/search-form/input-components/swappable-inputs/SwappableInput";
import ToggleInputs from "../../common/search-form/input-components/ToggleInputs";
import PassengerCountInput from "../../common/search-form/input-components/PassengerCountInput";
import BooleanSelector from "../../common/search-form/input-components/BooleanSelector";
import SingleDropDown from "../../common/search-form/input-components/SingleDropDown";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


interface InternalFlightSearchFormProps {
    submit: (form: searchFromValue) => void
    formType: number,
    inputDetails: swappableInputsDetailType[]
}

export default function SearchFormTemplates({submit, formType, inputDetails} : InternalFlightSearchFormProps) {

    const [loadingDetails, setLoadingDetails] = useState(true)
    const [origin, setOrigin] = useState<string>('');
    const [destination, setDestination] = useState<string>('');
    const [oneWayRoad, setOneWayRoad] = useState<boolean>(true);
    const [departureDate, setDepartureDate] = useState<string>('');
    const [returnDate, setReturnDate] = useState<string>('');
    const [passengerCount, setPassengerCount] = useState(emptySearchFormData.passengerCount);

    const [formError, setFormError] = useState(
        {
            origin: false,
            destination: false,
            departureDate: false,
            returnDate: false,
            passengerCount: false
        })

    useEffect(() => {
        if(inputDetails.length > 0)
            setLoadingDetails(false)
    }, [inputDetails.length])

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let originError = false;
        let destinationError = false;
        let departureDateError = false;
        let returnDateError = false;
        let passengerCountError = false;
        let haveError = false

        // console.log('departureDate ', departureDate === '')

        if (origin === '' || origin == null) {
            originError = true
            haveError = true
        }

        if (destination === '' || destination == null) {
            destinationError = true
            haveError = true
        }

        if (origin === destination){
            haveError = true
            destinationError = true
            originError = true
        }

        if (departureDate === '' || departureDate == null) {
            departureDateError = true
            haveError = true
        }
        if (formType!== 3 && !oneWayRoad && returnDate === '') {
            returnDateError = true
            haveError = true
        }

        setFormError({...formError, origin: originError, destination: destinationError, departureDate: departureDateError, returnDate: returnDateError})

        // console.log(formError, originError, formType)


        if(!haveError)
            submit({
                formType: formType,
                origin: origin,
                destination: destination,
                oneWayRoad: oneWayRoad,
                departureDate: departureDate,
                returnDate: returnDate,
                passengerCount: passengerCount
            })
    }

    return (
        <Grid padding={1}>
            {loadingDetails ? null :
                <form onSubmit={(e) => handleSubmit(e)}>
                    {(formType === 0 || formType === 1) &&
                        <Grid container maxWidth={'150px'} mb={3} mt={0}>
                            <BooleanSelector
                                name={'oneWayRoad'}
                                options={['یک طرفه', 'رفت و برگشت']}
                                setValue={setOneWayRoad}
                            />
                        </Grid>
                    }
                    <Grid container spacing={2} flexWrap={"nowrap"} flexDirection={{xs: 'column', md: 'row'}}
                          width={'100%'}>

                        <Grid item xs={12} md={(formType === 3 ? 5.5 : 4)}>
                            <SwappableInput
                                details={inputDetails}
                                setFirstValue={setOrigin}
                                setSecValue={setDestination}
                                formError={formError}
                                listWidth={(formType === 1 ? '200%' : '100%')}
                            />
                        </Grid>

                        <Grid item xs={12} md={(formType === 3 ? 4.5 : 4)}>
                            {(formType === 3) && // bus
                                <SingleDropDown
                                    firstLabel={'تاریخ حرکت'}
                                    firstName={'departureDate'}
                                    value={departureDate}
                                    setValue={setDepartureDate}
                                    iconName={'calender'}
                                    formError={formError}
                                />
                            }
                            {(formType !== 3) && // bus
                                <ToggleInputs
                                    firstValue={departureDate}
                                    setFirstValue={setDepartureDate}
                                    secValue={returnDate}
                                    setSecValue={setReturnDate}
                                    firstLabel={'تاریخ رفت'}
                                    secondLabel={'تاریخ برگشت'}
                                    oneWayRoad={oneWayRoad}
                                    firstName={'departureDate'}
                                    secondName={'returnDate'}
                                    iconName={'calender'}
                                    formError={formError}
                                />
                            }
                        </Grid>
                        {(formType !== 3) && // bus
                            <Grid item xs={12} md={2.5}>
                                <PassengerCountInput
                                    passengerCount={passengerCount}
                                    setPassengerCount={setPassengerCount}
                                    name={'passengerCount'}
                                />
                            </Grid>
                        }
                        <Grid item xs={12} md={(formType === 3 ? 2 : 1.5)}>
                            <Button type={"submit"} variant={"contained"} size={"medium"}
                                    sx={{height: '100%', width: '100%', borderRadius: '10px'}}>{`جستجو`}</Button>
                        </Grid>
                    </Grid>
                </form>
            }
        </Grid>
    );
}