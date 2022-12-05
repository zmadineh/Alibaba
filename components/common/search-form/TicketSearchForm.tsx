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

    const [form, setForm] = useState<searchFromValue>({
        originCity: '',
        destinationCity: '',
        departureDate: '',
        passengerCount: {adult: 1, child: 0, baby: 0},
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form)
    }

    return (
        <Grid>
            <Typography variant={"h4"}>Form</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
                <SwappableInput form={form}/>
                <CustomTextField label={'مبدا'} name={'mabda'} changeHandler={handleChange} />
                <Button type={"submit"} variant={"contained"}>{`جستجو`}</Button>
            </form>
        </Grid>
    );
}
