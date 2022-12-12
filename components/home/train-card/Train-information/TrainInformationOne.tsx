import { Grid, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button/';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { trainInformationType } from './../../../../model/train-information-type';



function TrainInformationOne({ item }: { item: trainInformationType }) {
    const [dispaly, setDisplay] = useState("none")

    const handleclickOpen = () => {
        setDisplay("flex")
    }
    const handleclickclose = () => {
        setDisplay("none")
    }

    return (
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3} >
            <Grid item container xs={12} sx={{ maxWidth: { md: '1200px' }, bgcolor: 'common.white' }} justifyContent={"flex-start"} p={1} >
                <Grid item>
                    <Grid item>
                        <Typography sx={{ color: "grey.800", fontSize: "1.4rem", fontWeight: 700, marginY: "0.67rem" }}>{item.title}</Typography>
                        <Typography sx={{ color: "grey.800", fontSize: "1rem", fontWeight: 700, marginY: "0.67rem" }}>{item.title2}</Typography>
                    </Grid>
                    <Grid item><Typography sx={{ color: "grey.600", fontSize: "0.875", fontWeight: 500, }}>{item.body}</Typography></Grid>
                    <Grid item>
                        <Typography sx={{ color: "grey.600", fontSize: "0.875", fontWeight: 500, }}>{item.body2}</Typography>
                        {item.body3 ? <Grid display={dispaly === "flex" ? "none" : "inline-block"}><Button sx={{ color: "secondary.main" }} onClick={handleclickOpen} endIcon={<ArrowDropDownIcon />}>
                            بیشتر بدانید
                        </Button></Grid>
                            : ""}
                    </Grid>
                    <Grid item display={dispaly === "none" ? "none" : "block"}>
                        <Typography sx={{ color: "grey.600", fontSize: "0.875", fontWeight: 500, }}>{item.body3} </Typography>
                        <Button sx={{ color: "secondary.main" }} onClick={handleclickclose} endIcon={<ArrowDropUpIcon />}>
                            بستن
                        </Button>
                    </Grid>
                </Grid>
                <Grid>{item.body4?.map((it, index) => (
                    <ul key={index}>
                        <li><Typography sx={{ color: "grey.600", fontSize: "0.86rem", fontWeight: 500, }}>{it.body}</Typography></li>
                    </ul>
                ))
                }</Grid>
            </Grid>
        </Grid>
    )
}

export default TrainInformationOne