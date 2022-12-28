import { Button, Divider, Grid, SvgIcon, Typography } from "@mui/material";
import { getTicket, BusTicket_type,trainTicket_type } from "../../data/tickets_data/DataTickets";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from "next/image";
import { numberWithCommas } from "../../utils/functions/numberWithCommas";
import Link from "next/link";

export default function TrainTicket() {
    let expDate = new Date(1401, 3, 21)
    const returned_tickets: BusTicket_type[] | trainTicket_type[] | null = getTicket('train', expDate, 2);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    if (returned_tickets) {
        return (
            <>
                <Grid display={'flex'} direction='column'>
                    {returned_tickets.map((item, index) => (
                        <Grid key={index} container bgcolor={'white'} marginBottom={'20px'} borderRadius={1} width='100%'>
                            <Grid item xs={12} sm={9} padding={'16px 16px 16px 16px'} sx={{ border: '0px solid', borderRightWidth: { sm: '1px' }, borderBottomWidth:{xs:'1px',sm:'0px'} , borderColor: 'grey.200' }}>
                                <Grid>
                                    <Grid display={'flex'} direction={'column'}>
                                        <Grid display={'flex'} paddingBottom={'9px'}>
                                            <Grid paddingX={'12px'} sx={{ marginRight:{
                                                sm: '20px',
                                                xs : '10px'
                                            } }}>
                                                <Grid display={'flex'} direction={'column'} width={'fit-content'} padding={'8px'} border='1px solid' borderColor={'grey.400'} borderRadius='50%'><Image src={`${item.company_image}`} alt='logo' width={matches?38:22} height={matches?38:22} /></Grid>
                                            </Grid>
                                            <Grid display={'flex'} direction={'column'} gap={1} flexGrow='1'>
                                                <Grid display={matches? 'flex':'block'} alignItems='center'>
                                                    <Typography sx={{ color: "grey.500", fontSize: '14px' }}>{item.company_name}</Typography>
                                                </Grid>
                                                <Typography variant="h2" sx={{ color: "grey.700", fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>{item.train_des}</Typography>
                                                <Grid gap={2} display={matches?'flex':'none'} alignItems={'center'}>
                                                    <Typography variant="h2" sx={{ color: "grey.700", fontSize: matches ? '20px' : '18px', fontWeight: '700' }}>{`${item.ticketDate.getHours()}:${item.ticketDate.getMinutes()}`}</Typography>
                                                    <Typography sx={{ color: "grey.800", fontSize: '15px' }}>{item.start}</Typography>
                                                    <Grid display={'flex'} alignItems={'center'} sx={{ maxWidth: '150px', minWidth: '100px', flexGrow: '1' }}>
                                                        <SvgIcon sx={{ width: '14px', height: '14px', color: 'grey.400' }}><path d="M17.188 16.895a1.064 1.064 0 0 1 1.281.285l.065.088 3.408 5.114.062.112c.222.47.067 1.037-.37 1.329a1.061 1.061 0 0 1-1.406-.214l-.065-.088-3.408-5.114-.061-.112a1.056 1.056 0 0 1 .37-1.329l.124-.071Zm-10.52.241c.35-.386.933-.461 1.394-.153l.1.08c.352.32.448.837.22 1.283l-.057.094-3.41 5.113-.08.1c-.348.386-.93.46-1.368.17a1.061 1.061 0 0 1-.344-1.38l.057-.094 3.41-5.113.079-.1Zm2.07 4.363 7.663.001.116.009c.521.07.914.517.914 1.047 0 .536-.402.987-.958 1.05l-.11.006-7.663-.001-.116-.009a1.056 1.056 0 0 1-.914-1.046c0-.537.403-.988.958-1.052l.11-.005Zm1.699-3.86h4.238l.143.01c.52.07.913.516.913 1.046 0 .536-.402.987-.957 1.051l-.11.005H10.4l-.117-.01a1.056 1.056 0 0 1-.913-1.046c0-.536.402-.988.957-1.051l.11-.006ZM16.799 0a4.249 4.249 0 0 1 4.25 4.249v9.347a2.55 2.55 0 0 1-2.55 2.55H6.602a2.55 2.55 0 0 1-2.55-2.55V4.25A4.249 4.249 0 0 1 8.303 0H16.8ZM8.157 10.465h-.28a1.309 1.309 0 0 0 0 2.617h.28a1.309 1.309 0 1 0 0-2.617Zm9.16 0h-.28a1.309 1.309 0 1 0 0 2.617h.28a1.309 1.309 0 0 0 0-2.617ZM15.1 2.549H10l-.099.006a.85.85 0 0 0 .1 1.694H15.1l.099-.006a.85.85 0 0 0-.1-1.694Z" fill-rule="evenodd"></path></SvgIcon>
                                                        <Divider sx={{ border: '0 0 6px 0', borderColor: 'grey.400', flexGrow: '1' }} />
                                                        <Grid sx={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', margin: '0.5rem 1px 0.5rem 0', border: 'solid 1px', borderColor: 'grey.500' }} />
                                                    </Grid>
                                                    <Typography sx={{ color: "grey.800", fontSize: matches? '15px':'12px' }}>{item.destination}</Typography>
                                                    <Typography variant="h2" sx={{ color: "grey.700", fontSize: matches ? '20px' : '18px', fontWeight: '700' }}>15:15</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid display={matches ? 'flex' : 'none'}>
                                        <Link href={'#'}><Typography sx={{ padding: '8px 16px', color: 'secondary.main', fontSize: '11px', fontWeight: '700' }}>اطلاعات قطار</Typography></Link >
                                        <Link href={'#'}><Typography sx={{ padding: '8px 16px', color: 'secondary.main', fontSize: '11px', fontWeight: '700' }}> ایستگاه‌ها</Typography></Link >
                                        <Link href={'#'}><Typography sx={{ padding: '8px 16px', color: 'secondary.main', fontSize: '11px', fontWeight: '700' }}> قوانین استرداد</Typography></Link >
                                    </Grid>
                                    <Grid gap={2} display={matches?'none':'flex'} alignItems={'center'}>
                                        <Typography variant="h2" sx={{ color: "grey.700", fontSize: '20px', fontWeight: '700' }}>{`${item.ticketDate.getHours()}:${item.ticketDate.getMinutes()}`}</Typography>
                                        <Typography sx={{ color: "grey.800", fontSize: '15px' }}>{item.start}</Typography>
                                        <Grid display={'flex'} alignItems={'center'} sx={{ maxWidth: '150px', flexGrow: '1' }}>
                                            <SvgIcon sx={{ width: '14px', height: '14px', color: 'grey.400' }}><path d="M5.873 20.031c.212.095.462.15.729.15h2.773v.86c0 .749-.54 1.365-1.237 1.45l-.163.009h-.7c-.718 0-1.31-.563-1.39-1.288l-.01-.17-.002-1.01Zm12.252.123v.888c0 .748-.54 1.364-1.237 1.448l-.163.01h-.7c-.718 0-1.31-.563-1.39-1.288l-.01-.17v-.861h3.177l.163-.007c.055-.004.108-.011.16-.02ZM15.702 1.5a3.702 3.702 0 0 1 3.702 3.702L19.396 5h1.651c.778 0 1.418.604 1.478 1.374V9.68c0 .368-.41.727-.927.727-.473 0-.866-.324-.919-.648l-.009-.079v-3.2h-1.268l.002 10.57a2.221 2.221 0 0 1-2.007 2.21l-.214.01H6.817a2.221 2.221 0 0 1-2.22-2.22L4.596 6.48H3.355v3.2l-.009.079c-.052.324-.446.647-.918.647-.517 0-.928-.358-.928-.726V6.374C1.56 5.604 2.2 5 2.978 5h1.624a3.702 3.702 0 0 1 3.696-3.5h7.404Zm1.151 13.65h-1.931a.984.984 0 1 0 0 1.969h1.931a.984.984 0 0 0 0-1.969Zm-7.8 0H7.122a.984.984 0 1 0 0 1.969h1.931a.984.984 0 0 0 0-1.969Zm5.908-10.688H9.038l-.086.005a.74.74 0 0 0 .086 1.475h5.923l.087-.005a.74.74 0 0 0-.087-1.475Z" fill-rule="evenodd"></path></SvgIcon>
                                            <Divider sx={{ border: '0 0 6px 0', borderColor: 'grey.400', flexGrow: '1' }} />
                                            <Grid sx={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', margin: '0.5rem 1px 0.5rem 0', border: 'solid 1px', borderColor: 'grey.500' }} />
                                        </Grid>
                                        <Typography sx={{ color: "grey.800", fontSize: '15px' }}>{item.destination}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid gap={1} direction={matches ? 'column' : 'row-reverse'} justifyContent={matches ? 'center' : 'space-between'} xs={12} sm={3} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: {
                                    xs: '15px' ,
                                    sm : '30px 16px'
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
                                <Typography sx={{ color: item.Remaining_seats >= 10 ? 'GrayText' : 'red', fontSize: '11px', fontWeight: '500' }}>{item.Remaining_seats} صندلی باقی مانده</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </>
        )
    }
    return (<></>)
}