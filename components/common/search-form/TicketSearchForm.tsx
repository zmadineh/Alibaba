import React, {useState} from "react";
import CustomTextField from "./CustomTextField";
import CustomDropDown from "./CustomDropDown";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography/Typography";
import SwappableInput from "./SwappableInput";


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

    const [formValues,setFormValues] = useState<searchFromValue>({
        originCity: '',
        destinationCity: '',
        departureDate: '',
        passengerCount: {adult: 1, child: 0, baby: 0},
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formValues)
    }

    return (
        <Paper>
            <Typography variant={"h4"}>Form</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
                {/*<CustomTextField changeHandler={handleChange} label={"Name"} name={"name"}/>*/}
                {/*<CustomTextField changeHandler={handleChange} label={"Email"} name={"email"}/>*/}
                {/*<CustomDropDown label={"Age"} name={"age"} changeHandler={handleChange} values={ages} currentValue={values.age}/>*/}


                <SwappableInput />


                <Button type={"submit"} variant={"contained"}>{`جستجو`}</Button>
            </form>
        </Paper>
    );
}
