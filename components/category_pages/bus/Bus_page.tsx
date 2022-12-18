import { Grid } from "@mui/material";
import Questions from '../../common_questions/Quetions'

export default function Bus_page() {
    return (
        <>
            <Grid><Questions category={'bus-ticket'}/></Grid>
            <Grid>بلیط اتوبوس ...</Grid>
            <Grid>
                information carts 1
            </Grid>
            <Grid>استرداد بلیط اتوبوس ...</Grid>
            <Grid>information carts 2</Grid>
            <Grid>some texts</Grid>
        </>
    )

}