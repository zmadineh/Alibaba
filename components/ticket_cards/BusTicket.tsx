import { Divider, Grid, Stack } from "@mui/material";
import { getTicket, BusTicket_type } from "../../data/tickets_data/DataTickets";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from "next/image";

export default function BusTicket() {
    const returned_tickets: BusTicket_type[] | null = getTicket('bus', '1401/2/1', 2);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    if (returned_tickets) {
        return (
            <>
            <Stack>
                {returned_tickets.map((item,index) => (
                    <Grid container item bgcolor={'white'} marginBottom={'20px'} borderRadius={1}>
                    <Grid item xs={12} md={9} padding={'16px 16px 0px 16px'}>
                        <Grid>
                            <Stack>
                                <Grid paddingBottom={'9px'}>
                                    <Grid item md={1} paddingX={'12px'}>
                                        <Stack width={'fit-content'} padding={'8px'} border='1px solid' borderColor={'grey.400'} borderRadius='50%'><Image src={`${item.company_image}`} alt='logo' width={38} height={38}/></Stack>
                                    </Grid>
                                    <Grid item md={11} paddingX={'16px'}></Grid>
                                </Grid>
                            </Stack>
                            <Stack></Stack>
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem/>
                    <Grid item xs={12} md={3}></Grid>
                </Grid>
                ))}
            </Stack>
            </>
        )
    }
    return(<></>)
}