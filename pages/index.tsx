import React, { useState } from 'react';

import { searchFromValue } from "../model/form/searchFormValue.type";

import { GetPages } from '../components/get_pages_func/GetPages';
import Tabview from '../components/home/tabview/Tabview';
import HelpCard from './../components/home/help-card/HelpCard';
import DownloadCard from './../components/home/download-card/DownloadCard';
import Footer from '../components/layout/Footer';
import SearchCardContainer from "../components/common/recent-searchs/SearchCardContainer";
import SearchForm from "../components/home/search-form/SearchForm";
import TabPanel from "../components/home/tabview/TabPanel";
import Desk_header from '../components/desktop_header/Desk_header';
import HeaderMobile from '../components/layout/layoutMobile/HeaderMobile';

import {styled} from "@mui/material/styles";
import { Dialog, DialogContent, Grid, IconButton, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({

    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        height: '45px',

        '&.Mui-disabled': {
            border: 0,
            borderRadius: '10px',
        },
        '&.Mui-selected': {
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '10px',
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

const pagesFaName = ['پرواز داخلی', 'پرواز خارجی', 'قطار', 'اتوبوس']; //, 'تور'];

export default function FirstPage() {
    const [page, setPage] = useState<number>(0);
    const [searches, setSearches] = useState<searchFromValue[]>([])
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [flightMode, setFlightMode] = React.useState(1); // 0 is internal flight and 1 is international flight

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const laptopMatches = useMediaQuery(theme.breakpoints.up('md'));

    const handleFlightMode = (event: React.MouseEvent<HTMLElement>,
                              newMode: number | null,) => {
        if(newMode === 0 || newMode === 1){
            setFlightMode(newMode)
            setPage(newMode)
        }
        console.log(newMode)
    }

    const backClick = () => {
        setOpenDialog(false)
        setPage(0)
    }

    return (
        <Grid>
          
            <Grid id='layout' bgcolor='grey.900' >
       
                <Desk_header res={laptopMatches}/>
                
                <Tabview value={page} setValue={setPage}>
                    <TabPanel value={page} index={page}>
                        <SearchForm searches={searches} setSearches={setSearches} index={page} />
                    </TabPanel>
                </Tabview>

                <Grid container marginX={'auto'} direction={'column'} width={'100%'} flexWrap={"nowrap"} sx={{
                    maxWidth: {
                        lg: '1200px',
                        md: '800px'
                    },
                    padding:'0 16px',
                }}>
                      
                    <HeaderMobile setPage={setPage} setOpenDialog={setOpenDialog}/>
                    <Grid>
                        {laptopMatches && <SearchCardContainer categoryIndex={page} searches={searches} setSearches={setSearches} />}
                        <HelpCard />
                        <DownloadCard />
                    </Grid>
                    {GetPages(page)}
                </Grid>

                {!laptopMatches && (
                    <Dialog fullScreen open={openDialog}>

                        <Grid display={'flex'} alignItems={'center'} padding={'4px'}>
                            <IconButton onClick={backClick} sx={{ padding: '12px' }}>
                                <SvgIcon width="1.5rem" height="1.5rem" fill="currentColor" sx={{ color: 'grey.700' }}>
                                    <path d="M14.58 5.204a1.127 1.127 0 0 1 1.59 0l6 6 .028.028.022.025a.842.842 0 0 1 .041.05l.033.044.03.043.02.034a1.122 1.122 0 0 1 .002 1.14l-.024.039a.688.688 0 0 1-.065.091 1.046 1.046 0 0 1-.086.098l.059-.065a1.294 1.294 0 0 1-.039.043l-.02.022-6 6c-.22.22-.508.329-.796.329a1.127 1.127 0 0 1-.796-1.92l4.08-4.08H2.625a1.126 1.126 0 0 1-1.12-1.017L1.5 12c0-.621.504-1.125 1.125-1.125h16.034l-4.08-4.08a1.127 1.127 0 0 1-.077-1.505l.077-.086Z"></path></SvgIcon>
                            </IconButton>
                            <Typography>{pagesFaName[page]}</Typography>
                        </Grid>
                        <DialogContent sx={{padding: 0}}>
                            {/*<Grid>*/}

                                {(page === 0 || page === 1) &&

                                        <StyledToggleButtonGroup
                                            size="small"
                                            value={flightMode}
                                            exclusive
                                            onChange={handleFlightMode}
                                            aria-label="flight mode"
                                            fullWidth
                                            sx={{padding: 1}}
                                        >
                                            <ToggleButton value={0} aria-label="internal">
                                                <Typography fontWeight={600}>
                                                    پرواز داخلی
                                                </Typography>
                                            </ToggleButton>
                                            <ToggleButton value={1} aria-label="international">
                                                <Typography fontWeight={600}>
                                                    پرواز خارجی
                                                </Typography>
                                            </ToggleButton>
                                        </StyledToggleButtonGroup>

                                }
                                <SearchForm searches={searches} setSearches={setSearches} index={page} />
                                {GetPages(page)}
                            {/*</Grid>*/}
                        </DialogContent>
                    </Dialog>
                )}
                <Footer />
            </Grid>
        </Grid>
    )
}