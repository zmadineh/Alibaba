import React from 'react'
// material ui
import Grid from '@mui/material/Grid';

// data

import TrainItem from './TrainItem';
import { trainCardDataThree } from './../../../../data/traincards/train-card-data';



const TrainCardThree = () => {
    return (
        <>
            <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3}>
                <Grid item container xs={12} sx={{ maxWidth: { md: '1200px' }}} justifyContent={"center"} >
                    <Grid container xs={12} item flexDirection={"row"} justifyContent={"space-between"} sx={{ overflowX: "auto" }} flexShrink={0} gap={1}>
                        {/* pc */}
                        {trainCardDataThree.map(item => (
                            <Grid item md={item.width} key={item.id} borderRadius={"0.5rem"} flex-direction={"column"} overflow={"hidden"} flexWrap={"wrap"} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider',bgcolor: 'common.white', display: { xs: "none", md: "flex" } }} height={250} >
                                <TrainItem item={item} />
                            </Grid>)
                        )}
                    </Grid>
                </Grid>
            </Grid >
            {/* mobile */}
            <Grid sx={{ overflowX: "scroll", display: { xs: "flex", md: "none" }, marginLeft: "1rem", width: { xs: "100%" } }} gap={"1rem"} >
                {trainCardDataThree.map((item, index) => (
                    <Grid item key={index} width={"100%"} height={250} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider',bgcolor: 'common.white' }}  >
                        <TrainItem item={item} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default TrainCardThree