import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { GetPages } from '../components/get_pages_func/GetPages';
import Tabview from '../components/home/tabview/Tabview';

// const pages = {
//     0: 'inFlight',
//     1: 'outFlight',
//     2: 'train',
//     3: 'Bus',
//     4: 'tour'
// }

export default function FirstPage() {
    const [page, setPage] = useState(0);
    return (

        <Grid>
            <Grid id='layout' >
                <Tabview value={page} setValue={setPage}/>
                <Grid container marginX={'auto'} direction={'column'} width={'100%'} sx={{
                    maxWidth : {
                        lg:'1200px',
                        md : '800px',
                        sm : '100%'
                    }
                }}>
                    <Grid>Forms</Grid>
                    <Grid>Bimeh</Grid>
                    <Grid>Poshtibani</Grid>
                    {GetPages(page)}
                </Grid>
            </Grid>
        </Grid>
    )
    
}