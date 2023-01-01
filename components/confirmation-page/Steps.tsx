import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { filterd_TripData } from '../../data/tickets_data/DataTickets';
import Information from "./Information";

export interface formType {
    firstname: string,
    lastName: string,
    gender: string,
    phone: string,
    idCode: string
}

export default function Steps(props: { res: boolean, step: number, setStep: Dispatch<SetStateAction<number>>,information:filterd_TripData | undefined ,numPass:number,type_id:number}) {
    const [forms, setForms] = useState<formType[]>([]);
    if (props.step === 0) {
        return (
            // <AmirComponent forms={forms} setForms={setForms} numberOfPassengers={number}>
            <Grid>step1</Grid>
        )
    }
    else if (props.step === 1) {
        return (
            <Information res={props.res} forms={forms} infomation={props.information} type_id={props.type_id} numPass={props.numPass}/>
        )
    }
    else {
        return (
            <Grid>step 3</Grid>
        )
    }
}