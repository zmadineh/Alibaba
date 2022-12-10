import React, {useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";
import {internalCities} from "../../../data/internalCities.data";

import SwappableInput from "../../common/search-form/input-components/swappable-inputs/SwappableInput";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SingleDropDown from "../../common/search-form/input-components/SingleDropDown";
import {swappableInputsDetailType} from "../../../model/swappableInputsDetail.type";
import {externalAirports} from "../../../data/externalAirports.data";
import {emptySearchFormData} from "../../../data/emptySearchForm.data";

const swappableInputsDetails: swappableInputsDetailType[] = [
    {
        name: 'origin',
        label: 'مبدا',
        subLabel: '(شهر، پایانه)',
        data: internalCities,
        iconName: 'location',
        listDescription: true,
    },
    {
        name: 'destination',
        label: 'مقصد',
        subLabel: '(شهر، پایانه)',
        data: internalCities,
        iconName: 'location',
        listDescription: true,
    }
]


interface InternalFlightSearchFormProps {
    mainForm: searchFromValue,
    setMainForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
}

export default function BusTicketSearchForm({mainForm, setMainForm} : InternalFlightSearchFormProps) {

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
                    <Grid item xs={12} md={6}>
                        <SwappableInput
                            details={swappableInputsDetails}
                            handleChange={handleChangeWithName}
                            form={form}
                            setForm={setForm}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SingleDropDown
                            firstLabel={'تاریخ حرکت'}
                            firstName={'departureDate'}
                            handleChange={handleChangeWithName}
                            form={form}
                            setForm={setForm}
                            iconName={'calender'}
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button type={"submit"} variant={"contained"} size={"medium"} sx={{height: '100%', width: '100%'}}>{`جستجو`}</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}