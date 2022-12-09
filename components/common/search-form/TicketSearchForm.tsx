import React, {useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";

import {internalCities} from "../../../data/internalCities.data";

import SwappableInput from "./input-components/swappable-inputs/SwappableInput";
import ToggleInputs from "./input-components/ToggleInputs";
import PassengerCountInput from "./passenger-count/PassengerCountInput";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid";


export default function TicketSearchForm () {

    const [form, setForm] = useState<searchFromValue>({
        originCity: '',
        destinationCity: '',
        departureDate: '',
        returnDate: '',
        passengerCount: {adult: 1, child: 0, baby: 0},
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form,[event.target.name] : event.target.value});
    }

    const handleChangeWithName = (name: string, value: string | null) => {
        setForm({...form,[name] : value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form)
    }

    return (
        <Grid padding={2}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2} flexWrap={"nowrap"} flexDirection={{xs: 'column', md: 'row'}} width={'100%'}>
                    <Grid item xs={12} md={4}>
                        <SwappableInput
                            firstInputName={'originCity'}
                            secondInputName={'destinationCity'}
                            firstData={internalCities}
                            secondData={internalCities}
                            firstLabel={'مبدا'}
                            secondLabel={'مقصد'}
                            handleChange={handleChangeWithName}
                            form={form}
                            setForm={setForm}
                            iconName={'location'}
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
