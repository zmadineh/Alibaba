import { Grid } from "@mui/material";
import Questions from '../../common_questions/Quetions'

export default function Train_page() {
    return (
        <>
            <Grid><Questions category={'train-ticket'}/></Grid>
            <Grid>بلیط قطار ...</Grid>
            <Grid>
                information cards 1
            </Grid>
            <Grid>قیمت بلیط قطار ...</Grid>
            <Grid>رزرو بلیط قطار ...</Grid>
            <Grid>information cards 2</Grid>
            <Grid>شرکت های ریلی ایران ...</Grid>
            <Grid>company cards</Grid>
            <Grid>some texts</Grid>
            <Grid>information cards 3</Grid>
        </>
    )

}