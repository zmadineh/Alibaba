import { Grid, SvgIcon, Typography, Divider, Button } from '@mui/material';
import Link from 'next/link';
import { filterd_TripData } from '../../data/tickets_data/DataTickets';
import Image from "next/image";
import { numberWithCommas } from "../../utils/functions/numberWithCommas";
import TicketIcon from './TicketIcon';

export default function TicketComponent(props: { item: filterd_TripData, matches: boolean,tripType:number }) {
    const { item, matches,tripType } = props;
    return (
        <Grid container bgcolor={'white'} marginBottom={'20px'} borderRadius={1} width='100%' boxShadow={'0 2px 5px -1px rgba(0, 0, 0, .08)'}>
            <Grid item xs={12} sm={9} padding={'16px 16px 16px 16px'} sx={{ border: '0px solid', borderRightWidth: { sm: '1px' }, borderBottomWidth: { xs: '1px', sm: '0px' }, borderColor: 'grey.200' }}>
                <Grid>
                    <Grid container direction={'column'}>
                        <Grid display={'flex'} paddingBottom={'9px'}>
                            <Grid paddingX={'12px'} sx={{
                                marginRight: {
                                    sm: '20px',
                                    xs: '10px'
                                }
                            }}>
                                <Grid container direction={'column'} width={'fit-content'} padding={'8px'} border='1px solid' borderColor={'grey.400'} borderRadius='50%'><Image src={`${item.company_image}`} alt='logo' width={matches ? 38 : 22} height={matches ? 38 : 22} /></Grid>
                            </Grid>
                            <Grid container direction={'column'} gap={1} flexGrow='1'>
                                <Grid display={matches ? 'flex' : 'block'} alignItems='center'>

                                    {item.company_Score && (
                                        <Grid display={'flex'} marginRight='15px'>
                                            <Typography sx={{ color: 'info.300', fontWeight: '700', fontSize: '12px' }}>5/</Typography>
                                            <Typography sx={{ color: 'info.300', fontWeight: '700' }}>{item.company_Score}</Typography>
                                        </Grid>
                                    )}
                                    <Typography sx={{ color: "grey.500", fontSize: '14px' }}>{item.company_name}</Typography>
                                </Grid>
                                <Grid display={'flex'}>
                                    {item.trip_des.map((des, index) => (
                                        <Typography key={index} variant="h2" sx={{ color: "grey.700", fontSize: '9px', fontWeight: '700', marginBottom: '8px', marginLeft: '8px', backgroundColor: 'grey.200', padding: '8px', borderRadius: '10px' }}>{des}</Typography>
                                    ))}
                                </Grid>
                                <Grid gap={2} display={matches ? 'flex' : 'none'} alignItems={'center'}>
                                    <Typography variant="h2" sx={{ color: "grey.700", fontSize: matches ? '20px' : '18px', fontWeight: '700' }}>{`${item.departure_date.getHours()}:${item.departure_date.getMinutes()}`}</Typography>
                                    <Typography sx={{ color: "grey.800", fontSize: '15px' }}>{item.start_point_city}</Typography>
                                    <Grid display={'flex'} alignItems={'center'} sx={{ maxWidth: '150px', minWidth: '100px', flexGrow: '1' }}>
                                        <SvgIcon sx={{ width: '14px', height: '14px', color: 'grey.400' }}>
                                            <TicketIcon tripType={tripType} />
                                        </SvgIcon>
                                        <Divider sx={{ border: '0 0 6px 0', borderColor: 'grey.400', flexGrow: '1' }} />
                                        <Grid sx={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', margin: '0.5rem 1px 0.5rem 0', border: 'solid 1px', borderColor: 'grey.500' }} />
                                    </Grid>
                                    {item.receive_date && (
                                        <Typography variant="h2" sx={{ color: "grey.700", fontSize: matches ? '20px' : '18px', fontWeight: '700' }}>{`${item.receive_date.getHours()}:${item.receive_date.getMinutes()}`}</Typography>
                                    )}
                                    <Typography sx={{ color: "grey.800", fontSize: matches ? '15px' : '12px' }}>{item.destination_city}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid display={matches ? 'flex' : 'none'}>
                        {/* <Link href={'#'}><Typography sx={{ padding: '8px 16px', color: 'secondary.main', fontSize: '11px', fontWeight: '700' }}>نقشه صندلی ها</Typography></Link >
                        <Link href={'#'}><Typography sx={{ padding: '8px 16px', color: 'secondary.main', fontSize: '11px', fontWeight: '700' }}>اطلاعات اتوبوس و سفر</Typography></Link >
                        <Link href={'#'}><Typography sx={{ padding: '8px 16px', color: 'secondary.main', fontSize: '11px', fontWeight: '700' }}>قوانین جریمه و استرداد</Typography></Link > */}
                    </Grid>
                    <Grid gap={2} display={matches ? 'none' : 'flex'} alignItems={'center'}>
                        <Typography variant="h2" sx={{ color: "grey.700", fontSize: '20px', fontWeight: '700' }}>{`${item.departure_date.getHours()}:${item.departure_date.getMinutes()}`}</Typography>
                        <Typography sx={{ color: "grey.800", fontSize: '15px' }}>{item.start_point_city}</Typography>
                        <Grid display={'flex'} alignItems={'center'} sx={{ maxWidth: '150px', flexGrow: '1' }}>
                            <SvgIcon sx={{ width: '14px', height: '14px', color: 'grey.400' }}><path d="M5.873 20.031c.212.095.462.15.729.15h2.773v.86c0 .749-.54 1.365-1.237 1.45l-.163.009h-.7c-.718 0-1.31-.563-1.39-1.288l-.01-.17-.002-1.01Zm12.252.123v.888c0 .748-.54 1.364-1.237 1.448l-.163.01h-.7c-.718 0-1.31-.563-1.39-1.288l-.01-.17v-.861h3.177l.163-.007c.055-.004.108-.011.16-.02ZM15.702 1.5a3.702 3.702 0 0 1 3.702 3.702L19.396 5h1.651c.778 0 1.418.604 1.478 1.374V9.68c0 .368-.41.727-.927.727-.473 0-.866-.324-.919-.648l-.009-.079v-3.2h-1.268l.002 10.57a2.221 2.221 0 0 1-2.007 2.21l-.214.01H6.817a2.221 2.221 0 0 1-2.22-2.22L4.596 6.48H3.355v3.2l-.009.079c-.052.324-.446.647-.918.647-.517 0-.928-.358-.928-.726V6.374C1.56 5.604 2.2 5 2.978 5h1.624a3.702 3.702 0 0 1 3.696-3.5h7.404Zm1.151 13.65h-1.931a.984.984 0 1 0 0 1.969h1.931a.984.984 0 0 0 0-1.969Zm-7.8 0H7.122a.984.984 0 1 0 0 1.969h1.931a.984.984 0 0 0 0-1.969Zm5.908-10.688H9.038l-.086.005a.74.74 0 0 0 .086 1.475h5.923l.087-.005a.74.74 0 0 0-.087-1.475Z" fillRule="evenodd"></path></SvgIcon>
                            <Divider sx={{ border: '0 0 6px 0', borderColor: 'grey.400', flexGrow: '1' }} />
                            <Grid sx={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', margin: '0.5rem 1px 0.5rem 0', border: 'solid 1px', borderColor: 'grey.500' }} />
                        </Grid>
                        <Typography sx={{ color: "grey.800", fontSize: '15px' }}>{item.destination_city}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item gap={1} direction={matches ? 'column' : 'row-reverse'} justifyContent={matches ? 'center' : 'space-between'} xs={12} sm={3} sx={{
                alignItems: 'center',
                padding: {
                    xs: '15px',
                    sm: '30px 16px'
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
                <Button variant="contained" color='secondary' disableElevation sx={{ fontSize: '.875rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '150px', display: { xs: 'none', sm: 'block' } }}>انتخاب بلیط</Button>
                <Typography sx={{ color: item.remaining_seats >= 10 ? 'GrayText' : 'red', fontSize: '11px', fontWeight: '500' }}>{item.remaining_seats} صندلی باقی مانده</Typography>
            </Grid>
        </Grid>

    )


}