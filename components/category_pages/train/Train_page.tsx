import { Grid } from "@mui/material";
import Questions from '../../common_questions/Quetions'
import TrainDetails from "../../home/train-card/TrainDetails";

export default function Train_page() {
    return (
        <>
            <Grid><Questions category={'train-ticket'} /></Grid>
           <Grid> <TrainDetails /></Grid>
        </>
    )

}