import React from 'react'
import { useTheme } from '@emotion/react';
//material
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
//data
import { hlepCardData } from './../../../data/help-card-data';

const HelpCard = () => {
    const theme = useTheme()
    return (
        <Grid xs={12} container item justifyContent={"center"} alignItems={"center"} >

            <Grid container item xs={11} sx={theme => ({ border: "1px solid", borderColor: theme.palette.grey[200] })} bgcolor={"common.white"} borderRadius={5} p={2} gap={2} justifyContent={"center"} alignItems={"center"}>
                {hlepCardData.map(item => (
                    <Grid key={item.id} item xs={12} md={3.5} display={"flex"} gap={2} alignItems={"center"} sx={{ flexDirection: { xs: "row", md: "column" } }} p={"2"}>
                        <Grid item>
                            {item.icon}
                        </Grid>
                        <Grid item className='taypo'>
                            <Grid item>
                                <Typography>{item.title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>{item.body}</Typography>
                            </Grid>
                            <Grid item display={"flex"} gap={2} alignItems={"center"}>
                                <Grid item> <Typography>{item.body2}</Typography></Grid>
                                <Grid item>{item.icon2}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default HelpCard