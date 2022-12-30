import { Grid } from "@mui/material";
import TicketContainer from "../../components/ticket_cards/TicketContainer";
import { getCompanies_type, getTicket } from "../../data/database/trips.data";
import { filterd_TripData } from "../../data/tickets_data/DataTickets";
import { useEffect, useState } from "react";

export default function Home() {
    const [tickets,setTickets] = useState<filterd_TripData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const data = await getTicket(1,2,0,2,new Date(1401, 9, 29, 11, 23, 0),new Date(1401, 9, 30, 12, 2, 34)).then();
          setTickets(data);
        }
        fetchData()
          .catch(console.error);
      }, [])

    return (
        <Grid container direction={'row'} justifyContent={'center'} alignItems='center' width={'100vw'} height={'100vh'}>
            <Grid width={'1000px'} padding='10px'>
                <TicketContainer filteredData={tickets} tripType={1}/>
            </Grid>
        </Grid>
    )
}