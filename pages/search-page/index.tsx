import React, {useCallback, useState} from "react";
import Grid from "@mui/material/Grid";
import {useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import OrderingFilter from "../../components/common/ordering-filter/OrderingFilter";
import Typography from "@mui/material/Typography/Typography";
import {string} from "prop-types";


const orderingFilterTitleData = [
    {
        label: 'پیشنهاد علی بابا',
        filterLabel: 'alibaba_offer'
    },
    {
        label: 'زودترین',
        filterLabel: 'earliest_departure_time'
    },
    {
        label: 'دیرترین',
        filterLabel: 'latest_departure_time'
    },
    {
        label: 'گرانترین',
        filterLabel: 'highest_price'
    },
    {
        label: 'ارزان ترین',
        filterLabel: 'lowest_price'
    },
]

const defaultFilterValue = {
    orderFilterIndex: 0,
    allCompanies: true,
    companies: [],
    showAvailable: true,
    showDuplicate: false,
    shoppingType: 'all', // systematic or chartered or all
    priceRange: {min: 0, max: 1000000000},
    departureTime: {min: {hours: 0, minutes: 0}, max: {hours: 23, minutes: 59}},
    departureDate: new Date(),
}
/////////////////////////////////////////////////////////////////////////

interface priceRangeType {
    min: number,
    max: number,
}

interface timeRangeType {
    min: {hours: number, minutes: number},
    max: {hours: number, minutes: number},
}

interface SearchPageProps {
    transportTypeId: number
}

export default function SearchPage({transportTypeId} : SearchPageProps) {

    const headerHeight = 70;
    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));

    // states:
    // order ->
    const [orderFilterIndex, setOrderFilterIndex] = useState(defaultFilterValue.orderFilterIndex)

    // company ->
    const [allCompanies, setAllCompanies] = useState(defaultFilterValue.allCompanies)
    const [companies, setCompanies] = useState<string[]>(defaultFilterValue.companies)

    //  available tickets ->
    const [showAvailable, setShowAvailable] = useState(defaultFilterValue.showAvailable)

    // duplicate tickets ->
    const [showDuplicate, setShowDuplicate] = useState(defaultFilterValue.showDuplicate)

    // shopping type ->
    const [shoppingType, setShoppingType] = useState(defaultFilterValue.shoppingType) // systematic or chartered or all

    // price ->
    const [priceRange, setPriceRange] = useState<priceRangeType>(defaultFilterValue.priceRange)

    // departure time ->
    const [departureTime, setDepartureTime] = useState<timeRangeType>(defaultFilterValue.departureTime)

    // departure date ->
    const [departureDate, setDepartureDate] = useState<Date>(defaultFilterValue.departureDate)


    const resetFilters = useCallback(() => {
        setOrderFilterIndex(defaultFilterValue.orderFilterIndex)
        setAllCompanies(defaultFilterValue.allCompanies)
        setCompanies(defaultFilterValue.companies)
        setShowAvailable(defaultFilterValue.showAvailable)
        setShowDuplicate(defaultFilterValue.showDuplicate)
        setShoppingType(defaultFilterValue.shoppingType)
        setPriceRange(defaultFilterValue.priceRange)
        setDepartureTime(defaultFilterValue.departureTime)
        setDepartureDate(defaultFilterValue.departureDate)
    }, [])

    return (
        <Grid container flexDirection={"column"} alignItems={"center"} bgcolor={'background.default'}>
            <Grid item container bgcolor={"gray"} height={`${headerHeight}px`} position={"fixed"} top={0} zIndex={2000}>
                HEADER
                {/*--------------------------------------------------------*/}
            </Grid>

            <Grid item container
                  flexDirection={"column"}
                  width={'100%'}
                  sx={{maxWidth: {lg: '1200px', sm: '100%'}}}
                  mt={{xs: `${headerHeight}px`, sm: `${headerHeight+10}px`}}
                  alignItems={"center"}
            >
                <Grid item container width={'100%'} height={'100%'}
                      justifyContent={"center"}
                >
                    {!mobileMatch &&
                        <Grid item xs={12} sm={3} bgcolor={'blue'}>
                            <Grid position={"sticky"} top={`${headerHeight+10}px`} bottom={'100px'} bgcolor={'magenta'} height={'400px'}>
                                SIDE FILTER
                                {/*--------------------------------------------------------*/}
                            </Grid>
                        </Grid>
                    }

                    <Grid item container gap={1} pl={{xs: 0, sm: 1}} flexDirection={"column"} xs={12} sm={9}>
                        <Grid item height={'100px'} bgcolor={'yellow'}>
                            date
                            {/*--------------------------------------------------------*/}
                        </Grid>

                        {!mobileMatch &&
                            <Grid item display={"flex"} alignItems={"center"} gap={2}>

                                {!tabletMatch && <Typography fontSize={'14px'} fontWeight={'600'}>مرتب سازی: </Typography> }
                                <OrderingFilter value={orderFilterIndex} setValue={setOrderFilterIndex} inputs={orderingFilterTitleData}/>

                            </Grid>
                        }

                        <Grid item height={'800px'} bgcolor={'green'}>
                            tickets
                            {/*--------------------------------------------------------*/}
                        </Grid>
                    </Grid>
                </Grid>

                {!mobileMatch &&
                    <Grid item container width={'100%'} height={'700px'}
                          px={{xs: 0, sm: 1}} mt={1}
                          justifyContent={"center"} bgcolor={'purple'}
                    >
                        common questions
                        {/*--------------------------------------------------------*/}
                    </Grid>
                }
            </Grid>

            {/* desktop footer */}
            {!mobileMatch &&
                <Grid item container bgcolor={"gray"} minHeight={'60px'}>
                    footer
                    {/*--------------------------------------------------------*/}
                </Grid>
            }

            {/* mobile footer */}
            {mobileMatch &&
                <Grid item container bgcolor={'#fff'} height={'60px'} position={"fixed"} bottom={0}>
                    <Grid item display={"flex"} xs={6}>
                        <Grid item display={"flex"} justifyContent={"center"} alignItems={"center"} xs={6}>

                            <OrderingFilter value={orderFilterIndex} setValue={setOrderFilterIndex} inputs={orderingFilterTitleData}/>

                        </Grid>
                        <Grid item xs={6} bgcolor={'blue'}>
                            dialog filter
                            {/*--------------------------------------------------------*/}
                        </Grid>
                    </Grid>
                    <Grid item xs={6} bgcolor={'orange'}>
                        next and prev day
                    {/*--------------------------------------------------------*/}
                    </Grid>
                </Grid>
            }
        </Grid>
    );
}