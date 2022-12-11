import React from 'react'
import Grid from '@mui/material/Grid';
import TrainItem from './TrainItem';
import { trainCardDataOne } from '../../../data/traincards/train-card-data-one';


const TrainCard = () => {

    return (
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3}>
            <Grid item container xs={12} sx={{ maxWidth: { md: '1200px' }, bgcolor: 'common.white' }} justifyContent={"center"} >
                <Grid container xs={12} item flexDirection={"row"} justifyContent={"space-between"} sx={{ overflowX: "auto" }} flexShrink={0}>
                    {trainCardDataOne.map(item => (<TrainItem item={item} key={item.id} />))}
                </Grid>

            </Grid>
        </Grid >
    )
}

export default TrainCard


