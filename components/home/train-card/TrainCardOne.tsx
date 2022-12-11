import React from 'react'
import Grid from '@mui/material/Grid';
import TrainItem from './TrainItem';
import { trainCardDataOne } from '../../../data/traincards/train-card-data-one';


const TrainCardOne = () => {

    return (
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3}>
            <Grid item container xs={12} sx={{ maxWidth: { md: '1200px' }, bgcolor: 'common.white' }} justifyContent={"center"} >
                <Grid container item flexDirection={"row"} justifyContent={"space-between"} sx={{ overflowX: "auto" }} flexShrink={0} >
                    {trainCardDataOne.map(item => (
                        <Grid item key={item.id} xs={3.9} display={"flex"} borderRadius={"0.5rem"} flex-direction={"column"} overflow={"hidden"} flexWrap={"wrap"} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }} flexShrink={0} >
                            <TrainItem item={item} />
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </Grid >
    )
}

export default TrainCardOne


