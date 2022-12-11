import React from 'react'
import { trainCardDataTwo } from "../../../data/traincards/train-card-data-two"
import Grid from '@mui/material/Grid';
import TrainItem from './TrainItem';


const TrainCardTwo = () => {
    return (
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3}>
            <Grid item container xs={12} sx={{ maxWidth: { md: '1200px' }, bgcolor: 'common.white' }} justifyContent={"center"} >
                <Grid container xs={12} item flexDirection={"row"} justifyContent={"space-between"} sx={{ overflowX: "auto" }} flexShrink={0}>
                    {trainCardDataTwo.map(item => (
                        <Grid item xs={2.9} key={item.id} display={"flex"} borderRadius={"0.5rem"} flex-direction={"column"} overflow={"hidden"} flexWrap={"wrap"} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', }} >
                            <TrainItem item={item} />
                        </Grid>))}
                </Grid>

            </Grid>
        </Grid >
    )
}

export default TrainCardTwo