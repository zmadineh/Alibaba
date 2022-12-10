import { Stack, Grid } from '@mui/material';
import React, { useState } from 'react';
import { GetPages } from '../components/get_pages_func/GetPages';
import Tabview from '../components/home/tabview/Tabview';
import HelpCard from './../components/home/help-card/HelpCard';
import DownloadCard from './../components/home/download-card/DownloadCard';
import FlightDetails from '../components/common/flight-details/FlightDetails'

// const pages = {
//     0: 'inFlight',
//     1: 'outFlight',
//     2: 'train',
//     3: 'Bus',
//     4: 'tour'
// }


import LayoutMobile from '../components/layout/layoutMobile/LayoutMobile'
import Tabview from '../components/home/tabview/Tabview'
import Footer from '../components/layout/Footer'

export default function FirstPage() {
    const [page, setPage] = useState(0);
    return (


        <Grid>
            <Grid id='layout' >
                <Tabview value={page} setValue={setPage} />
                <Grid container marginX={'auto'} direction={'column'} width={'100%'} sx={{
                    maxWidth: {
                        lg: '1200px',
                        md: '800px',
                        sm: '100%'
                    }
                }}>
                    <Grid>
                        <HelpCard />
                        <DownloadCard />
                        <FlightDetails/>
                    </Grid>
                    {GetPages(page)}
                </Grid>

            </Grid>
        </Grid>
    )


