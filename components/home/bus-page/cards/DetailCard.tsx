import React from 'react'
import Image from "next/image";

import {cardDataType} from "../../../../model/card/cardDataType";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";



interface DetailCardPropsType {
    cardData: cardDataType,
}

export default function DetailCard ({ cardData }: DetailCardPropsType) {

    return (
        <Grid container item flexDirection={"column"} sx={{borderRadius: '8px', borderColor: 'grey.200', borderWidth: '1px'}}>
            <Grid item position={"relative"}>
                <Image src={cardData.image} alt={cardData.title} />
                <Typography bottom={'10px'} right={'10px'}>
                    {cardData.title}
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    {cardData.body}
                </Typography>
            </Grid>
        </Grid>
    )
}
