import React,{Dispatch} from 'react'
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

interface HeaderMobileProps{
    setPage: Dispatch<React.SetStateAction<number>>,
    setOpenDialog: Dispatch<React.SetStateAction<boolean>>,
}

const HeaderMobile = ({setPage, setOpenDialog}:HeaderMobileProps): JSX.Element => {
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
        <Grid xs={12} height={200} item container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} sx={{ marginBottom: 15, zIndex: 2 ,display:{xs:"flex",md:"none"}}} flexWrap={"nowrap"}>
            <Grid item container xs={12} sx={{ zIndex: -1, position: "fixed" }} top={0}  right={0} bgcolor={"primary.main"}  height={display === "header1" ? "150px" : "110px"}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"cnter"} sx={{ marginTop: "32px", marginBottom: "24px" }}>
                    <Link href={"/"}  >
                        <Grid width={display === "header1" ? "125px" : "100px"} height={display === "header1" ? "20px" : "16px"}>

                            <Image src={Logo} alt="logo" style={{ width: "100%", height: "100%" }} />
                        </Grid>
                    </Link>
                </Grid>
                {/* header1 */}
                <Grid item xs={12} display={display === "header1" ? "flex" : "none"} justifyContent={"center"} alignItems={"cnter"} flexDirection={"row"} sx={{ cursor: "pointer" }}>
                    <Grid item xs={12} container display={"grid"} overflow={"hidden"} sx={{ gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "repeat(2,1fr)", border: "solid 1px", cursor: "pointer", borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }} bgcolor={"white"} height={130} position={"relative"} boxShadow={1} >
                        {listOption.map((item) => (<HederMobileMain setOpenDialog={setOpenDialog} setPage={setPage} item={item} key={item.id} />
                        ))}
                    </Grid>
                </Grid>
                {/* header2 */}
                <Grid item container xs={12} display={display === "header1" ? "none" : "flex"} justifyContent={'center'} alignItems={"cnter"}>
                    <Grid item xs={12} height={"50px"} display={"flex"} justifyContent={"space-evenly"} alignItems={"cnter"} flexDirection={"row"} bgcolor={"common.white"} sx={{ borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }} boxShadow={1} gap={1} overflow={"hidden"}>
                        {listOption.map(item => (<HederMobileScrll setOpenDialog={setOpenDialog} item={item} key={item.id} setPage={setPage}/>

                        ))}
                    </Grid>
                </Grid>
            </Grid >
        </Grid >
    )
}

export default HeaderMobile