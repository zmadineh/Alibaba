import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useState,useEffect } from 'react'
import Footer from '../../components/layout/Footer';
import { useRouter } from 'next/router';
import Steps from '../../components/confirmation-page/Steps';
import HeaderOnconfir from "../../components/desktop_header/HeaderOnconfir";

export default function Confirmation() {
    const [activeStep, setActiveStep] = useState(1)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    return (
        <>
            <HeaderOnconfir res={matches} activeStep={activeStep} setActiveStep={setActiveStep}/>
            <Grid height={'150px'}></Grid>
            <Grid padding={'48px 0'}>
                <Steps res={matches} step={activeStep} setStep={setActiveStep}/>
            </Grid>
        

            <Footer/>
        </>
    )
}