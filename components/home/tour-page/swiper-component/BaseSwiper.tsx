import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperButtonContainer from "../swiper-component/SwiperButtonContainer";


import Grid from "@mui/material/Grid";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface BaseSwiperProps {
    slidePreView: number,
    scrollbar?: boolean,
    length: number,
    children: ReactNode
}

export default function BaseSwiper({slidePreView, children, scrollbar = false, length} : BaseSwiperProps){

    const [page, setPage] = useState(0)
    const swiperRef = useRef<any>(null)

    const handleNextSlide = useCallback(() => {
        page === length - 1 ? setPage(prev => 0) : setPage(prev => prev + 1)
    }, [page])

    const handlePrevSlide = useCallback(() => {
        page === 0 ? setPage(prev => length - 1) : setPage(prev => prev - 1)
    }, [page])


    useEffect(() => {
        swiperRef.current.swiper.slideTo(page)
    }, [page])


    return (
        <Grid item position={"relative"} px={5}>
            <SwiperButtonContainer top={150} left={20} onClick={handleNextSlide}>
                <ArrowForwardIcon />
            </SwiperButtonContainer>
            <Swiper className="mySwiper" ref={swiperRef}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={slidePreView}
                    // navigation
                    scrollbar={scrollbar ? { draggable: true } : false}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
            >
                {children}
            </Swiper>
            <SwiperButtonContainer top={150} right={20} onClick={handlePrevSlide}>
                <ArrowBackIcon />
            </SwiperButtonContainer>
        </Grid>

    )
}