import React from 'react'
//material ui
import Grid from '@mui/material/Grid/Grid';
import Image from 'next/image';
//data
import Scan from "../../../public/Assets/Images/download-card/scan.jpg"
import Download from "../../../public/Assets/Images/download-card/download.jpg"
import DawnloadCardMobil from './DawnloadCardMobil';
import DownloadCardPc from './DownloadCardPc';

const DownloadCard = () => {
    return (
        <Grid item container xs={12} alignItems={"center"} justifyContent={"center"}  >
            <Grid item container sx={{ border: 2, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', bgcolor: 'common.white', maxWidth: "1000px" }} justifyContent={"space-around"}>
                <Grid item sm={12} md={3} className='image' sx={{ display: { xs: "none", sm: "flex" }, marginTop: 1 }} wrap={"nowrap"} alignItems={"center"} justifyContent={"center"}>
                    <Image src={Scan} alt="علی بابا" width={155} height={170} />
                </Grid>
                {/* mobile */}
                <DawnloadCardMobil />
                {/* pc */}
                <DownloadCardPc />
                <Grid item display={"flex"} sx={{ width: { xs: 200, md: 396 }, height: { xs: 190, md: 294 }, marginLeft: "2px", marginTop: "5px" }} alignItems={"flex-end"} justifyContent={"flex-end"}>
                    <Image src={Download} alt="علی بابا" style={{ width: "100%", height: "100%" }} />
                </Grid>
            </Grid>

        </Grid >
    )
}

export default DownloadCard