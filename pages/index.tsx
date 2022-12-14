import { Dialog, DialogContent, Grid, IconButton, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { GetPages } from '../components/get_pages_func/GetPages';
import Tabview from '../components/home/tabview/Tabview';
import HelpCard from './../components/home/help-card/HelpCard';
import DownloadCard from './../components/home/download-card/DownloadCard';
import FlightDetails from '../components/common/flight-details/FlightDetails';
import Footer from '../components/layout/Footer';
import SearchCardContainer from "../components/common/recent-searchs/SearchCardContainer";
import { searchFromValue } from "../model/searchFormValue.type";
import SearchForm from "../components/home/search-form/SearchForm";
import TabPanel from "../components/home/tabview/TabPanel";
import Desk_header from '../components/desktop_header/Desk_header';
const pagesFaName = ['پرواز داخلی', 'پرواز خارجی', 'قطار', 'اتوبوس', 'تور']
export default function FirstPage() {
    const [page, setPage] = useState<number>(3);
    const [searches, setSearches] = useState<searchFromValue[]>([])
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Grid>
            <Grid id='layout' bgcolor='grey.900' >
                <Desk_header/>
                <Tabview value={page} setValue={setPage}>
                    <TabPanel value={page} index={page}>
                        <SearchForm searches={searches} setSearches={setSearches} index={page} />
                    </TabPanel>
                </Tabview>
                <Grid container marginX={'auto'} direction={'column'} width={'100%'} sx={{
                    maxWidth: {
                        lg: '1200px',
                        md: '800px'
                    }
                }}>
                    <Grid>
                        <SearchCardContainer categoryIndex={page} searches={searches} setSearches={setSearches} />
                        <HelpCard />
                        <DownloadCard />
                        <FlightDetails />
                    </Grid>
                    {GetPages(page)}
                </Grid>
                {!matches && (
                    <Dialog fullScreen open={page != 0}>
                        <Grid display={'flex'} alignItems={'center'} padding={'4px'}>
                            <IconButton onClick={()=>{setPage(0)}} sx={{ padding: '12px' }}>
                                <SvgIcon width="1.5rem" height="1.5rem" fill="currentColor" sx={{color:'grey.700'}}><path d="M14.58 5.204a1.127 1.127 0 0 1 1.59 0l6 6 .028.028.022.025a.842.842 0 0 1 .041.05l.033.044.03.043.02.034a1.122 1.122 0 0 1 .002 1.14l-.024.039a.688.688 0 0 1-.065.091 1.046 1.046 0 0 1-.086.098l.059-.065a1.294 1.294 0 0 1-.039.043l-.02.022-6 6c-.22.22-.508.329-.796.329a1.127 1.127 0 0 1-.796-1.92l4.08-4.08H2.625a1.126 1.126 0 0 1-1.12-1.017L1.5 12c0-.621.504-1.125 1.125-1.125h16.034l-4.08-4.08a1.127 1.127 0 0 1-.077-1.505l.077-.086Z"></path></SvgIcon>
                            </IconButton>
                            <Typography>{pagesFaName[page]}</Typography>
                        </Grid>
                        <DialogContent sx={{ padding: '16px' }}>
                            <Grid>
                            <SearchForm searches={searches} setSearches={setSearches} index={page} />
                                {GetPages(page)}
                            </Grid>
                        </DialogContent>
                    </Dialog >
                )}
                <Footer />
            </Grid>
        </Grid>
    )
}