import { Grid, Typography } from "@mui/material";
import { filterd_TripData } from "../../data/tickets_data/DataTickets";
import TicketComponent from "./TicketComponent";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function TicketContainer(props: { filteredData: filterd_TripData[], tripType: number,numOfPass:number }) {
    const { filteredData, tripType,numOfPass } = props;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    if (filteredData.length != 0) {
        return (
            <Grid item container flexDirection='column'>
                {filteredData.map((item, index) => (
                    <TicketComponent item={item} matches={matches} key={index} tripType={tripType} numOfPass={numOfPass}/>
                ))}
            </Grid>
        )
    }
    return (
        <Grid>
            <Typography>متاسفانه برای بازه مورد نظر بلیطی یافت نشد</Typography>
        </Grid>
    )
}
