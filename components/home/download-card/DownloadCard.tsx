import React from 'react'
//material ui
import Grid from '@mui/material/Grid/Grid';

import DawnloadCardMobile from './DawnloadCardMobile';
import DownloadCardPc from './DownloadCardPc';

const DownloadCard = () => {
    return (
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3}>
            <Grid xs={12} sx={{ border: 2, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', maxWidth: { md: '1000px' }, bgcolor: 'common.white' }} height={{ xs: 180, md: 700, lg: 302 }}>
                <DawnloadCardMobile />
                <DownloadCardPc />
            </Grid>


        </Grid >
    )
}

export default DownloadCard