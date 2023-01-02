import React, {useCallback, useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

import OrderingFilter from "../../components/common/ordering-filter/OrderingFilter";
import FilterSidebar from "../../components/filter-Sidebar/FilterSidebar";
import DateFilter from "../../components/common/date-filter/DateFilter";
import TicketContainer from "../../components/ticket_cards/TicketContainer";
import Footer from "../../components/layout/Footer";
import Desk_header from "../../components/desktop_header/Desk_header";

import {getLocationByType, getTicket} from "../../data/database/trips.data";
import {orderingFilterTitleData} from "../../data/filters/orderingFilter.data";
import {filterd_TripData} from "../../data/tickets_data/DataTickets";

import {priceRangeType, shoppingObjType} from "../../model/filter/filterStateType";
import {timeRangeType} from "../../model/filter/filterStateType";

import Grid from "@mui/material/Grid";
import {useTheme} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";


const defaultFilterValue = {
    orderFilterIndex: 0,
    allCompanies: true,
    companies: [],
    showAvailable: true,
    shoppingType: {systematic: false, chartered: false},
    priceRange: {min: 0, max: 1000000000},
    departureTime: {min: {hours: 0, minutes: 0}, max: {hours: 23, minutes: 59}},
    departureDate: new Date()
}

const headerHeight = 70;

export default function SearchPage() {

    //--------------------------------------------------------------------------------------------//

    const router = useRouter()
    const {  transportType,
        currStartPoint,
        currDestinationPoint,
        currDepartureDate,
        returnDate,
        roundWay,
        adultCount,
        childCount,
        babyCount } = router.query


    const transportTypeId = Number(transportType);
    const currDepartureDate_  = (currDepartureDate ? new Date(currDepartureDate.toString()) : new Date());
    const returnDate_  = (returnDate ? new Date(returnDate.toString()) : new Date());
    const travelerCount = Number(adultCount) + Number(childCount) + Number(babyCount)
    const startPoint = currStartPoint;
    const destination = currDestinationPoint;

    //--------------------------------------------------------------------------------------------//


    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));
    const desktopMatches = useMediaQuery(theme.breakpoints.up('sm'));

    // states:
    // order ->
    const [orderFilterIndex, setOrderFilterIndex] = useState(defaultFilterValue.orderFilterIndex)

    // company ->
    const [allCompanies, setAllCompanies] = useState(defaultFilterValue.allCompanies)
    const [companies, setCompanies] = useState<number[]>(defaultFilterValue.companies)

    //  available tickets ->
    const [showAvailable, setShowAvailable] = useState(defaultFilterValue.showAvailable) // remaining_seats > 0

    // shopping type ->
    const [shoppingType, setShoppingType] = useState<shoppingObjType>(defaultFilterValue.shoppingType) // systematic or chartered or all

    // price ->
    const [priceRange, setPriceRange] = useState<priceRangeType>(defaultFilterValue.priceRange)

    // departure time ->
    const [departureTime, setDepartureTime] = useState<timeRangeType>(defaultFilterValue.departureTime)

    // departure date ->
    const [departureDate, setDepartureDate] = useState<Date>(currDepartureDate_)

    // trips ->
    const [currentTrips, setCurrentTrips] = useState<filterd_TripData[]>([])

    // loading ->
    const [loadingTicket, setLoadingTicket] = useState(true)

    // defaultPriceRange ->
    const [defaultPriceRange, setDefaultPriceRange] = useState<priceRangeType>(defaultFilterValue.priceRange)


    useEffect( () => {

        const fetchData = async () => {
            const startPointId = await getLocationByType(transportTypeId, (startPoint ? startPoint : ''));
            const destPointId = await getLocationByType(transportTypeId, (destination ? destination : ''));

             const data = await getTicket(
                    startPointId,
                    destPointId,
                    transportTypeId,
                    travelerCount,
                    currDepartureDate_,
                    // (roundWay === 'true' ? returnDate_ : undefined),
                );

            setCurrentTrips(data)
            setLoadingTicket(false)
            const baseTripsPrice = data.map(item => item.price).sort((a, b) => a - b)
            const tripsLength = baseTripsPrice.length
            if(tripsLength > 0)
                setDefaultPriceRange({min: (baseTripsPrice[0]-100 > 0 ? baseTripsPrice[0]-100 : 0), max: baseTripsPrice[tripsLength-1]+100})
        }

        // console.log('useEffect')
        fetchData().catch(console.error);

    }, [departureDate, startPoint, destination])


    const resetFilters = useCallback(() => {
        setOrderFilterIndex(defaultFilterValue.orderFilterIndex)
        setAllCompanies(defaultFilterValue.allCompanies)
        setCompanies(defaultFilterValue.companies)
        setShowAvailable(defaultFilterValue.showAvailable)
        setShoppingType(defaultFilterValue.shoppingType)
        setPriceRange(defaultPriceRange)
        setDepartureTime(defaultFilterValue.departureTime)
        // setDepartureDate(defaultFilterValue.departureDate)
    }, [])

    const shoppingCheck = () => {
        if (!((shoppingType.systematic && shoppingType.chartered) || (!shoppingType.systematic && !shoppingType.chartered))) {
            if (shoppingType.systematic)
                return 'systematic'
            else if (shoppingType.chartered)
                return 'chartered'
        }
        else return 'all'
    }

    const filter = useCallback(() => {
        // console.log('filter');

        let filteredData = currentTrips
        if (filteredData.length > 0) {

            filteredData = filteredData.filter(data =>

                data.start_point_city === startPoint &&
                data.destination_city === destination &&

                data.price >= priceRange.min &&
                data.price <= priceRange.max &&

                data.departure_date.getFullYear() === departureDate.getFullYear() &&
                data.departure_date.getMonth() === departureDate.getMonth() &&
                data.departure_date.getDay() === departureDate.getDay() &&

                (data.departure_date.getHours() > departureTime.min.hours ||
                    (data.departure_date.getHours() === departureTime.min.hours &&
                        data.departure_date.getMinutes() > departureTime.min.minutes)) &&
                (data.departure_date.getHours() < departureTime.max.hours ||
                    (data.departure_date.getHours() === departureTime.max.hours &&
                        data.departure_date.getMinutes() < departureTime.max.minutes)) &&

                (shoppingCheck() !== 'all' ? data.shopping_type === shoppingCheck() : true) &&

                (showAvailable ? data.remaining_seats > 0 : true) &&  // available tickets

                (companies.length === 0 ? true : companies.includes(data.transport_company_id))  // reset to all when none of companies selected
            );

            if (orderingFilterTitleData[orderFilterIndex].filterLabel === 'earliest_departure_time')
                filteredData = filteredData.sort((a,b) => (a.departure_date.getHours() - b.departure_date.getHours()))

            else if (orderingFilterTitleData[orderFilterIndex].filterLabel === 'latest_departure_time')
                filteredData = filteredData.sort((a,b) => (b.departure_date.getHours() - a.departure_date.getHours()))

            else if (orderingFilterTitleData[orderFilterIndex].filterLabel === 'highest_price')
                filteredData = filteredData.sort((a,b) => (b.price - a.price))

            else if (orderingFilterTitleData[orderFilterIndex].filterLabel === 'lowest_price')
                filteredData = filteredData.sort((a,b) =>  (a.price - b.price))
        }

        return filteredData
    } , [currentTrips, orderFilterIndex, departureDate, departureTime, companies, shoppingType, priceRange])

    const nextDay = () => {
        let tomorrow = new Date(departureDate);
        tomorrow.setDate(departureDate.getDate() + 1)
        setDepartureDate(tomorrow)
    }

    const prevDay = () => {
        let prev = new Date(departureDate);
        prev.setDate(departureDate.getDate() - 1)
        setDepartureDate(prev)
    }


    const stateProps = {
        allCompanies,
        setAllCompanies,
        companies,
        setCompanies,
        showAvailable,
        setShowAvailable,
        shoppingType,
        setShoppingType,
        priceRange,
        setPriceRange,
        departureTime,
        setDepartureTime,
        transportTypeId,
        defaultPriceRange,
    }

    return (
        <Grid container flexDirection={"column"} alignItems={"center"} bgcolor={'background.default'}>
            {!mobileMatch &&
                <Grid item container height={`${headerHeight}px`} position={"fixed"} top={0} zIndex={2000}>
                    <Desk_header res={desktopMatches}/>
                </Grid>
            }

            {mobileMatch &&
                <Grid item container alignItems={"center"} bgcolor={'#fff'} height={`${headerHeight}px`} position={"fixed"} top={0} zIndex={2000}>
                    <Link href={'/'}>
                        <Grid display={"flex"} alignItems={"center"}>
                            <IconButton>
                                <ArrowForwardIos />
                            </IconButton>
                            <Typography>
                                صفحه اصلی
                            </Typography>
                        </Grid>
                    </Link>
                </Grid>
            }

            <Grid item container
                  flexDirection={"column"}
                  width={'100%'}
                  sx={{maxWidth: {lg: '1200px', sm: '100%'}}}
                  mt={{xs: `${headerHeight+20}px`, sm: `${headerHeight+20}px`}}
                  alignItems={"center"}
            >
                <Grid item container width={'100%'} height={'100%'}
                      justifyContent={"center"}
                >
                    {!mobileMatch && !tabletMatch &&
                        <Grid item xs={12} sm={4} md={3}>
                            <Grid position={"sticky"} top={`${headerHeight+10}px`} bottom={'100px'}>
                                <FilterSidebar
                                    filterStateProps={stateProps}
                                    travelType={transportTypeId}
                                    resetFunction={resetFilters}
                                    ticketCount={filter().length}
                                />
                            </Grid>
                        </Grid>
                    }

                    <Grid item container gap={1} pl={{xs: 0, sm: 1}} flexDirection={"column"} xs={12} md={9}>
                        <Grid item container height={'100px'}>
                            <DateFilter departureDate={departureDate} setDepartureDate={setDepartureDate}/>
                        </Grid>

                        {!mobileMatch &&
                            <Grid item display={"flex"} alignItems={"center"} gap={2}>

                                {tabletMatch &&
                                    <Box maxWidth={'130px'}>
                                        <FilterSidebar
                                            filterStateProps={stateProps}
                                            travelType={transportTypeId}
                                            resetFunction={resetFilters}
                                            ticketCount={filter().length}
                                        />
                                    </Box>
                                }
                                {!tabletMatch && <Typography fontSize={'14px'} fontWeight={'600'}>مرتب سازی: </Typography> }
                                <OrderingFilter value={orderFilterIndex} setValue={setOrderFilterIndex} inputs={orderingFilterTitleData}/>

                            </Grid>
                        }

                        <Grid item container minHeight={'500px'}>
                            {loadingTicket &&
                                <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Typography>
                                        ... loading
                                    </Typography>
                                </Grid>
                            }
                            {!loadingTicket &&
                                <TicketContainer filteredData={filter()} tripType={transportTypeId} numOfPass={travelerCount}/>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* desktop footer */}
            {!mobileMatch &&
                <Footer />
            }

            {/* mobile footer */}
            {mobileMatch &&
                <Grid item container bgcolor={'#fff'} height={'60px'} position={"fixed"} bottom={0}>
                    <Grid item display={"flex"} xs={6}>
                        <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"} xs={6}>

                            <OrderingFilter value={orderFilterIndex} setValue={setOrderFilterIndex} inputs={orderingFilterTitleData}/>

                        </Grid>
                        <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"} xs={6}>
                            <FilterSidebar
                                filterStateProps={stateProps}
                                travelType={transportTypeId}
                                resetFunction={resetFilters}
                                ticketCount={filter().length}
                            />
                        </Grid>
                    </Grid>

                    <Grid item display={"flex"} alignItems={"center"} justifyContent={"center"} gap={2.5} xs={6}>
                        <Grid display={"flex"} alignItems={"center"} onClick={prevDay}>
                            <IconButton>
                                <ArrowForwardIos />
                            </IconButton>
                            <Typography fontWeight={600} color={'grey.600'}>
                                روز قبل
                            </Typography>
                        </Grid>
                        <Grid display={"flex"} alignItems={"center"} onClick={nextDay}>
                            <Typography fontWeight={600} color={'grey.600'}>
                                روز بعد
                            </Typography>
                            <IconButton>
                                <ArrowBackIos />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Grid>
    );
}