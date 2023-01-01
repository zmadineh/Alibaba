import { filterd_TripData } from '../../data/tickets_data/DataTickets'
import { Box, Grid, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { formType } from './Steps'
import styled from '@emotion/styled';


const SuccessSlider = styled(Grid)(({ theme }) => ({
    width: '100%',
    padding: '8px 32px',
    position: 'relative',
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

const handleBug = (a: [string, any][]): ReactNode => {
    console.log(a);
    a.map(([prop, val]) => console.log(prop ,typeof(val)))
    return(
        <></>
    )
    // return (
    //     <>
    //         {
    //             a.map(([prop, val]) =>
    //             (
    //                 <TableRow>
    //                     <TableCell align="right">{prop}</TableCell>
    //                     <TableCell align="right">{val}</TableCell>
    //                 </TableRow>
    //             )
    //             )
    //         }
    //     </>
    // )

}


export default function Information(props: { res: boolean, forms: formType[], infomation: filterd_TripData | undefined }) {
    if (props.infomation) {
        return (
            <Box sx={{
                maxWidth: {
                    xs: '100%',
                    md: '900px',
                    lg: '1200px'
                },
                marginX: 'auto',
                paddingY: '12px',
                borderRadius: '8px',
                backgroundColor: '#ffff',
                //paddingBottom: '24px'
            }}>
                <SuccessSlider>
                    <Typography sx={{
                        color: '#4b5259',
                        fontSize: '18px',
                        fontWeight: '700',
                    }}>اطلاعات بلیط</Typography>
                </SuccessSlider>
                <Table>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            {
                                handleBug(Object.entries(props.infomation))
                                //    Object.entries(props.infomation).map(([prop, val])=>
                                //     (
                                //         <TableRow>
                                //             <TableCell align="right">{prop}</TableCell>
                                //             <TableCell align="right">{val}</TableCell>
                                //         </TableRow>
                                //     )
                                // )
                            }
                        </TableBody>
                    </Table>
                </Table>
            </Box>
        )
    }
    return (
        <Grid>
            Loading...
        </Grid>
    )
}