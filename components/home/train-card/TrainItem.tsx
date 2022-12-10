import React from 'react'
import { JsxElement } from 'typescript'
//material ui
import Grid from '@mui/material/Grid';
//data
import IMG1 from "../../../public/Assets/Images/train-card/1/train01-a9319967.jpg"
import { Typography } from '@mui/material';
import Link from 'next/link';

function TrainItem(): JsxElement {

    return (
        <Grid xs={12} item display={"flex"} borderRadius={"0.5rem"} flex-direction={"column"} overflow={"hidden"} flexWrap={"wrap"} >
            <Grid item display={"flex"} justifyContent={"flex-start"} alignItems={"flex-end"} style={{
                backgroundImage: `url(${IMG1.src})`,
                width: '100%',
                height: 180,
                backgroundSize: "cover",
                backgroundPosition: "50% center",
            }}>
                <Grid item width={"100%"} sx={{ backgroundImage: "linear-gradient(to top,black,rgba(0,0,0,0))", color: "common.white", }}><Typography sx={{ fontWeight: 700, px: 1, fontSize: 16 }} variant='h6'>خرید اینترنتی بلیط قطار</Typography></Grid>
            </Grid>
            <Grid item sx={{ padding: "1rem" }} >
                <Typography sx={{ fontSize: "./875rem", lineHeight: 2.3 }}>
                    خرید اینترنتی بلیط قطار مزایای زیادی دارد، از جمله: مقایسه‌ قیمت بلیط قطارهای مختلف، انتخاب دقیق ساعت حرکت قطار، انتخاب از بین قطارهای متنوع شرکت‌های ریلی، پرداخت سریع و آسان با کارت شتابی، استرداد کاملا آنلاین بلیط قطار، خرید مطمئن بلیط مقاصد پرسفر، رزرو آسان بلیط قطار در فصل‌های شلوغ و مطلع شدن از پیش‌فروش قطارها از طریق ایمیل. شما به راحتی می‌توانید با مراجعه به
                    <Grid sx={{ display: "inline-block" }} color={"secondary.main"} ><Link href={"/"} > www.alibaba.ir</Link></Grid>
                </Typography>

                <Typography sx={{ fontSize: "./875rem", lineHeight: 2.3 }}> بلیط قطار خود را به آسانی و با چند کلیک ساده خریداری کنید.</Typography>
            </Grid></Grid>
    )
}

export default TrainItem