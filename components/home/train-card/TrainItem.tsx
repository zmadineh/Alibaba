import React from 'react'
import Image from 'next/image';
//material ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


//data


import Link from 'next/link';
import { trainCardType } from '../../../model/train.type';






const TrainItem = ({ item }: { item: trainCardType }) => {

    return (
        <Grid item >
            <Grid item display={"flex"} justifyContent={"flex-start"} alignItems={"flex-end"} position={"relative"} height={180} width={390}>
                <Image src={item.image} alt="قطار" width={390} height={180} />
                <Grid position={"absolute"} item width={"100%"} sx={{ backgroundImage: "linear-gradient(to top,black,rgba(0,0,0,0))", color: "common.white", }}><Typography sx={{ fontWeight: 700, px: 1, fontSize: 16 }} variant='h6'>{item.title}</Typography></Grid>
            </Grid>
            <Grid item sx={{ padding: "1rem" }} height={300} width={"100%"} justifyContent={"center"}>
                <Typography sx={{ fontSize: { xs: "./875rem", lg: 14 }, lineHeight: 2.3, }}>
                    {item.body}
                    <Link style={{ color: "blue", fontSize: 14, lineHeight: 2 }} href={"/"}>{item.link}</Link>
                </Typography>
                <Typography sx={{ fontSize: { xs: "./875rem", lg: 14 }, lineHeight: 2.3 }}>{item.body2}</Typography>
            </Grid>


        </Grid>
    )
}

export default TrainItem