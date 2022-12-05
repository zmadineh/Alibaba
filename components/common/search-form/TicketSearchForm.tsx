import React, {useState} from "react";

import {searchFromValue} from "../../../model/searchFormValue.type";

import {internalCities} from "../../../data/internalCities";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography/Typography";
import SwappableInput from "./input-components/SwappableInput";
import Grid from "@mui/material/Grid";


export default function TicketSearchForm () {

    // type f = searchFromValue
    const [form, setForm] = useState<searchFromValue>({
        originCity: '',
        destinationCity: '',
        departureDate: '',
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
                />
                <Button type={"submit"} variant={"contained"}>{`جستجو`}</Button>
            </form>
        </Grid>
    );
}
