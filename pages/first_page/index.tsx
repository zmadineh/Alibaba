import { Stack, Grid } from '@mui/material';
import { Head } from 'next/document';
import React, { useState, useRef, useEffect, ReactNode } from 'react'

const pages = {
    0: 'inFlight',
    1: 'outFlight',
    2: 'train',
    3: 'Bus',
    4: 'tour'
}

const GetPage = (index: number) => {
    if (index == 0) {
        return (
            <Stack>inFlight</Stack>
        )
    }
    else if (index == 1) {
        return (
            <Stack>outFlight</Stack>
        )
    }
    else if (index == 2) {
        return (
            <Stack>train</Stack>
        )
    }
}

export default function firtstPage() {
    const [page, setPage] = useState(0);
    return (

        <Grid>
            <Grid id='layout' >
                <Grid>Hero</Grid>
                <Grid container marginX={'auto'} direction={'column'} width={'100%'} sx={{
                    maxWidth : {
                        lg:'1200px',
                        md : '800px',
                        sm : '100%'
                    }
                }}>
                    <Grid>tabView</Grid>
                    <Grid>Forms</Grid>
                    <Grid>Bimeh</Grid>
                    <Grid>Poshtibani</Grid>
                    {GetPage(page)}
                </Grid>
            </Grid>
        </Grid>
    )
    
}