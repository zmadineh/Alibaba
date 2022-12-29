import React, {useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";
import {internalCities} from "../../../data/database/internalCities.data";
import {swappableInputsDetailType} from "../../../model/swappableInputsDetail.type";

import SwappableInput from "../../common/search-form/input-components/swappable-inputs/SwappableInput";
import ToggleInputs from "../../common/search-form/input-components/ToggleInputs";
import PassengerCountInput from "../../common/search-form/input-components/PassengerCountInput";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {emptySearchFormData} from "../../../data/form/emptySearchForm.data";
import BooleanSelector from "../../common/search-form/input-components/BooleanSelector";
import SingleDropDown from "../../common/search-form/input-components/SingleDropDown";

interface InternalFlightSearchFormProps {
    submit: (form: searchFromValue) => void
    formType: number,
    inputDetails: swappableInputsDetailType[]
}


export default function SearchFormTemplates({submit, formType, inputDetails} : InternalFlightSearchFormProps) {

    const [form, setForm] = useState<searchFromValue>({...emptySearchFormData, formType: formType});
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


    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let haveError = false
        console.log('departureDate ', departureDate === '')

        if (origin === '') {
            setFormError({...formError, origin: true})
            haveError = true
            console.log(origin)
        } else setFormError({...formError, origin: false})

        if (destination === '') {
            setFormError({...formError, destination: true})
            haveError = true
            console.log(destination)
        } else setFormError({...formError, destination: false})

        if (departureDate === '') {
            setFormError({...formError, departureDate: !formError.departureDate})
            haveError = true
            console.log('departureDate ', departureDate)
        } else setFormError({...formError, departureDate: false})

        if (formType!== 3 && !oneWayRoad && returnDate === '') {
            setFormError({...formError, returnDate: true})
            haveError = true
            console.log(returnDate)
        } else setFormError({...formError, returnDate: false})


        console.log(formError)


        // if(!haveError)
            submit({...form,
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
            <form onSubmit={(e) => handleSubmit(e)}>
                {(formType !== 3) && // bus
                    <Grid container maxWidth={'150px'} mb={3} mt={0}>
                        <BooleanSelector
                            name={'oneWayRoad'}
                            options={['یک طرفه', 'رفت و برگشت']}
                            setValue={setOneWayRoad}
                        />
                    </Grid>
                }
                <Grid container spacing={2} flexWrap={"nowrap"} flexDirection={{xs: 'column', md: 'row'}} width={'100%'}>

                    <Grid item xs={12} md={4}>
                        <SwappableInput
                            details={inputDetails}
                            setFirstValue={setOrigin}
                            setSecValue={setDestination}
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                            {(formType === 3) && // bus
                                <SingleDropDown
                                    firstLabel={'تاریخ حرکت'}
                                    firstName={'departureDate'}
                                    value={departureDate}
                                    setValue={setDepartureDate}
                                    iconName={'calender'}
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
                    <Grid item xs={12} md={1.5}>
                        <Button type={"submit"} variant={"contained"} size={"medium"} sx={{height: '100%', width: '100%', borderRadius: '10px'}}>{`جستجو`}</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}