import React, { Dispatch } from 'react'


//material ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//data
import { listType } from './../../../../data/listOption';
interface HederMobileMainPtops {
    item: listType;
    setPage: Dispatch<React.SetStateAction<number>>,
}

const HederMobileScrll = ({ item, setPage }: HederMobileMainPtops): JSX.Element => {
    return (
        <Grid item color={"common.black"} alignItems={"center"}>

            <Button variant='Button1' style={{ color: "black" }} onClick={() => setPage(item.id)}>
                {item.icon}
            </Button>

        </Grid>
    )
}

export default HederMobileScrll