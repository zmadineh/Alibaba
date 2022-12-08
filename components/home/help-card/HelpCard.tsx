import React from 'react'

//material
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';


//data
import { hlepCardData } from './../../../data/help-card-data';
import { fontFamily } from '@mui/system';


const HelpCard = () => {

    return (
        <Grid xs={12} container justifyContent={"center"} alignItems={"center"} marginBottom={3} >
            <Grid container item sx={{ border: 2, borderRadius: '10px 10px 10px 10px', borderColor: 'divider', bgcolor: 'common.white', maxWidth: "1000px" }} bgcolor={"common.white"} p={2} gap={2} justifyContent={"center"} alignItems={"center"} boxShadow={1}>
                {hlepCardData.map(item => (
                    <Grid key={item.id} item xs={12} md={3.5} display={"flex"} gap={2} alignItems={"center"} sx={{ flexDirection: { xs: "row", md: "column" } }} p={"2px"}>
                        <Grid item sx={{ color: 'info.300', backgroundColor: 'info.100' }} borderRadius={"28px"} py={"8px"} px={"9px"}>
                            {item.icon}
                        </Grid>
                        <Grid item className='taypo' display={"flex"} flexDirection={"column"} sx={{ textAlign: { sx: "right", md: "center" } }} gap={1}>
                            <Grid item sx={{ color: 'grey.600' }} >
                                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 16 }} > {item.title}</Typography>
                            </Grid>
                            <Grid item sx={{ color: 'grey.500' }}>
                                <Typography variant='h6' sx={{ fontWeight: 400, fontSize: 14 }}>{item.body}</Typography>
                            </Grid>
                            <Grid item  >
                                <Button sx={{ color: "secondary.300", borderRadius: "10px", "&:hover": { backgroundColor: "secondary.100" } }}>
                                    <Grid item> <Typography variant='h6' sx={{ marginBottom: "14px", fontWeight: 400, color: 'secondary.main', fontSize: 14 }}  >{item.body2}</Typography></Grid>
                                    <Grid item sx={{ color: 'secondary.main' }}> {item.icon2}</Grid>
                                </Button>

                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid >
    )
}

export default HelpCard