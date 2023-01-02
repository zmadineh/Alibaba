import React from 'react'
import Image from "next/image";

import {cardDataType} from "../../../../model/card/cardDataType";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";



interface DetailCardPropsType {
    cardData: cardDataType,
    maxWidthXs: string,
    maxWidthSm: string,
    maxWidthMd: string,
    minHeight: string
}

export default function DetailCard ({ cardData, maxWidthXs, maxWidthSm, maxWidthMd, minHeight }: DetailCardPropsType) {

    const theme = useTheme();
    const tabletMatch = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Grid container item flexDirection={"column"} bgcolor={'#fff'}
              maxWidth={{xs: maxWidthXs, sm: maxWidthSm, md: maxWidthMd}}
              minHeight={{sm: minHeight}}
              overflow={"hidden"}
              sx={{borderRadius: '8px', border: 1, borderColor: 'divider'}}
        >

            <Grid item position={"relative"}>
                <Image src={cardData.image} alt={cardData.title} style={{width: '100%'}} />
                <Grid item position={"absolute"} bottom={0} width={"100%"}
                      sx={{ backgroundImage: "linear-gradient(to top,black,rgba(0,0,0,0))", color: "common.white", }}>
                    <Typography sx={{ fontWeight: 700, px: 1, fontSize: 16 }} variant='h6'>
                        {cardData.title}
                    </Typography>
                </Grid>
            </Grid>

            {tabletMatch ?
                <Grid item padding={'10px'}>
                    <Typography textAlign={"justify"}>
                        {cardData.body}
                    </Typography>
                </Grid>
            : null}

        </Grid>
    )
}
