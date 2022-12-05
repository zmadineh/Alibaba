import React from 'react'
import { useTheme } from '@emotion/react';
//material
import Grid from '@mui/material/Grid';

import { Typography } from '@mui/material';



const HelpCard = () => {
    const theme = useTheme()
    return (
        <Grid xs={12} container item justifyContent={"center"} alignItems={"center"} >

            <Grid container item xs={11} sx={theme => ({ border: "1px solid", borderColor: theme.palette.grey[200] })} bgcolor={"common.white"} borderRadius={5} p={2} gap={2} justifyContent={"center"} alignItems={"center"}>
                {/* 1 */}
                <Grid item xs={12} md={3.5} bgcolor={"red"} display={"flex"} gap={2} alignItems={"center"} sx={{ flexDirection: { xs: "row", md: "column" } }} p={"2"}>
                    <Grid item>
                        svg
                    </Grid>
                    <Grid item className='taypo'>
                        <Grid item>
                            <Typography>1</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>2</Typography>
                        </Grid>
                        <Grid item display={"flex"} gap={2} alignItems={"center"}>
                            <Grid item> <Typography>3</Typography></Grid>
                            <Grid item> svg</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* 2 */}
                <Grid item xs={12} md={3.5} bgcolor={"red"} display={"flex"} gap={2} alignItems={"center"} sx={{ flexDirection: { xs: "row", md: "column" } }} p={"2"}>
                    <Grid item>
                        svg
                    </Grid>
                    <Grid item className='taypo'>
                        <Grid item>
                            <Typography>1</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>2</Typography>
                        </Grid>
                        <Grid item display={"flex"} gap={2} alignItems={"center"}>
                            <Grid item> <Typography>3</Typography></Grid>
                            <Grid item> svg</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* 3 */}
                <Grid item xs={12} md={3.5} bgcolor={"red"} display={"flex"} gap={2} alignItems={"center"} sx={{ flexDirection: { xs: "row", md: "column" } }} p={"2"}>
                    <Grid item>
                        svg
                    </Grid>
                    <Grid item className='taypo'>
                        <Grid item>
                            <Typography>1</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>2</Typography>
                        </Grid>
                        <Grid item display={"flex"} gap={2} alignItems={"center"}>
                            <Grid item> <Typography>3</Typography></Grid>
                            <Grid item> svg</Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default HelpCard