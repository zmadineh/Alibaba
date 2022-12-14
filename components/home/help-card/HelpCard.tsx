import React from 'react'

//material
import Grid from '@mui/material/Grid';

//data
import { hlepCardData } from './../../../data/help-card-data';
import HelpCardItem from './HelpCardItem';



const HelpCard = (): JSX.Element => {

    return (
        <Grid container justifyContent={"center"} alignItems={"center"} marginBottom={3} >
            <Grid container item sx={{ border: 2, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', bgcolor: 'common.white', maxWidth: "1200px" }} bgcolor={"common.white"} p={2} gap={2} justifyContent={"center"} alignItems={"center"}>
                {hlepCardData.map(item => (<HelpCardItem item={item} key={item.id} />))}
            </Grid>
        </Grid >
    )
}

export default HelpCard