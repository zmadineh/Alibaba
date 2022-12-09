import React from 'react'
import Link from 'next/link';
//material ui

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//data
import { listType } from './../../../../data/listOption';

function HederMobileMain({ item }: { item: listType }): JSX.Element {
    return (
        <Grid key={item.id} xs={12} item display={"flex"} justifyContent={"flex-start"} alignItems={"center"} sx={{ border: "0.1px solid", borderColor: 'divider' }}>
            <Button variant='Button1' >
                <Link href={item.href} >
                    <Grid display={"flex"} sx={{ paddingRight: 2, color: 'grey.700' }} gap={1} alignItems={"center"}>
                        <Grid item >
                            {item.icon}
                        </Grid>
                        <Grid item sx={{ marginBottom: "8px" }}>
                            <Typography variant='h6' sx={{ textDecoriarion: "none solid grey.700", fontSize: 16 }}><strong>{item.title}</strong></Typography>
                        </Grid>
                    </Grid>
                </Link>
            </Button>
        </Grid>
    )
}

export default HederMobileMain