import React from 'react'
// material ui
import Grid from '@mui/material/Grid';
import TrainItem from './TrainItem';
// data
import { trainCardDataOne } from '../../../data/traincards/train-card-data-one';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
const TrainCardOne = () => {

    return (
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3} >
            <Grid item container xs={12} sx={{ maxWidth: { md: '1200px' }, bgcolor: 'common.white' }} justifyContent={"center"} >
                <Grid container item flexDirection={"row"} justifyContent={"space-between"} sx={{ overflowX: "auto" }} flexShrink={0} >

                    {/* pc */}
                    {trainCardDataOne.map(item => (
                        <Grid item key={item.id} md={3.9} borderRadius={"0.5rem"} flex-direction={"column"} overflow={"hidden"} flexWrap={"wrap"} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', display: { xs: "none", md: "flex" } }} flexShrink={0} height={550} >
                            <TrainItem item={item} />
                        </Grid>
                    ))}
                    {/* mobile */}
                    <Grid item container xs={12} justifyContent={"center"} p={1}>
                        <Grid item width={400}>
                            <Swiper
                                scrollbar={{
                                    hide: true,
                                }}
                                modules={[Scrollbar]}  >
                                {trainCardDataOne.map(item => (
                                    <SwiperSlide key={item.id}><Grid overflow={"hidden"} xs={12} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', display: { xs: "flex", md: "none" } }} justifyContent={"center"} height={600}>
                                        <TrainItem item={item} /></Grid></SwiperSlide>
                                ))}

                            </Swiper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default TrainCardOne


