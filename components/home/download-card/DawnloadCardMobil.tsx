import React from 'react'
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Link from 'next/link';



const DawnloadCardMobil = () => {
    return (
        <Grid item xs={12} sx={{ display: { xs: "flex", sm: "none" }, marginLeft: "5px", marginTop: "5px" }} justifyContent={"center"} alignItems={"center"} gap={1} >
            <Grid item display={"flex"} flexDirection={"column"} gap={1}>
                <Grid item><Typography variant='h6' sx={{ fontSize: 16, fontWeight: 700 }}>اپلیکیشن علی بابا</Typography></Grid>
                <Grid item><Typography sx={{ color: "grey.500", fontSize: 12, fontWeight: 700 }}>همه ی سفرها در جیب شماست</Typography></Grid>
                <Grid xs={8} item ><Link href={"/"}><Button variant='Button2' ><Typography sx={{ fontWeight: 500, fontSize: 12 }}>راهنمای نصب</Typography></Button></Link></Grid>
            </Grid>
        </Grid>
    )
}

export default DawnloadCardMobil