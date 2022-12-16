import React from "react";
import Grid from "@mui/material/Grid";
import Image, {StaticImageData} from "next/image";
import Typography from "@mui/material/Typography/Typography";
import Card from "@mui/material/Card";
import {CardActions, CardMedia} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";

interface PriceCardProps {
    title: string,
    price: number,
    img: string | StaticImageData,
}

export default function ActionCard({title, price, img} : PriceCardProps) {

    return (
        <Card sx={{cursor: 'pointer', width: '320px', minWidth: '320px', marginRight: '20px'}}>
            <CardMedia>
                <Image src={img} alt={'tour-image'} style={{width: '100%'}}/>
            </CardMedia>
            <CardContent>
                <Grid container flexDirection={"column"} justifyContent={"flex-start"}>
                    <Typography variant={"body2"} fontWeight={600}>{title}</Typography>
                    <Typography variant={"body2"} mt={3}> ۵ ستاره، ۱ شب و ۲ روز</Typography>

                    <Grid item container alignItems={"flex-end"}>
                        <Grid item xs={6} display={"flex"} flexDirection={"column"} mt={3}>
                            <Grid display={"flex"}>
                                <Typography color={'secondary'} variant={"body2"} >{price}</Typography>
                                <Typography color={'grey.300'} variant={"body2"} >ریال</Typography>
                            </Grid>
                            <Typography color={'grey.300'} variant={"body2"} >  برای ۱ نفر شامل هتل، پرواز و خدمات</Typography>
                        </Grid>
                        <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
                            <CardActions>
                                <Button variant={"contained"} color={'secondary'}>جزئیات و خرید</Button>
                            </CardActions>
                        </Grid>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
        // <Grid item container flexDirection={"column"} alignItems={"center"} width={'100%'} minWidth={'320px'}>
        //     <Grid item xs={4}>
        //         <Image src={img} alt={'tour-image'} style={{width: '100px', height: '100px'}}/>
        //     </Grid>
        //     <Grid item xs={8} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"}>
        //         <Typography variant={"body2"} fontWeight={600}>{title}</Typography>
        //         <Grid display={"flex"}>
        //             <Typography color={'grey.300'} variant={"body2"} > نفر ۱ برای </Typography>
        //             <Typography color={'secondary'} variant={"body2"} >{price}</Typography>
        //             <Typography color={'grey.300'} variant={"body2"} >ریال</Typography>
        //         </Grid>
        //     </Grid>
        // </Grid>
    )
}