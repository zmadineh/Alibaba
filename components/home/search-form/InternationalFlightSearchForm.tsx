import React, {useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";
import {swappableInputsDetailType} from "../../../model/swappableInputsDetail.type";
import {externalAirports} from "../../../data/externalAirports.data";

import SwappableInput from "../../common/search-form/input-components/swappable-inputs/SwappableInput";
import ToggleInputs from "../../common/search-form/input-components/ToggleInputs";
import PassengerCountInput from "../../common/search-form/input-components/PassengerCountInput";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {emptySearchFormData} from "../../../data/emptySearchForm.data";

const swappableInputsDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: 'شهر و فرودگاه',
        data: externalAirports,
        iconName: 'location',
        listDescription: true,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: 'شهر و فرودگاه',
        data: externalAirports,
        iconName: 'location',
        listDescription: true,
    }
]

interface InternalFlightSearchFormProps {
    submit: (form: searchFromValue) => void
}

export default function InternationalFlightSearchForm({submit} : InternalFlightSearchFormProps) {

    const [form, setForm] = useState<searchFromValue>({...emptySearchFormData, formType: 1});
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
        <Grid padding={2}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2} flexWrap={"nowrap"} flexDirection={{xs: 'column', md: 'row'}} width={'100%'}>
                    <Grid item xs={12} md={4}>
                        <SwappableInput
                            details={swappableInputsDetails}
                            setFirstValue={setOrigin}
                            setSecValue={setDestination}
                            listWidth={'200%'}
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
                    <Grid item xs={12} md={3}>
                        <PassengerCountInput
                            form={form}
                            setForm={setForm}
                            name={'passengerCount'}
                        />
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Button type={"submit"} variant={"contained"} size={"medium"} sx={{height: '100%', width: '100%'}}>{`جستجو`}</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}