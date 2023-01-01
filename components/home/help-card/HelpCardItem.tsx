import React from 'react'
import Link from 'next/link';
//materil-ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//data
import { helpCardType } from "../../../data/help-card-data"


const HelpCardItem = ({ item }: { item: helpCardType }): JSX.Element => {
    return (
        <Grid item xs={12} md={3.5} display={"flex"} gap={2} alignItems={"center"} sx={{ flexDirection: { xs: "row", md: "column" } }} p={"2px"}>
            <Grid item sx={{ color: 'info.300', backgroundColor: 'info.100',paddingTop:"6px",paddingBottom:"2px", paddingRight:"7px" , paddingLeft:"7px" }} borderRadius={"28px"} >
                {item.icon}
            </Grid>
            <Grid item display={"flex"} flexDirection={"column"} sx={{ textAlign: { sx: "right", md: "center" } }} gap={1}>
                <Grid item sx={{ color: 'grey.600' }} >
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 16 }} > {item.title}</Typography>
                </Grid>
                <Grid item sx={{ color: 'grey.500' }}>
                    <Typography variant='h6' sx={{ fontWeight: 400, fontSize: 14 }}>{item.body}</Typography>
                </Grid>
                <Grid item  >
                    <Link href={item.href}>
                        <Button sx={{ color: "secondary.300", borderRadius: "10px", "&:hover": { backgroundColor: "secondary.100" } }}>
                            <Grid item> <Typography variant='h6' sx={{ marginBottom: "14px", fontWeight: 400, color: 'secondary.main', fontSize: { xs: 12, md: 14 } }}  >{item.body2}</Typography></Grid>
                            <Grid item sx={{ color: 'secondary.main' }}> {item.icon2}</Grid>
                        </Button>
                    </Link>


                </Grid>
            </Grid>
        </Grid>
    )
}

export default HelpCardItem