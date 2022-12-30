
import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";




export default function Steps(props: { res: boolean,step:number,setStep: Dispatch<SetStateAction<number>>}) {
    if(props.step===0){
        return(
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