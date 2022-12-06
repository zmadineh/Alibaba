import React from 'react'
import { useTheme } from '@emotion/react';
//material
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


//data
import { hlepCardData } from './../../../data/help-card-data';
import { fontFamily } from '@mui/system';


const HelpCard = () => {
    const theme = useTheme()
    return (
        <Grid xs={12} container item justifyContent={"center"} alignItems={"center"} >
            <Grid container item xs={11} sx={{ border: "1px solid", borderColor: 'grey.200' }} bgcolor={"common.white"} borderRadius={5} p={2} gap={2} justifyContent={"center"} alignItems={"center"} boxShadow={1}>
                {hlepCardData.map(item => (
                    <Grid key={item.id} item xs={12} md={3.5} display={"flex"} gap={2} alignItems={"center"} sx={{ flexDirection: { xs: "row", md: "column" } }} p={"2px"}>
                        <Grid item sx={{ color: 'info.300', backgroundColor:'info.100' }} borderRadius={"28px"} py={"8px"} px={"9px"}>
                            {item.icon}
                        </Grid>
                        <Grid item className='taypo' display={"flex"} flexDirection={"column"} sx={{ textAlign: { sx: "right", md: "center" } }} gap={2}>
                            <Grid item sx={{ color: 'grey.500' }} >
                                <Typography variant="h6"  > <strong>{item.title}</strong></Typography>
                            </Grid>
                            <Grid item sx={{ color: 'grey.400' }}>
                                <Typography variant='h6' ><strong>{item.body}</strong></Typography>
                            </Grid>
                            <Grid item display={"flex"} gap={3} alignItems={"center"} sx={{ color: 'secondary.300', justifyContent: { xs: "flex-start", md: "center" }, cursor: "pointer" }}  >
                                <Grid item> <Typography variant='h6' sx={{ marginBottom: "4px" }}  > <strong>{item.body2}</strong></Typography></Grid>
                                <Grid item sx={{ color: 'secondary.main' }}> {item.icon2}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid >
    )
}

export default HelpCard