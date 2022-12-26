import React, {useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";
import {internalCities} from "../../../data/form/internalCities.data";
import {swappableInputsDetailType} from "../../../model/swappableInputsDetail.type";

import SwappableInput from "../../common/search-form/input-components/swappable-inputs/SwappableInput";
import ToggleInputs from "../../common/search-form/input-components/ToggleInputs";
import PassengerCountInput from "../../common/search-form/input-components/PassengerCountInput";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {emptySearchFormData} from "../../../data/form/emptySearchForm.data";
import BooleanSelector from "../../common/search-form/input-components/BooleanSelector";

interface InternalFlightSearchFormProps {
    submit: (form: searchFromValue) => void
}

const swappableInputsDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر',
        data: internalCities,
        iconName: 'location',
        listDescription: false,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر',
        data: internalCities,
        iconName: 'location',
        listDescription: false,
    }
]

export default function InternalFlightSearchForm({submit} : InternalFlightSearchFormProps) {

    const [form, setForm] = useState<searchFromValue>({...emptySearchFormData, formType: 0});
    const [origin, setOrigin] = useState<string>('');
    const [destination, setDestination] = useState<string>('');
    const [oneWayRoad, setOneWayRoad] = useState<boolean>(true);
    const [departureDate, setDepartureDate] = useState<string>('');
    const [returnDate, setReturnDate] = useState<string>('');

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submit({...form, origin: origin, destination: destination, oneWayRoad: oneWayRoad, departureDate: departureDate, returnDate:returnDate})
    }

    return (
        <Grid padding={1}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container maxWidth={'150px'} mb={3} mt={0}>
                    <BooleanSelector
                        name={'oneWayRoad'}
                        options={['یک طرفه', 'رفت و برگشت']}
                        setValue={setOneWayRoad}
                    />
                </Grid>

                <Grid container spacing={2} flexWrap={"nowrap"} flexDirection={{xs: 'column', md: 'row'}} width={'100%'}>
                    <Grid item xs={12} md={4}>
                        <SwappableInput
                            details={swappableInputsDetails}
                            setFirstValue={setOrigin}
                            setSecValue={setDestination}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ToggleInputs
                            firstValue={departureDate}
                            setFirstValue={setDepartureDate}
                            secValue={returnDate}
                            setSecValue={setReturnDate}
                            firstLabel={'تاریخ رفت'}
                            secondLabel={'تاریخ برگشت'}
                            firstName={'departureDate'}
                            secondName={'returnDate'}
                            iconName={'calender'}
                        />
                    </Grid>
                    <Grid item xs={12} md={2.5}>
                        <PassengerCountInput
                            form={form}
                            setForm={setForm}
                            name={'passengerCount'}
                        />
                    </Grid>
                    <Grid item xs={12} md={1.5}>
                        <Button type={"submit"} variant={"contained"} size={"medium"} sx={{height: '100%', width: '100%', borderRadius: '10px'}}>{`جستجو`}</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}