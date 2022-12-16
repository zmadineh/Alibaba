import React, { Dispatch } from 'react'

//material ui

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//data
import { listType } from './../../../../data/listOption';

interface HederMobileMainPtops{
    item:listType;
    setPage:Dispatch<React.SetStateAction<number>>,
}

function HederMobileMain({ item ,setPage}:HederMobileMainPtops): JSX.Element {
    return (
        <Grid key={item.id} xs={12} item display={"flex"} justifyContent={"flex-start"} alignItems={"center"} sx={{ border: "0.1px solid", borderColor: 'divider' }}>
            <Button variant='Button1' onClick={()=>setPage(item.id)} >

                <Grid display={"flex"} sx={{ paddingRight: 1, color: 'grey.700' }} gap={1} alignItems={"center"}>
                    <Grid item >
                        {item.icon}
                    </Grid>
                    <Grid item sx={{ marginBottom: "8px" }}>
                        <Typography variant='h6' sx={{ textDecoriarion: "none solid grey.700", fontSize: 16 }}><strong>{item.title}</strong></Typography>
                    </Grid>
                </Grid>

            </Button>
        </Grid>
    )
}

export default HederMobileMain