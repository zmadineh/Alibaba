import React, {useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";
import {swappableInputsDetailType} from "../../../model/swappableInputsDetail.type";
import {emptySearchFormData} from "../../../data/emptySearchForm.data";
import {internalCities} from "../../../data/internalCities.data";

import SwappableInput from "../../common/search-form/input-components/swappable-inputs/SwappableInput";
import ToggleInputs from "../../common/search-form/input-components/ToggleInputs";
import PassengerCountInput from "../../common/search-form/input-components/PassengerCountInput";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

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


interface InternalFlightSearchFormProps {
    mainForm: searchFromValue,
    setMainForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
}

export default function TrainTicketSearchForm({mainForm, setMainForm} : InternalFlightSearchFormProps) {

    const [form, setForm] = useState<searchFromValue>(emptySearchFormData);

    const handleChangeWithName = (name: string, value: string) => {
        setForm({...form,[name] : value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form)
        setMainForm(form)
    }

    return (
        <Grid padding={2}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2} flexWrap={"nowrap"} flexDirection={{xs: 'column', md: 'row'}} width={'100%'}>
                    <Grid item xs={12} md={4}>
                        <SwappableInput
                            details={swappableInputsDetails}
                            handleChange={handleChangeWithName}
                            form={form}
                            setForm={setForm}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ToggleInputs
                            firstLabel={'تاریخ رفت'}
                            secondLabel={'تاریخ برگشت'}
                            firstName={'departureDate'}
                            secondName={'returnDate'}
                            handleChange={handleChangeWithName}
                            form={form}
                            setForm={setForm}
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