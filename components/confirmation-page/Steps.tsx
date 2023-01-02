import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { filterd_TripData } from '../../data/tickets_data/DataTickets';
import PassengerInfo from "./passenger-info-form/PassengerInfo";
import Information from "./Information";

export interface formType {
    firstName: string,
    lastName: string,
    gender: string,
    phone: string,
    idCode: string
}

export default function Steps(props: { res: boolean, activeStep: number, setActiveStep: Dispatch<SetStateAction<number>>,information:filterd_TripData | undefined ,numPass:number,type_id:number}) {
    const [forms, setForms] = useState<Array<formType>>([
        {
            firstName:'',
            lastName:'',
            gender:'مرد',
            phone:'',
            idCode:''

       },
    ]);
    if (props.activeStep === 0) {
        return (
            <PassengerInfo forms={forms} setForms={setForms} setActiveStep={props.setActiveStep}/>
        )
    }
    else if (props.activeStep === 1) {
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