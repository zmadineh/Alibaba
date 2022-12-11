import React from 'react'
// material ui
import Grid from '@mui/material/Grid';
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
// data
import { trainCardDataTwo } from './../../../data/traincards/train-card-data-two';
import TrainItem from './TrainItem';
const TrainCardTwo = () => {
    return (
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3}>
            <Grid item container xs={12} sx={{ maxWidth: { md: '1200px' }, bgcolor: 'common.white' }} justifyContent={"center"} >
                <Grid container xs={12} item flexDirection={"row"} justifyContent={"space-between"} sx={{ overflowX: "auto" }} flexShrink={0}>
                    {/* pc */}
                    {trainCardDataTwo.map(item => (
                        <Grid item md={2.9} key={item.id} borderRadius={"0.5rem"} flex-direction={"column"} overflow={"hidden"} flexWrap={"wrap"} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', display: { xs: "none", md: "flex" } }} height={550}>
                            <TrainItem item={item} />
                        </Grid>)
                    )}
                </Grid>
                {/* mobile */}
                <Grid item container xs={12} justifyContent={"center"} p={1}>
                    <Grid item width={400}>
                        <Swiper
                            scrollbar={{
                                hide: true,
                            }}
                            modules={[Scrollbar]}  >
                            {trainCardDataTwo.map(item => (
                                <SwiperSlide key={item.id} ><Grid overflow={"hidden"} xs={12} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', display: { xs: "flex", md: "none" } }} justifyContent={"center"} height={550}>
                                    <TrainItem item={item} /></Grid></SwiperSlide>
                            ))}

                        </Swiper>
                    </Grid>
                </Grid>

            </Grid>
        </Grid >
    )
}

export default TrainCardTwo