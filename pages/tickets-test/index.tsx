import { Grid } from "@mui/material";
import BusTicket from "../../components/ticket_cards/BusTicket";
import TrainTicket from "../../components/ticket_cards/TrainTicket";

export default function Home() {
    return (
        <Grid display={'flex'} direction={'row'} justifyContent={'center'} alignItems='center' width={'100vw'} height={'100vh'}>
            <Grid width={'1000px'} padding='10px'>
                <BusTicket />
                <TrainTicket/>
            </Grid>
        </Grid>
    )
}