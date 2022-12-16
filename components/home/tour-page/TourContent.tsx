import React from "react";
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CustomParagraph from "./CustomParagraph";

import {tourData} from "../../../data/tour-page/tour-page-description.data";
import {SlideType} from "../../../model/slideType";

import Grid from "@mui/material/Grid";

import tourImage from '../../../public/Assets/Images/tour-page/Tour-Homepage-PriceGuarantee.jpg';
import tourImage1 from '../../../public/Assets/Images/tour-page/tour_page_image1.jpg';

import Image from "next/image";
import BaseSwiper from "./swiper-component/BaseSwiper";
import PriceCard from "../cards/PriceCard";
import {useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ActionCard from "../cards/ActionCard";

export const slides: SlideType[] = [
    {id: 1, image: tourImage, title: 'تور شیراز به کیش', price: 15540000},
    {id: 2, image: tourImage, title: 'تور تهران به قشم', price: 15540000},
    {id: 3, image: tourImage, title: 'تور تهران به استانبول', price: 15540000},
    {id: 4, image: tourImage, title: 'تور تهران به اصقهان', price: 15540000},
    {id: 5, image: tourImage, title: 'تور تهران به شیراز', price: 15540000},
    {id: 6, image: tourImage, title: 'تور تهران به تبریز', price: 15540000},
]

export const slides1: SlideType[] = [
    {id: 1, image: tourImage1, title: 'هتل میراژ کیش', price: 15540000},
    {id: 2, image: tourImage1, title: 'هتل میراژ کیش', price: 15540000},
    {id: 3, image: tourImage1, title: 'هتل میراژ کیش', price: 15540000},
    {id: 4, image: tourImage1, title: 'هتل میراژ کیش', price: 15540000},
    {id: 5, image: tourImage1, title: 'هتل میراژ کیش', price: 15540000},
    {id: 6, image: tourImage1, title: 'هتل میراژ کیش', price: 15540000},
]

export default function TourContent(){

    const theme = useTheme();
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'))

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
                    {!tabletMatch &&
                        <BaseSwiper slidePreView={2} length={slides.length/2 }>
                            {slides.map((slide, index) => (
                                <SwiperSlide key={slide.id}>
                                    <Grid display={"flex"} alignItems={"center"} width={'100%'} height={300}>
                                        <Grid display={"flex"} flexDirection={"column"} width={'100%'} gap={2}>
                                            <PriceCard title={slides[index].title} price={slides[index].price} img={slides[index].image}/>
                                            {index + 1 < slides.length ?
                                                <PriceCard title={slides[index + 1].title}
                                                           price={slides[index + 1].price}
                                                           img={slides[index + 1].image}/>
                                                : null
                                            }
                                        </Grid>
                                    </Grid>
                                </SwiperSlide>
                            ))}
                        </BaseSwiper>
                    }
                    {tabletMatch &&
                        <Grid display={"flex"} overflow={"scroll"}>
                            {slides.map(slide => (
                                <PriceCard key={slide.id} title={slide.title} price={slide.price} img={slide.image}/>
                            ))}
                        </Grid>
                    }
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
                    <BaseSwiper slidePreView={3} length={slides.length}>
                        {slides.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <Grid width={'100%'} height={400}>
                                    <ActionCard title={slide.title} price={slide.price} img={slide.image}/>
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