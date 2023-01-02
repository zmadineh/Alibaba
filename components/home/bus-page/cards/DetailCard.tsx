import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { trainCardType } from '../../../../model/train.type';
import Svg from "../../../../public/Assets/Images/train-card/4/logo-alibaba-square-logo-small-1fb61159.svg"
import Arrrow from "../../../../public/Assets/svg-helpcard/arrow.svg"

export default function DetailCard ({ item }: { item: trainCardType }) {

    return (
        <Grid item width={"100%"} >
            <Grid item display={"flex"} justifyContent={"flex-start"} alignItems={"flex-end"}
                  position={"relative"} sx={{width:{xs:250,md:400}}} overflow={"hidden"}>
                <Image src={item.image} alt="قطار" width={400} height={200} />
                <Grid display={item.title ? "block" : "none"} position={"absolute"} item width={"100%"}
                      sx={{ backgroundImage: "linear-gradient(to top,black,rgba(0,0,0,0))", color: "common.white", }}>
                    <Typography sx={{ fontWeight: 700, px: 1, fontSize: 16 }} variant='h6'>
                        {item.title}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item display={item.title3 ? "flex" : "none"} justifyContent={"space-around"} my={2} >
                <Grid item>
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                        {item.title3}
                    </Typography>
                </Grid>
                <Grid item><Arrrow /></Grid>
            </Grid>
            <Grid item sx={{ padding: "1rem" }} height={"auto"} width={"100%"} justifyContent={"center"}>
                <Grid item display={item.title2 ? "flex" : "none"} alignItems={"stretch"} gap={"1px"}>
                    <Grid item><Svg /></Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 10, color: "grey.500" }}>
                            مجله ی گردشگری علی بابا
                        </Typography>
                    </Grid>
                </Grid>
                <Typography sx={{ fontSize: "1rem", lineHeight: 2.3, color: "grey.500", fontWeight: "700", marginBottom: 1 }}>
                    {item.title2}
                </Typography>
                <Typography sx={{ fontSize: { xs: "./875rem", lg: 14 }, lineHeight: 2.3, }}>
                    {item.body}
                    <Link style={{ color: "blue", fontSize: 14, lineHeight: 2 }} href={"/"}>
                        {item.link}
                    </Link>
                </Typography>
                <Typography sx={{ fontSize: { xs: "./875rem", lg: 14 }, lineHeight: 2.3 }}>
                    {item.body2}
                </Typography>
            </Grid>
        </Grid>
    )
}
