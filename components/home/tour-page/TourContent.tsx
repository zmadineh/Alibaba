import React, {useCallback, useEffect, useRef, useState} from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CustomParagraph from "./CustomParagraph";
import SwiperButtonContainer from "./swiper-component/SwiperButtonContainer";

import {tourData} from "../../../data/tour-page/tour-page-description.data";

import Grid from "@mui/material/Grid";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import image1 from '../../../public/Assets/Images/footer/footer1.png';
import image2 from '../../../public/Assets/Images/footer/footer2.png'
import image3 from '../../../public/Assets/Images/footer/footer3.png'
import {SlideType} from "../../../model/slideType";
import Image from "next/image";
import BaseSwiper from "./swiper-component/BaseSwiper";
export const slides: SlideType[] = [
    {id: 1, image: image1, title: 'the flash'},
    {id: 2, image: image2, title: 'batman'},
    {id: 3, image: image3, title: 'spider man'},
]

export default function TourContent(){

    return (
        <Grid container spacing={4}>
            <Grid item container spacing={5}>
                <Grid item xs={12} md={6}>
                    <CustomParagraph
                        title={tourData[0].title}
                        description={tourData[0].description}
                        readMore={tourData[0].readMoreLink} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BaseSwiper slidePreView={3}>
                        {slides.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <Grid width={'100%'} height={400}>
                                    <Image style={{width: '33%', height: '33%'}} src={slide.image} alt={slide.title}/>
                                </Grid>
                            </SwiperSlide>
                        ))}
                    </BaseSwiper>
                </Grid>
            </Grid>

            <Grid item container flexDirection={"column"}>
                <CustomParagraph
                    title={tourData[1].title}
                    description={tourData[1].description}
                    readMore={tourData[1].readMoreLink}
                    maxWidth={'36rem'}
                    textCenter={true}/>
            </Grid>

            <Grid item container>
                <Grid item xs={12}>
                    <BaseSwiper slidePreView={3}>
                        {slides.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <Grid width={'100%'} height={400}>
                                    <Image style={{width: '33%', height: '33%'}} src={slide.image} alt={slide.title}/>
                                </Grid>
                            </SwiperSlide>
                        ))}
                    </BaseSwiper>
                </Grid>
            </Grid>

            <Grid item container>
                <CustomParagraph
                    title={tourData[2].title}
                    description={tourData[2].description}
                    readMore={tourData[2].readMoreLink} />

                <Grid>
                    tour card icon
                </Grid>
            </Grid>
        </Grid>
    )
}