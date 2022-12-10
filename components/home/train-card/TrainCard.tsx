import React from 'react'
import Grid from '@mui/material/Grid';
import TrainItem from './TrainItem';
type Props = {}

function TrainCard({ }: Props) {
    return (
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"} marginBottom={3}>
            <Grid item container xs={12} sx={{ maxWidth: { md: '1000px' }, bgcolor: 'common.white' }} justifyContent={"space-between"} >

                <Grid xs={3.9} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }}>
                    <TrainItem />
                </Grid>
                <Grid xs={3.9} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }}>
                    <TrainItem />
                </Grid>
                <Grid xs={3.9} sx={{ border: 1, borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }}>
                    <TrainItem />
                </Grid>

            </Grid>


        </Grid >
    )
}

export default TrainCard