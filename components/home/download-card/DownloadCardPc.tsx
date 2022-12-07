import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
//data
import Arrow from "../../../public/Assets/svg-helpcard/arrow.svg"
import Android from "../../../public/Assets/Images/download-card/android.png"
import Apple from "../../../public/Assets/Images/download-card/apple.png"
const DownloadCardPc = () => {
    return (
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
    )
}

export default DownloadCardPc