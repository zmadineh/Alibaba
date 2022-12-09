import React from 'react'
import Link from 'next/link';
//material ui

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//data
import { listType } from './../../../../data/listOption';

function HederMobileMain({ item }: { item: listType }) {
    return (
        <Grid key={item.id} xs={12} item display={"flex"} justifyContent={"flex-start"} alignItems={"center"} sx={{ border: "1px solid", borderColor: 'grey.200' }}>
            <Button variant='Button1' >
                <Link href={item.href} >
                    <Grid display={"flex"} sx={{ paddingRight: 2, color: 'grey.700' }} gap={1} alignItems={"center"}>
                        <Grid item >
                            {item.icon}
                        </Grid>
                        <Grid item sx={{ marginBottom: "5px" }}>
                            <Typography variant='h6' sx={{ textDecoriarion: "none solid grey.700" }}><strong>{item.title}</strong></Typography>
                        </Grid>
                    </Grid>
                </Link>
            </Button>
        </Grid>
    )
}

export default HederMobileMain