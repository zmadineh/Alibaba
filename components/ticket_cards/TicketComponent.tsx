import { Grid, SvgIcon, Typography, Divider, Button } from '@mui/material';
import { filterd_TripData } from '../../data/tickets_data/DataTickets';
import Image from "next/image";
import { numberWithCommas } from "../../utils/functions/numberWithCommas";
import TicketIcon from './TicketIcon';
import { useRouter } from "next/router";

export default function TicketComponent(props: { item: filterd_TripData, matches: boolean, tripType: number, numOfPass: number }) {
    const { item, matches, tripType, numOfPass } = props;
    const router = useRouter();
    const handleSelect = () => {
        router.push({
            pathname: '/confirmation',
            query: { trip: item.trip_id, numPass: numOfPass, type_id: tripType },
        })
    }
    return (
        <Grid container bgcolor={'white'} marginBottom={'20px'} borderRadius={1} width='100%' boxShadow={'0 2px 5px -1px rgba(0, 0, 0, .08)'} onClick={matches ? () => { } : handleSelect}>
            <Grid item xs={12} md={9} padding={'16px 16px 16px 16px'} sx={{ border: '0px solid', borderRightWidth: { md: '1px' }, borderBottomWidth: { xs: '1px', md: '0px' }, borderColor: 'grey.200' }}>
                <Grid container direction={'column'} gap={'15px'}>
                    <Grid display={'flex'}>
                        {item.company_Score && (
                            <Grid display={'flex'} marginRight='15px'>
                                <Typography sx={{ color: 'info.300', fontWeight: '700', fontSize: '12px' }}>5/</Typography>
                                <Typography sx={{ color: 'info.300', fontWeight: '700' }}>{item.company_Score}</Typography>
                            </Grid>
                        )}
                        {item.trip_des.length > 0 && (
                            <Grid display={'flex'} justifyContent={'flex-start'}>
                                {item.trip_des.map((des, index) => (
                                    <Typography key={index} variant="h2" sx={{ color: "grey.700", fontSize: '10px', fontWeight: '700', marginBottom: '8px', marginRight: '8px', backgroundColor: 'grey.200', padding: '8px', borderRadius: '10px' }}>{des}</Typography>
                                ))}
                            </Grid>
                        )}
                    </Grid>
                    
                    <Grid container gap={2} display={'flex'} alignItems={'center'} flexWrap={'nowrap'}>
                        <Grid item width={'auto'}>
                            <Grid container direction={'column'} alignItems={'center'} paddingX={'12px'} gap={'10px'} sx={{
                                marginRight: {
                                    md: '20px',
                                    xs: '10px'
                                }
                            }}>
                                <Grid container direction={'column'} width={'fit-content'} padding={'8px'} border='1px solid' borderColor={'grey.400'} borderRadius='50%'><Image src={`${item.company_image}`} alt='logo' width={matches ? 38 : 22} height={matches ? 38 : 22} /></Grid>
                                <Grid item>{item.company_name}</Grid>
                            </Grid>
                        </Grid>
                        <Grid item container maxWidth={'330px'} width={'100%'} display={'flex'} direction={'column'} gap={'15px'}>

                            <Grid item display={'flex'} width='100%' gap={'10px'} justifyContent={'space-between'} alignItems={'flex-start'}>
                                <Grid>
                                    <Typography sx={{ color: "grey.800", fontSize: '15px', marginBottom: '10px' }}>{item.start_point_city}</Typography>
                                    <Typography variant="h2" sx={{ color: "grey.700", fontSize: '20px', fontWeight: '700' }}>{`${item.departure_date.getHours()}:${item.departure_date.getMinutes()}`}</Typography>
                                </Grid>
                                <Grid display={'flex'} alignItems={'center'} sx={{ maxWidth: '150px', flexGrow: '1' }}>
                                    <SvgIcon sx={{ width: '14px', height: '14px', color: 'grey.400' }}><TicketIcon tripType={tripType} /></SvgIcon>
                                    <Divider sx={{ border: '0 0 6px 0', borderColor: 'grey.400', flexGrow: '1' }} />
                                    <Grid sx={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', margin: '0.5rem 1px 0.5rem 0', border: 'solid 1px', borderColor: 'grey.500' }} />
                                </Grid>
                                <Grid>
                                    <Typography sx={{ color: "grey.800", fontSize: '15px', marginBottom: '10px' }}>{item.destination_city}</Typography>
                                    {item.receive_date && (
                                        <Typography variant="h2" sx={{ color: "grey.700", fontSize: '20px', fontWeight: '700' }}>{`${item.receive_date.getHours()}:${item.receive_date.getMinutes()}`}</Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {item.return_date && (
                        <Grid container gap={2} display={'flex'} alignItems={'center'} flexWrap={'nowrap'}>
                            <Grid item width={'auto'}>
                                <Grid container direction={'column'} alignItems={'center'} paddingX={'12px'} gap={'10px'} sx={{
                                    marginRight: {
                                        md: '20px',
                                        xs: '10px'
                                    }
                                }}>
                                    <Grid item container direction={'column'} width={'fit-content'} padding={'8px'} border='1px solid' borderColor={'grey.400'} borderRadius='50%'><Image src={`${item.return_transport_company_image}`} alt='logo' width={matches ? 38 : 22} height={matches ? 38 : 22} /></Grid>
                                    <Grid item>{item.return_transport_company_name}</Grid>
                                </Grid>
                            </Grid>
                            <Grid item container maxWidth={'330px'} width={'100%'} display={'flex'} direction={'column'} gap={'15px'}>

                                <Grid item display={'flex'} width='100%' gap={'10px'} justifyContent={'space-between'} alignItems={'flex-start'}>
                                    <Grid>
                                        <Typography sx={{ color: "grey.800", fontSize: '15px', marginBottom: '10px' }}>{item.destination_city}</Typography>
                                        <Typography variant="h2" sx={{ color: "grey.700", fontSize: '20px', fontWeight: '700' }}>{`${item.return_date.getHours()}:${item.return_date.getMinutes()}`}</Typography>
                                    </Grid>
                                    <Grid display={'flex'} alignItems={'center'} sx={{ maxWidth: '150px', flexGrow: '1' }}>
                                        <SvgIcon sx={{ width: '14px', height: '14px', color: 'grey.400' }}><TicketIcon tripType={tripType} /></SvgIcon>
                                        <Divider sx={{ border: '0 0 6px 0', borderColor: 'grey.400', flexGrow: '1' }} />
                                        <Grid sx={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', margin: '0.5rem 1px 0.5rem 0', border: 'solid 1px', borderColor: 'grey.500' }} />
                                    </Grid>
                                    <Grid>
                                        <Typography sx={{ color: "grey.800", fontSize: '15px', marginBottom: '10px' }}>{item.start_point_city}</Typography>
                                        {item.return_receive_date && (
                                            <Typography variant="h2" sx={{ color: "grey.700", fontSize: '20px', fontWeight: '700' }}>{`${item.return_receive_date.getHours()}:${item.return_receive_date.getMinutes()}`}</Typography>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid container item gap={1} direction={matches ? 'column' : 'row-reverse'} justifyContent={matches ? 'center' : 'space-between'} xs={12} md={3} sx={{
                alignItems: 'center',
                padding: {
                    xs: '15px',
                    md: '30px 16px'
                },
                minWidth: {
                    lg: '200px',
                    md: '180px'
                }
            }}>
                <Grid gap={1} sx={{
                    display: 'flex',
                    direction: 'row',
                    alignItems: 'center',

                }}>
                    <Typography sx={{ fontWeight: '700', fontSize: '20px', color: 'secondary.main' }}>{numberWithCommas(item.price)}</Typography>
                    <Typography sx={{ color: 'grey.600', fontSize: '13px' }}>ریال</Typography>
                </Grid>
                <Button variant="contained" color='secondary' onClick={handleSelect} disableElevation sx={{ fontSize: '.875rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '150px', display: { xs: 'none', md: 'block' } }}>انتخاب بلیط</Button>
                <Typography sx={{ color: item.remaining_seats >= 10 ? 'GrayText' : 'red', fontSize: '11px', fontWeight: '500' }}>{item.remaining_seats} صندلی باقی مانده</Typography>
            </Grid>
        </Grid>

    )
}