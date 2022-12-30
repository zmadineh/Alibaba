
import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";


export interface formType{
    firstname : string,
    lastName : string,
    gender:string,
    phone:string,
    idCode:string
} 

export default function Steps(props: { res: boolean,step:number,setStep: Dispatch<SetStateAction<number>>}) {
    const [forms,setForms] = useState<formType[]>([])
    if(props.step===0){
        return(
            // <AmirComponent forms={forms} setForms={setForms} numberOfPassengers={number}>
            <Grid>step1</Grid>
        )
    }
    else if(props.step===1){
        return(
            <Grid>step2</Grid>
        )
    }
    else{
        return(
            <Grid>step 3</Grid>
        )
    }
}