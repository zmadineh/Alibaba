import React from 'react'

import Image from 'next/image'
import Hero1 from '/public/Assets/Images/Hero/hero1.png'
import Hero2 from '/public/Assets/Images/Hero/hero2.png'
import Hero3 from '/public/Assets/Images/Hero/hero3.png'
import Hero4 from '/public/Assets/Images/Hero/hero4.png'
import Hero5 from '/public/Assets/Images/Hero/hero5.png'

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import Grid from '@mui/material/Grid/Grid';

type Props = {
    swiperRef:any
}

const HeroSlider = ({swiperRef}: Props) => {
    const slides =[
        {id:0 , image:Hero1},
        {id:1 , image:Hero2},
        {id:2 , image:Hero3},
        {id:3 , image:Hero4},
        {id:4 , image:Hero5},
    ]
  return (
    <Grid item>
        <Swiper className="mySwiper" ref={swiperRef} >
                    {slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <Grid  width={'100%'} height={400} position={'relative'}>
                                <Image style={{width: '100%', height: '100%'}} src={slide.image} alt={''}/>
                            </Grid>
                        </SwiperSlide>
                    ))}
                </Swiper>
    </Grid>
  )
}

export default HeroSlider