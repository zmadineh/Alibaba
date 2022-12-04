import React, {useState} from "react";
import CustomTextField from "./input-components/CustomTextField";
import CustomDropDown from "./input-components/CustomDropDown";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography/Typography";
import SwappableInput from "./input-components/SwappableInput";
import Grid from "@mui/material/Grid";


// interfaces
interface passenger {
    adult: number,
    child: number,
    baby: number,
}

interface searchFromValue {
    originCity: string,
    destinationCity: string,
    departureDate: string,
    passengerCount: passenger,
}


export default function TicketSearchForm () {

<<<<<<< HEAD
    const [form, setForm] = useState<searchFromValue>({
=======
    const [formValues,setFormValues] = useState<searchFromValue>({
>>>>>>> f49780ae6b58049ca4811cca076914fa66980d99
        originCity: '',
        destinationCity: '',
        departureDate: '',
        passengerCount: {adult: 1, child: 0, baby: 0},
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
<<<<<<< HEAD
        setForm({...form,[event.target.name] : event.target.value});
=======
        setFormValues({...formValues,[event.target.name] : event.target.value});
>>>>>>> f49780ae6b58049ca4811cca076914fa66980d99
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
<<<<<<< HEAD
        console.log(form)
=======
        console.log(formValues)
>>>>>>> f49780ae6b58049ca4811cca076914fa66980d99
    }

    return (
        <Grid>
            <Typography variant={"h4"}>Form</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
<<<<<<< HEAD
                <SwappableInput form={form}/>
=======
                <SwappableInput />
>>>>>>> f49780ae6b58049ca4811cca076914fa66980d99


                <Button type={"submit"} variant={"contained"}>{`جستجو`}</Button>
            </form>
        </Grid>
    );
}
