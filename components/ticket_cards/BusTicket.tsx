import { Stack } from "@mui/material";
import { getTicket,BusTicket_type } from "../../data/tickets_data/DataTickets";

export default function BusTicket(){
    const returned_tickets:BusTicket_type[]|null = getTicket('bus','1401/2/1',2);
    if(returned_tickets){
        <Stack>
            {returned_tickets.map((item)=>(
                <Stack>{item.company_name}</Stack>
            ))}
        </Stack>
    }
}