import React, { Dispatch } from 'react'


//material ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//data
import { listType } from './../../../../data/listOption';
interface HederMobileMainPtops {
    item: listType;
    setPage: Dispatch<React.SetStateAction<number>>,
    setOpenDialog: Dispatch<React.SetStateAction<boolean>>,
}

const HederMobileScrll = ({ item, setPage, setOpenDialog }: HederMobileMainPtops): JSX.Element => {

    const onClick = (id: number) => {
        setPage(item.id)
        setOpenDialog(true)
    }

    return (
        <Grid item color={"common.black"} alignItems={"center"}>

            <Button variant='Button1' style={{ color: "black" }} onClick={() => onClick(item.id)}>
                {item.icon}
            </Button>

        </Grid>
    )
}

export default HederMobileScrll