import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
//data
import Arrow from "../../../public/Assets/svg-helpcard/arrow.svg"
import Android from "../../../public/Assets/Images/download-card/android.png"
import Apple from "../../../public/Assets/Images/download-card/apple.png"
import Scan from "../../../public/Assets/Images/download-card/scan.jpg"
import Download from "../../../public/Assets/Images/download-card/download.jpg"
import Link from 'next/link';
const DownloadCardPc = () => {
    return (
        <Grid item md={12} sx={{ display: { xs: "none", md: "flex" }, flexDirection: { md: "column", lg: "row" }, justifyContent: { md: "center", lg: "space-between" } }} alignItems={"center"} gap={2}>
            <Grid item md={12} lg={4} display={"flex"} justifyContent={"center"} height={187} sx={{ marginLeft: 2, marginTop: 1 }}>
                <Image src={Scan} alt="علی بابا" style={{ width: 148, height: "100%" }} />
            </Grid>
            <Grid item md={12} lg={4} display={'flex'} flexDirection={"column"} gap={2} >
                <Grid item>
                    <Typography variant='h6' sx={{ fontSize: "1.25rem", fontWeight: 700 }}>اپلیکیشن علی بابا</Typography>
                    <Typography sx={{ fontSize: "1.125rem", }}>سریع تر و مطمئن تر به سفر بروید</Typography></Grid>
                <Grid item>
                    <Link href={"/"}>
                        <Button sx={{ color: "secondary.300", borderRadius: "10px", "&:hover": { backgroundColor: "secondary.100" } }}>
                            <Grid item> <Typography variant='h6' sx={{ marginBottom: "14px", fontWeight: 400, color: 'secondary.main', fontSize: 16 }}  >مشاهده لینک های دانلود</Typography></Grid>
                            <Grid item sx={{ color: 'secondary.main' }}> <Arrow /></Grid>
                        </Button>
                    </Link>

                </Grid>
                <Grid item md={12} display={"flex"} justifyContent={"flex-start"}  >
                    <Grid item display={"flex"} alignItems={"flex-end"} gap={1} >
                        <Grid item width={20} height={20}>
                            <Image src={Apple} alt="علی بابا" style={{ width: "100%", height: "100%" }} />
                        </Grid>
                        <Grid item width={20} height={20}>
                            <Image src={Android} alt="علی بابا" style={{ width: "100%", height: "100%" }} />
                        </Grid>
                        <Grid item>
                            <Typography sx={{ fontSize: ".75rem", fontWeight: 400, color: "grey.400" }}> قابلیت نصب روی Android و iOS </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} lg={4} sx={{ marginRight: 5 }} height={290} p={1} >
                <Image src={Download} alt="علی بابا" style={{ width: 360, height: "100%" }} />
            </Grid>
        </Grid>

    )
}

export default DownloadCardPc