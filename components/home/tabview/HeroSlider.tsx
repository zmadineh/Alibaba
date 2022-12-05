import React from 'react'

import Image from 'next/image'
import Hero1 from '../../../src/assets/images/Hero/Hero1.webp'
import Hero2 from '../../../src/assets/images/Hero/Hero2.webp'
import Hero3 from '../../../src/assets/images/Hero/Hero3.webp'
import Hero4 from '../../../src/assets/images/Hero/Hero4.webp'
import Hero5 from '../../../src/assets/images/Hero/Hero5.webp'

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