import React, {ReactNode} from 'react';

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

interface SwiperButtonContainerProps {
    top: number,
    left?: number,
    right?: number,
    onClick: () => void,
    children: ReactNode,
}

export default function SwiperButtonContainer({onClick, top, left, right, children} : SwiperButtonContainerProps) {

    return (
        <Grid
            position={"absolute"}
            top={top}
            left={left}
            right={right}
            zIndex={'1000'}
            display={"flex"}
            justifyContent={"center"} alignItems={"center"}
            sx={{border: '1px solid', borderColor: 'grey.400', backgroundColor: 'grey.100', borderRadius: '50%', width:'40px', height: '40px'}}
            onClick={onClick}
        >
            <IconButton>
                {children}
            </IconButton>
        </Grid>
    );
}