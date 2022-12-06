import React from 'react'
import { useState, useEffect } from "react"
//materialui
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

//data
import { listOption } from './../../../data/listOption';
import Logo from "../../../public/Assets/logo.png"
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { fontFamily } from '@mui/system';


const HeaderMobile = () => {
    const [display, setDisplay] = useState<string>("header1")
    const theme = useTheme();
    useEffect(() => {
        document.addEventListener("scroll", e => {
            const scrolled: number | undefined = document?.scrollingElement?.scrollTop;
            if (scrolled) {
                if (scrolled >= 15) {
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
                        <Grid width={display === "header1" ? "125px" : "100px"} height={display === "header1" ? "20px" : "16px"}>

                            <Image src={Logo} alt="logo" style={{ width: "100%", height: "100%" }} />
                        </Grid>
                    </Link>
                </Grid>
                {/* header1 */}
                <Grid item xs={12} display={display === "header1" ? "flex" : "none"} justifyContent={"center"} alignItems={"cnter"} flexDirection={"row"} sx={{ cursor: "pointer" }}>
                    <Grid item xs={11} container display={"grid"} borderRadius={4} overflow={"hidden"} sx={theme => ({ gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "repeat(2,1fr)", border: "solid 1px", borderColor: theme.palette.grey[200], cursor: "pointer", })} bgcolor={"white"} height={130} position={"relative"} boxShadow={1} >
                        {listOption.map(item => (
                            <Grid key={item.id} xs={12} item display={"flex"} justifyContent={"flex-start"} alignItems={"center"} sx={theme => ({ border: "1px solid", borderColor: theme.palette.grey[200] })}>
                                <Button variant='Button1' >
                                    <Link href={'/'} >
                                        <Grid display={"flex"} sx={theme => ({ paddingRight: 2, color: theme.palette.grey[700] })} gap={1} alignItems={"center"}>
                                            <Grid item >
                                                {item.icon}
                                            </Grid>
                                            <Grid item sx={{ marginBottom: "5px" }}>
                                                <Typography variant='h6' sx={theme => ({ textDecoriarion: "none solid theme.palette.grey[700]" })}><strong>{item.title}</strong></Typography>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {/* header2 */}
                <Grid item container xs={12} display={display === "header1" ? "none" : "flex"} justifyContent={'center'} alignItems={"cnter"}>
                    <Grid item xs={11} height={"50px"} display={"flex"} justifyContent={"space-evenly"} alignItems={"cnter"} flexDirection={"row"} bgcolor={"common.white"} borderRadius={3} boxShadow={1} gap={1} overflow={"hidden"}>
                        {listOption.map(item => (
                            <Grid item color={"common.black"} alignItems={"center"}>
                                <Link href={'/'}>
                                    <Button variant='Button1' style={{ color: "black" }}>
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