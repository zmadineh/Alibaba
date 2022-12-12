import React from 'react'
import { useState, useEffect } from "react"
import Link from 'next/link';
//materialui
import Grid from '@mui/material/Grid';
//data
import { listOption } from './../../../data/listOption';
import Logo from "../../../public/Assets/logo.png"
import Image from 'next/image';
import HederMobileMain from './heder-mobile/HederMobileMain';
import HederMobileScrll from './heder-mobile/HederMobileScrll';


const HeaderMobile = (): JSX.Element => {
    const [display, setDisplay] = useState<string>("header1")

    useEffect(() => {
        window.addEventListener("scroll", e => {
            const scrolled: number | undefined = window?.scrollY;
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
                    <Grid item xs={11} container display={"grid"} overflow={"hidden"} sx={{ gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "repeat(2,1fr)", border: "solid 1px", cursor: "pointer", borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }} bgcolor={"white"} height={130} position={"relative"} boxShadow={1} >
                        {listOption.map((item) => (<HederMobileMain item={item} key={item.id} />
                        ))}
                    </Grid>
                </Grid>
                {/* header2 */}
                <Grid item container xs={12} display={display === "header1" ? "none" : "flex"} justifyContent={'center'} alignItems={"cnter"}>
                    <Grid item xs={11} height={"50px"} display={"flex"} justifyContent={"space-evenly"} alignItems={"cnter"} flexDirection={"row"} bgcolor={"common.white"} sx={{ borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }} boxShadow={1} gap={1} overflow={"hidden"}>
                        {listOption.map(item => (<HederMobileScrll item={item} key={item.id} />

                        ))}
                    </Grid>
                </Grid>
            </Grid >
        </Grid >
    )
}

export default HeaderMobile