import { filterd_TripData } from '../../data/tickets_data/DataTickets'
import { Box, Grid, Table, TableBody, TableCell, TableRow, Typography, SvgIcon, TableHead } from "@mui/material";
import { formType } from './Steps'
import styled from '@emotion/styled';


const keys = [
    ['مبدا', 'مقصد', 'تاریخ و ساعت حرکت', 'شرکت مسافربری', 'تعداد صندلی', 'قیمت هر صندلی', 'مشخصات پرواز'],
    ['مبدا', 'مقصد', 'تاریخ و ساعت حرکت', 'شرکت مسافربری', 'تعداد صندلی', 'قیمت هر صندلی', 'مشخصات پرواز'],
    ['مبدا', 'مقصد', 'تاریخ و ساعت حرکت', 'شرکت مسافربری', 'تعداد صندلی', 'قیمت هر صندلی', 'مشخصات قطار'],
    ['مبدا', 'مقصد', 'تاریخ و ساعت حرکت', 'شرکت مسافربری', 'تعداد صندلی', 'قیمت هر صندلی', 'مشخصات اتوبوس']
]

const SuccessSlider = styled(Grid)(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 32px',
    position: 'relative',
    marginBottom: '20px',
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        width: '4px',
        borderRadius: '0 5px 5px 0',
        backgroundColor: 'rgb(75,82,89)',
    }
}));



export default function Information(props: { res: boolean, forms: formType[], infomation: filterd_TripData | undefined, type_id: number, numPass: number }) {
    if (props.infomation) {
        return (
            <>
                <Box sx={{
                    maxWidth: {
                        xs: '100%',
                        md: '900px',
                        lg: '1200px'
                    },
                    marginX: 'auto',
                    paddingTop: '12px',
                    paddingBottom: '30px',
                    borderRadius: '8px',
                    backgroundColor: '#ffff',
                    //paddingBottom: '24px'
                }}>
                    <SuccessSlider>
                        <SvgIcon sx={{ width: '32px', height: '32px' }}>
                            <path d="M18.75 11.25H18a.75.75 0 1 1 0-1.5h.75a.75.75 0 1 1 0 1.5Zm0 3H18a.75.75 0 1 1 0-1.5h.75a.75.75 0 1 1 0 1.5ZM15 13.5a.75.75 0 1 1-1.5 0v-3a.75.75 0 1 1 1.5 0v3Zm-4.5-2.25H5.25a.75.75 0 1 1 0-1.5h5.25a.75.75 0 1 1 0 1.5Zm0 3H5.25a.75.75 0 1 1 0-1.5h5.25a.75.75 0 1 1 0 1.5Zm9.75-9.75h-3.098c-.68 0-1.266.461-1.455 1.149A1.504 1.504 0 0 1 14.25 6.75a1.504 1.504 0 0 1-1.447-1.103c-.19-.686-.775-1.147-1.456-1.147H3.75C2.51 4.5 1.5 5.51 1.5 6.75v10.5c0 1.24 1.01 2.25 2.25 2.25h7.598c.681 0 1.266-.461 1.455-1.15.179-.647.773-1.1 1.447-1.1s1.268.453 1.447 1.101c.189.688.774 1.149 1.456 1.149h3.097c1.24 0 2.25-1.01 2.25-2.25V6.75c0-1.24-1.01-2.25-2.25-2.25Z" fillRule="evenodd"></path>
                        </SvgIcon>
                        <Typography sx={{
                            color: '#4b5259',
                            fontSize: '18px',
                            fontWeight: '700',
                        }}>اطلاعات بلیط</Typography>
                    </SuccessSlider>
                    <Grid paddingX={'30px'}>
                        <Table aria-label="simple table" sx={{ borderRight: '1px solid', borderLeft: '1px solid', borderTop: '1px solid', borderColor: 'grey.200' }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">مبدا</TableCell>
                                    <TableCell align="center">{props.infomation.start_point_city}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">مقصد</TableCell>
                                    <TableCell align="center">{props.infomation.destination_city}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">تاریخ و ساعت حرکت</TableCell>
                                    <TableCell align="center">{`${props.infomation.departure_date.getFullYear()}/${props.infomation.departure_date.getMonth()}/${props.infomation.departure_date.getDay()} , ${props.infomation.departure_date.getHours()}:${props.infomation.departure_date.getMinutes()}`}</TableCell>
                                </TableRow>
                                {props.infomation.return_date && (
                                    <TableRow>
                                        <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">تاریخ و ساعت برگشت</TableCell>
                                        <TableCell align="center">{`${props.infomation.return_date.getFullYear()}/${props.infomation.return_date.getMonth()}/${props.infomation.return_date.getDay()} , ${props.infomation.return_date.getHours()}:${props.infomation.return_date.getMinutes()}`}</TableCell>
                                    </TableRow>
                                )}
                                <TableRow>
                                    <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">شرکت مسافربری</TableCell>
                                    <TableCell align="center">{props.infomation.company_name}</TableCell>
                                </TableRow>
                                {props.infomation.return_transport_company_name && (
                                    <TableRow>
                                        <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">شرکت مسافربری برگشت</TableCell>
                                        <TableCell align="center">{props.infomation.return_transport_company_name}</TableCell>
                                    </TableRow>
                                )}
                                <TableRow>
                                    <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">تعداد صندلی</TableCell>
                                    <TableCell align="center">{props.numPass}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">قیمت هر صندلی</TableCell>
                                    <TableCell align="center">{props.infomation.price}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">قیمت کل</TableCell>
                                    <TableCell align="center">{props.infomation.price * props.numPass}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ backgroundColor: 'grey.200', width: '20%' }} align="center">مشخصات سفر</TableCell>
                                    <TableCell align="center">{props.infomation.trip_des}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Box>
                <Box sx={{
                    maxWidth: {
                        xs: '100%',
                        md: '900px',
                        lg: '1200px'
                    },
                    marginX: 'auto',
                    paddingTop: '12px',
                    paddingBottom: '30px',
                    borderRadius: '8px',
                    backgroundColor: '#ffff',
                    //paddingBottom: '24px'
                }}>
                    <SuccessSlider>
                        <SvgIcon sx={{ width: '32px', height: '32px' }}>
                            <path d="M18.75 11.25H18a.75.75 0 1 1 0-1.5h.75a.75.75 0 1 1 0 1.5Zm0 3H18a.75.75 0 1 1 0-1.5h.75a.75.75 0 1 1 0 1.5ZM15 13.5a.75.75 0 1 1-1.5 0v-3a.75.75 0 1 1 1.5 0v3Zm-4.5-2.25H5.25a.75.75 0 1 1 0-1.5h5.25a.75.75 0 1 1 0 1.5Zm0 3H5.25a.75.75 0 1 1 0-1.5h5.25a.75.75 0 1 1 0 1.5Zm9.75-9.75h-3.098c-.68 0-1.266.461-1.455 1.149A1.504 1.504 0 0 1 14.25 6.75a1.504 1.504 0 0 1-1.447-1.103c-.19-.686-.775-1.147-1.456-1.147H3.75C2.51 4.5 1.5 5.51 1.5 6.75v10.5c0 1.24 1.01 2.25 2.25 2.25h7.598c.681 0 1.266-.461 1.455-1.15.179-.647.773-1.1 1.447-1.1s1.268.453 1.447 1.101c.189.688.774 1.149 1.456 1.149h3.097c1.24 0 2.25-1.01 2.25-2.25V6.75c0-1.24-1.01-2.25-2.25-2.25Z" fillRule="evenodd"></path>
                        </SvgIcon>
                        <Typography sx={{
                            color: '#4b5259',
                            fontSize: '18px',
                            fontWeight: '700',
                        }}>اطلاعات مسافرین</Typography>
                    </SuccessSlider>
                    <Grid paddingX={'30px'}>
                        <Table aria-label="simple table" sx={{ borderRight: '1px solid', borderLeft: '1px solid', borderTop: '1px solid', borderColor: 'grey.200' }}>
                            <TableBody>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">نام</TableCell>
                                        <TableCell align="center">نام خانوادگی</TableCell>
                                        <TableCell align="center">شماره ملی</TableCell>
                                        <TableCell align="center">شماره همراه</TableCell>
                                    </TableRow>
                                </TableHead>
                                {props.forms.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{item.firstName}</TableCell>
                                        <TableCell align="center">{item.lastName}</TableCell>
                                        <TableCell align="center">{item.idCode}</TableCell>
                                        <TableCell align="center">{item.phone}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Box>
            </>

        )
    }
    return (
        <Grid>
            Loading...
        </Grid>
    )
}