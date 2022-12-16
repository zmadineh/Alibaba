import React from "react";
import Grid from "@mui/material/Grid";
import Image, {StaticImageData} from "next/image";
import Typography from "@mui/material/Typography/Typography";

interface PriceCardProps {
    title: string,
    price: number,
    img: string | StaticImageData,
}

export default function ActionCard({title, price, img} : PriceCardProps) {

    return (
        <Grid item container flexDirection={"column"} alignItems={"center"} width={'100%'} minWidth={'320px'}>
            <Grid item xs={4}>
                <Image src={img} alt={'tour-image'} style={{width: '100px', height: '100px'}}/>
            </Grid>
            <Grid item xs={8} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"}>
                <Typography variant={"body2"} fontWeight={600}>{title}</Typography>
                <Grid display={"flex"}>
                    <Typography color={'grey.300'} variant={"body2"} > نفر ۱ برای </Typography>
                    <Typography color={'secondary'} variant={"body2"} >{price}</Typography>
                    <Typography color={'grey.300'} variant={"body2"} >ریال</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}