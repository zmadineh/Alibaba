import React from "react";
import {tourData} from "../../../data/tour-page/tour-page-description.data";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography/Typography";
import CustomParagraph from "../../../data/tour-page/CustomParagraph";

export default function TourContent(){
    return (
        <Grid container spacing={4}>
            <Grid item container spacing={5}>
                <Grid item xs={12} md={6}>
                    <CustomParagraph title={tourData[0].title} description={tourData[0].description} readMore={tourData[0].readMoreLink} />
                </Grid>
                <Grid  item xs={12} md={6}>
                    swiper
                </Grid>
            </Grid>

            <Grid item container flexDirection={"column"} justifyContent={"center"}>
                <CustomParagraph title={tourData[1].title} description={tourData[1].description} readMore={tourData[1].readMoreLink} maxWidth={'36rem'} textCenter={true}/>
            </Grid>

            <Grid item container>
                swiper card
            </Grid>

            <Grid item container>
                <CustomParagraph title={tourData[2].title} description={tourData[2].description} readMore={tourData[2].readMoreLink} />

                <Grid>
                    tour card icon
                </Grid>
            </Grid>
        </Grid>
    )
}