import React from 'react'
import Link from 'next/link';

//material ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//data
import { listType } from './../../../../data/listOption';

const HederMobileScrll = ({ item,setPage }: { item: listType }): JSX.Element => {
    return (
        <Grid item color={"common.black"} alignItems={"center"}>
                <Button variant='Button1' style={{ color: "black" }} onClick={()=>{setPage(item.id)}}>
                    {item.icon}
                </Button>
        </Grid>
    )
}

export default HederMobileScrll