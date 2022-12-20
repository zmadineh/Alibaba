import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { GetPages } from '../components/get_pages_func/GetPages';
import Tabview from '../components/home/tabview/Tabview';
import HelpCard from './../components/home/help-card/HelpCard';
import DownloadCard from './../components/home/download-card/DownloadCard';
import FlightDetails from '../components/common/flight-details/FlightDetails'
import LayoutMobile from '../components/layout/layoutMobile/LayoutMobile'
import Footer from '../components/layout/Footer'
import SearchCardContainer from "../components/common/recent-searchs/SearchCardContainer";
import { searchFromValue } from "../model/searchFormValue.type";
import SearchForm from "../components/home/search-form/SearchForm";
import TabPanel from "../components/home/tabview/TabPanel";
import TrainDetails from './../components/home/train-card/TrainDetails';
import FilterSidebar from '../components/filter-Sidebar/FilterSidebar';

// const pages = {
//     0: 'inFlight',
//     1: 'outFlight',
//     2: 'train',
//     3: 'Bus',
//     4: 'tour'
// }

export default function FirstPage() {
    const [page, setPage] = useState(0);
    const [searches, setSearches] = useState<searchFromValue[]>([])

    return (

        <Grid>
            <FilterSidebar />
        </Grid>
    )

}