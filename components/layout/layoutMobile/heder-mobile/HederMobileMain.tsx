import React, { Dispatch } from 'react'

//material ui

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//data
import { listType } from '../../../../data/listOption';

interface HeaderMobileMainProps {
    item: listType;
    setPage: Dispatch<React.SetStateAction<number>>;
    setOpenDialog: Dispatch<React.SetStateAction<boolean>>,
}

function HederMobileMain({ item, setPage, setOpenDialog }: HeaderMobileMainProps): JSX.Element {
    const onClick = (id: number) => {
        setPage(item.id)
        setOpenDialog(true)
    }

    return (
        <Grid key={item.id} xs={12} item display={"flex"} justifyContent={"flex-start"} alignItems={"center"} sx={{ border: "0.1px solid", borderColor: 'divider' }}>
            <Button variant='Button1' onClick={() => onClick(item.id)} >

                <Grid display={"flex"} sx={{ paddingRight: 1, color: 'grey.700' }} gap={1} alignItems={"center"}>
                    <Grid item >
                        {item.icon}
                    </Grid>
                    <Grid item sx={{ marginBottom: "8px" }}>
                        <Typography variant='h6' sx={{ textDecoration: "none solid grey.700", fontSize: 16 }}><strong>{item.title}</strong></Typography>
                    </Grid>
                </Grid>

            </Button>
        </Grid>
    )
}

export default HederMobileMain