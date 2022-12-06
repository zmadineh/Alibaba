import React, {useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";

import {internalCities} from "../../../data/internalCities";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography/Typography";
import SwappableInput from "./input-components/swappable-inputs/SwappableInput";
import Grid from "@mui/material/Grid";
import ToggleInputs from "./input-components/ToggleInputs";
import PassengerCountInput from "./input-components/PassengerCountInput";


export default function TicketSearchForm () {

    // type f = searchFromValue
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
        <Grid>
            <Typography variant={"h4"}>Form</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2} flexWrap={"nowrap"} flexDirection={{xs: 'column', md: 'row'}} width={'100% '}>
                    <Grid item xs={12} sm={4}>
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
                    <Grid item xs={12} sm={3}>
                        <ToggleInputs
                            firstLabel={'تاریخ رفت'}
                            secondLabel={'تاریخ برگشت'}
                            firstName={'departureDate'}
                            secondName={'returnDate'}
                            handleChange={handleChange}
                            form={form}
                            setForm={setForm}
                            iconName={'calender'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <PassengerCountInput />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button type={"submit"} variant={"contained"}>{`جستجو`}</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}
