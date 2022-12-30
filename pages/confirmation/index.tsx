import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react'
import Footer from '../../components/layout/Footer';



import HeaderOnconfir from "../../components/desktop_header/HeaderOnconfir";
export default function Confirmation() {
    const [activeStep, setActiveStep] = useState(0)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    return (
        <>
            <HeaderOnconfir res={matches} activeStep={activeStep} setActiveStep={setActiveStep}/>

        

            <Footer/>
        </>
    )
}