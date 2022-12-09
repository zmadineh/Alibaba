import React from 'react'
import Link from 'next/link';

//material ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//data
import { listType } from './../../../../data/listOption';

const HederMobileScrll = ({ item }: { item: listType }): JSX.Element => {
    return (
        <Grid item key={item.id} color={"common.black"} alignItems={"center"}>
            <Link href={item.href}>
                <Button variant='Button1' style={{ color: "black" }}>
                    {item.icon}
                </Button>
            </Link>
        </Grid>
    )
}

export default HederMobileScrll