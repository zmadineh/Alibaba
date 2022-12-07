import React from 'react'
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Link from 'next/link';
import Image from 'next/image';
import Download from "../../../public/Assets/Images/download-card/download.jpg"
import { grey } from '@mui/material/colors';
import { display } from '@mui/system';


const DawnloadCardMobile = () => {
    return (
        <Grid xs={12} item sx={{ display: { xs: "flex", md: "none" } }} height={175} alignItems={"flex-end"} >
            <Grid item xs={6} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} height={175} p={1}>
                <Grid item ><Typography variant='h6' sx={{ fontSize: "1rem", fontWeight: "700" }}>اپلیکیشن<br />علی بابا</Typography></Grid>
                <Grid item><Typography sx={{ fontSize: ".75rem", fontWeight: "400", color: "grey.500" }}> همه سفرها در جیب شماست</Typography></Grid>
                <Grid item width={110}><Link href={"/"}><Button variant='Button2'  ><Typography sx={{ fontSize: ".75rem", fontWeight: "600" }} >راهنمای نصب</Typography ></Button></Link></Grid>
            </Grid>
            <Grid item xs={6} height={120}  >
                <Image src={Download} alt="علی بابا" style={{ width: "100%", height: "100%" }} />
            </Grid>
        </Grid>
    )
}

export default DawnloadCardMobile