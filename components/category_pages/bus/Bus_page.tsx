import Questions from '../../common_questions/Quetions'
import BusDetails from "../../home/bus-page/BusDetails";

import {busTicketSectionData} from "../../../data/bus-page/busSections.data";

import Grid from "@mui/material/Grid";

export default function Bus_page() {
    return (
        <>
            <Grid><Questions category={'bus-ticket'}/></Grid>
            <BusDetails sections={busTicketSectionData} />
        </>
    )

}