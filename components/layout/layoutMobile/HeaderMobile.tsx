import React from 'react'
import { useState, useEffect } from "react"
//materialui
import Grid from '@mui/material/Grid';
import Logoicon from "../../../public/svg/shawl_logotype_black-fd7a79b7 (1).svg"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

//data
import { listOption } from './../../../data/listOption';

import { useTheme } from '@emotion/react';


const HeaderMobile = () => {
    const [display, setDisplay] = useState<string>("header1")
    const theme = useTheme();
    useEffect(() => {
        document.addEventListener("scroll", e => {
            const scrolled: number | undefined = document?.scrollingElement?.scrollTop;

            if (scrolled) {
                if (scrolled >= 150) {
                    setDisplay("header2")
                } else {
                    setDisplay("header1")
                }
            }


        })

    }, [])
    return (
        <Grid xs={12} height={200} container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{ marginBottom: 2, zIndex: 1 }} >
            <Grid item container xs={12} sx={{ zIndex: -1, position: "fixed" }} top={0} bgcolor={"primary.main"} width={"100%"} height={display === "header1" ? "150px" : "110px"}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"cnter"} sx={{ marginTop: "32px", marginBottom: "24px" }}>
                    <Link href={"/"}  >
                        <Grid width={50} height={20}>
                            <Logoicon />
                        </Grid>
                    </Link>
                </Grid>
                {/* header1 */}
                <Grid item xs={12} display={display === "header1" ? "flex" : "none"} justifyContent={"center"} alignItems={"cnter"} flexDirection={"row"} sx={{ cursor: "pointer" }}>
                    <Grid item xs={11} container display={"grid"} borderRadius={4} overflow={"hidden"} sx={{ gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "repeat(2,1fr)", border: "solid 1px #E2E6E9", cursor: "pointer", }} bgcolor={"white"} height={130} position={"relative"} boxShadow={1} >
                        {listOption.map(item => (
                            <Grid key={item.id} xs={12} item display={"flex"} justifyContent={"flex-start"} alignItems={"center"} border={"solid 1px #E2E6E9"} sx={{
                                '&:hover': {
                                    cursor: 'pointer',
                                }
                            }}>
                                <Link href={"/"} >
                                    <Button >
                                        <Grid display={"flex"} sx={{ paddingRight: 2 }} gap={1} color={"common.black"} alignItems={"center"}>
                                            <Grid item >
                                                {item.icon}
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='h3'>{item.title}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Button>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {/* header2 */}
                <Grid item container xs={12} display={display === "header1" ? "none" : "flex"} justifyContent={'center'} alignItems={"cnter"}>
                    <Grid item xs={11} height={"50px"} display={"flex"} justifyContent={"space-between"} alignItems={"cnter"} flexDirection={"row"} bgcolor={"common.white"} borderRadius={5} boxShadow={1}>
                        {listOption.map(item => (
                            <Grid item color={"common.black"}>
                                <Link href={item.href}>
                                    <Button style={{ color: "black" }}>
                                        {item.icon}
                                    </Button>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid >
        </Grid >
    )
}

export default HeaderMobile