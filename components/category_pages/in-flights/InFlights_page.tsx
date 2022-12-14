import { Grid } from "@mui/material";
import Questions from '../../common_questions/Quetions'

export default function InFlights_page() {
    return (
        <>
            <Grid><Questions category={'inFlight'}/></Grid>
            <Grid>some texts</Grid>
        </>
    )

}