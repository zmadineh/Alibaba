import { Dialog, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";

export default function Bus_page(props: { matches: boolean }): JSX.Element {
    const { matches } = props;
   
    if (matches) {
        return (
            <>
                <Grid>common questions</Grid>
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
    else {
        return (
            <Dialog open={matches} sx={{
                width: '100vw',
                height: '100vh',
                overflowY: 'scroll',
                backgroundColor:'red',
            }}>
                <Grid>forms</Grid>
                <Grid>common questions</Grid>
                <Grid>بلیط اتوبوس ...</Grid>
                <Grid>
                    information carts 1
                </Grid>
                <Grid>استرداد بلیط اتوبوس ...</Grid>
                <Grid>information carts 2</Grid>
                <Grid>some texts</Grid>
            </Dialog>
        )
    }

}