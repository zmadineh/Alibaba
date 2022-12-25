import { Grid } from "@mui/material";
import BusTicket from "../../components/ticket_cards/BusTicket";
import TrainTicket from "../../components/ticket_cards/TrainTicket";
import TicketContainer from "../../components/ticket_cards/TicketContainer";
import { getTicket } from "../../data/tickets_data/DataTickets";
import { filterd_TripData } from "../../data/tickets_data/DataTickets";

export default function Home() {
    let filteredData : filterd_TripData[] = [
        {
            departure_date: new Date(1401, 3, 24, 18, 26),
            company_name: 'چابک سواران',
            company_Score: 4.4,
            company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
            trip_des: ['ماهانVIP(مانیتورشخصی)'],
            start_point_city: 'اصفهان',
            destination_city: 'تهران',
            Remaining_seats: 10,
            price: 1220000,
        },
        {
            departure_date: new Date(1401, 5, 3, 6, 2),
            company_name: 'چابک سواران',
            company_Score: 4.4,
            company_image: 'https://cdn.alibaba.ir/static/img/bus/HMSFR.jpg',
            trip_des: ['ماهانVIP(مانیتورشخصی)','اکونومی'],
            start_point_city: 'اصفهان',
            destination_city: 'تهران',
            receive_date : new Date(1401, 5, 25, 17, 20),
            Remaining_seats: 10,
            price: 1320000
        },
    ]
    return (
        <Grid display={'flex'} direction={'row'} justifyContent={'center'} alignItems='center' width={'100vw'} height={'100vh'}>
            <Grid width={'1000px'} padding='10px'>
                <TicketContainer filteredData={filteredData} tripType={1}/>
            </Grid>
        </Grid>
    )
}