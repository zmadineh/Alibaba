import React from 'react'
import Link from 'next/link';
//material ui
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
//data
import Scan from "../../../public/Assets/Images/download-card/scan.jpg"
import Download from "../../../public/Assets/Images/download-card/download.jpg"
import Arrow from "../../../public/Assets/svg-helpcard/arrow.svg"
import Android from "../../../public/Assets/Images/download-card/android.png"
import Apple from "../../../public/Assets/Images/download-card/apple.png"


const DownloadCard = () => {
    return (
        <Grid item container xs={12} alignItems={"center"} justifyContent={"center"}  >
            <Grid item container sx={{ border: 2, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', bgcolor: 'common.white', maxWidth: "1000px" }} justifyContent={"space-around"}>
                <Grid item sm={12} md={3} className='image' sx={{ display: { xs: "none", sm: "flex" }, marginTop: 1 }} wrap={"nowrap"} alignItems={"center"} justifyContent={"center"}>
                    <Image src={Scan} alt="علی بابا" width={155} height={170} />
                </Grid>
                {/* 1 */}
                <Grid item xs={12} sx={{ display: { xs: "flex", sm: "none" }, marginLeft: "5px", marginTop: "5px" }} justifyContent={"center"} alignItems={"center"} gap={1} >
                    <Grid item display={"flex"} flexDirection={"column"} gap={1}>
                        <Grid item><Typography variant='h6' sx={{ fontSize: 16, fontWeight: 700 }}>اپلیکیشن علی بابا</Typography></Grid>
                        <Grid item><Typography sx={{ color: "grey.500", fontSize: 12, fontWeight: 700 }}>همه ی سفرها در جیب شماست</Typography></Grid>
                        <Grid xs={8} item ><Link href={"/"}><Button variant='Button2' ><Typography sx={{ fontWeight: 500, fontSize: 12 }}>راهنمای نصب</Typography></Button></Link></Grid>
                    </Grid>
                </Grid>
                {/* 2 */}
                <Grid item sm={12} md={3} sx={{ display: { xs: "none", sm: "flex" }, alignItems: { sm: "center", md: "flex-start" } }} flexDirection={"column"} alignItems={"flex-start"} justifyContent={"center"} gap={3} >
                    <Grid item sx={{ display: { xs: "none", sm: "flex" } }} flexDirection={"column"}>
                        <Grid item><Typography variant='h6' sx={{ fontSize: 16, fontWeight: 700 }}>اپلیکیشن علی بابا</Typography></Grid>
                        <Grid item>  <Typography variant='h6' sx={{ fontSize: 18, fontWeight: "medium" }}>سریع تر و مطمئن تر به سفر بروید </Typography></Grid>
                    </Grid>
                    <Grid item sx={{ display: { xs: "none", sm: "flex" } }} alignItems={"flex-start"} flexDirection={"column"}>
                        <Grid item>
                            <Button sx={{ color: "secondary.300", borderRadius: "10px", "&:hover": { backgroundColor: "secondary.100" } }}>
                                <Grid item> <Typography variant='h6' sx={{ fontWeight: 400, color: 'secondary.main', fontSize: 14, textAlign: "right", marginBottom: "10px" }}  >مشاهده لینک های دانلود</Typography></Grid>
                                <Grid item sx={{ color: 'secondary.main' }}> <Arrow /></Grid>
                            </Button>
                        </Grid>
                        <Grid item display={"flex"} alignItems={"flex-end"}>
                            <Grid item width={20} height={20}>
                                <Image src={Android} alt="علی بابا" style={{ width: "100%", height: "100%" }} />
                            </Grid>
                            <Grid item width={20} height={20}>
                                <Image src={Apple} alt="علی بابا" style={{ width: "100%", height: "100%" }} />
                            </Grid>
                            <Grid item >
                                <Typography sx={{ fontSize: 12, color: "grey.400" }}>قابلیت نصب روی AndroidوiOS</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item display={"flex"} sx={{ width: { xs: 200, md: 396 }, height: { xs: 190, md: 294 }, marginLeft: "2px", marginTop: "5px" }} alignItems={"flex-end"} justifyContent={"flex-end"}>
                    <Image src={Download} alt="علی بابا" style={{ width: "100%", height: "100%" }} />
                </Grid>
            </Grid>

        </Grid >
    )
}

export default DownloadCard