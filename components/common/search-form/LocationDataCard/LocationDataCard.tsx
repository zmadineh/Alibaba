import React, {ReactNode} from "react";

import Typography from "@mui/material/Typography";
import {Avatar, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

interface LocationDataCardProps {
    title: string,
    description: string,
    icon: ReactNode,
    withDescription: boolean,
}

const LocationDataCard = ({title, description, icon, withDescription} : LocationDataCardProps) => {

    return(
        <Grid container item justifyContent={"flex-start"} wrap={"nowrap"}>
            <Grid container item xs={1} alignItems={"center"} justifyContent={"center"}>
                <IconButton>{icon}</IconButton>
            </Grid>

            <Grid container item px={1} flexDirection={"column"} alignItems={'flex-start'} justifyContent={"center"} wrap={"nowrap"}>

                <Typography variant={"body1"} textOverflow={"ellipsis"}>{title}</Typography>
                {withDescription && <Typography variant={"body1"} color={'text.secondary'} textOverflow={"ellipsis"}>{description}</Typography>}

            </Grid>
        </Grid>
    )
}

export default LocationDataCard;