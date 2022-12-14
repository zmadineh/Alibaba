import React from 'react'
// material ui
import Grid from '@mui/material/Grid';
import TrainItem from './TrainItem';
// data
import { trainCardDataOne } from '../../../../data/traincards/train-card-data';



const TrainCardOne = () => {

    return (
        <>
            <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3} >
                <Grid item container xs={12} sx={{ maxWidth: { md: '1200px' }, bgcolor: 'common.white' }} justifyContent={"center"} p={2}>
                    <Grid container item flexDirection={"row"} justifyContent={"space-between"} sx={{ overflowX: "auto" }} flexShrink={0} >
                        {/* pc */}
                        {trainCardDataOne.map(item => (
                            <Grid item key={item.id} md={item.width} borderRadius={"0.5rem"} flex-direction={"column"} overflow={"hidden"} flexWrap={"wrap"} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', display: { xs: "none", md: "flex" } }} flexShrink={0} height={550} >
                                <TrainItem item={item} />
                            </Grid>
                        ))}

                    </Grid>
                </Grid>

            </Grid >
            {/* mobile */}
            <Grid sx={{ overflowX: "scroll", display: { xs: "flex", md: "none" }, marginLeft: "1rem", width: { xs: 450, sm: 730 } }} gap={"1rem"}>
                {trainCardDataOne.map((item, index) => (
                    <Grid item key={index} width={"100%"} height={600} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }}  >
                        <TrainItem item={item} />
                    </Grid>

                ))}

            </Grid>
        </>
    )
}

export default TrainCardOne


