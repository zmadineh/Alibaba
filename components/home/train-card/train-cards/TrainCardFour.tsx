import React from 'react'
// material ui
import Grid from '@mui/material/Grid';
import TrainItem from './TrainItem';
// data
import { trainCardDataFive } from '../../../../data/traincards/train-card-data';



import Typography from '@mui/material/Typography';


const TrainCardFour = () => {
    return (
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3} >
            <Grid item container xs={12} sx={{ maxWidth: { md: '1200px' }, bgcolor: 'common.white' }} justifyContent={"center"} p={2}>
                <Grid sx={{ display: { xs: "none", md: "block" }, marginBottom: 3 }} item> <Typography sx={{ fontWeight: 700, px: 1, fontSize: 24 }} variant='h6'> مجله ی گردشگری</Typography></Grid>
                <Grid container item flexDirection={"row"} justifyContent={"space-between"} sx={{ overflowX: "auto" }} flexShrink={0} >
                    {trainCardDataFive.map(item => (
                        <Grid item key={item.id} md={item.width} borderRadius={"0.5rem"} flex-direction={"column"} overflow={"hidden"} flexWrap={"wrap"} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', display: { xs: "none", md: "flex" } }} flexShrink={0} height={450} >
                            <TrainItem item={item} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid >
    )
}

export default TrainCardFour