import React, {ReactNode} from "react";

import {cardDataType} from "../../../../model/card/cardDataType";

import Grid from "@mui/material/Grid/Grid";
import DetailCard from "./DetailCard";



interface CardsContainerPropsType {
    // cardsData: cardDataType[]
    children: ReactNode,
    maxHeight: {xs: string, sm: string}
}

export default function CardsContainer({children, maxHeight} : CardsContainerPropsType) {

    return (
        <Grid item container flexDirection={"column"} overflow={"scroll"} maxHeight={maxHeight} gap={2} mt={4}>
            {children}
        </Grid>

    )
}