import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CustomParagraph from "../CustomParagraph";
import SwiperButtonContainer from "../swiper-component/SwiperButtonContainer";

import {tourData} from "../../../../data/tour-page/tour-page-description.data";

import Grid from "@mui/material/Grid";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import image1 from '../../../../public/Assets/Images/footer/footer1.png';
import image2 from '../../../../public/Assets/Images/footer/footer2.png'
import image3 from '../../../../public/Assets/Images/footer/footer3.png'
import {SlideType} from "../../../../model/slideType";
import Image from "next/image";
export const slides: SlideType[] = [
    {id: 1, image: image1, title: 'the flash'},
    {id: 2, image: image2, title: 'batman'},
    {id: 3, image: image3, title: 'spider man'},
]

interface BaseSwiperProps {
    slidePreView: number,
    children: ReactNode
}

export default function BaseSwiper({slidePreView, children} : BaseSwiperProps){

    const [page, setPage] = useState(0)
    const swiperRef = useRef<any>(null)

    const handleNextSlide = useCallback(() => {
        page === slides.length - 1 ? setPage(prev => 0) : setPage(prev => prev + 1)
    }, [page])

    const handlePrevSlide = useCallback(() => {
        page === 0 ? setPage(prev => slides.length - 1) : setPage(prev => prev - 1)
    }, [page])


    useEffect(() => {
        swiperRef.current.swiper.slideTo(page)
    }, [page])


    return (
        <Grid item position={"relative"} px={5}>
            <SwiperButtonContainer top={200} left={20} onClick={handleNextSlide}>
                <ArrowForwardIcon />
            </SwiperButtonContainer>
            <Swiper className="mySwiper" ref={swiperRef}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={slidePreView}
                    // navigation
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
            >
                {children}
            </Swiper>
            <SwiperButtonContainer top={200} right={20} onClick={handlePrevSlide}>
                <ArrowBackIcon />
            </SwiperButtonContainer>
        </Grid>

    )
}