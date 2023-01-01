import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { getTrip } from '../../data/database/trips.data';
import { filterd_TripData } from '../../data/tickets_data/DataTickets';
import Information from "./Information";

export interface formType {
    firstname: string,
    lastName: string,
    gender: string,
    phone: string,
    idCode: string
}

export default function Steps(props: { res: boolean, step: number, setStep: Dispatch<SetStateAction<number>> }) {
    const [forms, setForms] = useState<formType[]>([]);
    const [information, setInformation] = useState<filterd_TripData>()
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            await getTrip(Number(18), Number(0)).then((a) => {
                console.log(router.query.);
                setInformation(a)
            }).catch(() => { console.log('error from steps') });
        }
        fetchData();
    }, [])
    if (props.step === 0) {
        return (
            // <AmirComponent forms={forms} setForms={setForms} numberOfPassengers={number}>
            <Grid>step1</Grid>
        )
    }
    else if (props.step === 1) {
        return (
            <Information res={props.res} forms={forms} infomation={information} />
        )
    }
    else {
        return (
            <Grid>step 3</Grid>
        )
    }
}