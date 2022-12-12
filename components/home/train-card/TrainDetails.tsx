import React from 'react'
//material ui
import Grid from '@mui/material/Grid'
//data
import TrainCardOne from './train-cards/TrainCardOne'
import TrainCardTwo from './train-cards/TrainCardTwo'
import TrainInformationOne from './Train-information/TrainInformationOne'
import { TrainInformationTwoData } from '../../../data/traincards/train-informaition'
import { TrainInformationOneData } from '../../../data/traincards/train-informaition'
import { TrainInformationThreeData } from '../../../data/traincards/train-informaition'
import { TrainInformationFourData } from '../../../data/traincards/train-informaition'
import TrainCardFour from './train-cards/TrainCardFour'
import TrainCardThree from './train-cards/TrainCardThree';

const TrainDetails = () => {
    return (
        <Grid>
            <Grid>{TrainInformationOneData.map((item, index) => <TrainInformationOne key={index} item={item} />)}</Grid>
            <Grid> <TrainCardOne /></Grid>
            <Grid>{TrainInformationTwoData.map((item, index) => <TrainInformationOne key={index} item={item} />)}</Grid>
            <Grid><TrainCardTwo /></Grid>
            <Grid>{TrainInformationThreeData.map((item, index) => <TrainInformationOne key={index} item={item} />)}</Grid>
            <Grid> <TrainCardThree /></Grid>
            <Grid>{TrainInformationFourData.map((item, index) => <TrainInformationOne key={index} item={item} />)}</Grid>
            <Grid><TrainCardFour /></Grid>

        </Grid>
    )
}

export default TrainDetails