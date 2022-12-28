import { Grid, Typography } from "@mui/material";
import { filterd_TripData } from "../../data/tickets_data/DataTickets";
import TicketComponent from "./TicketComponent";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function TicketContainer(props: { filteredData: filterd_TripData[], tripType: number }) {
    const { filteredData, tripType } = props;
    if (filteredData.length != 0) {
        const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.up('sm'));
        return (
            <>
                <Grid display={'flex'} direction='column'>
                    {filteredData.map((item, index) => (
                        <TicketComponent item={item} matches={matches} key={index} tripType={tripType}/>
                    ))}
                </Grid>
            </>
        )
    }
    return (
        <Grid>
            <Typography>متاسفانه برای بازه مورد نظر بلیطی یافت نشد</Typography>
        </Grid>
    )
}
