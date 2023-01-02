import React, {ReactNode} from "react";

import {cardDataType} from "../../../../model/card/cardDataType";

import Grid from "@mui/material/Grid/Grid";
import DetailCard from "./DetailCard";



interface CardsContainerPropsType {
    // cardsData: cardDataType[]
    children: ReactNode,
}

export default function CardsContainer({children} : CardsContainerPropsType) {

    return (
        <Grid container flexDirection={"column"} spacing={1} my={3}>
            <Grid item container flexDirection={"column"} overflow={"scroll"} alignContent={"flex-start"} maxHeight={'250px'} gap={2} mt={4}>
                {children}
            </Grid>
        </Grid>
    )
}