import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useState,useEffect } from 'react'
import Footer from '../../components/layout/Footer';
import { useRouter } from 'next/router';
import Steps from '../../components/confirmation-page/Steps';
import HeaderOnconfir from "../../components/desktop_header/HeaderOnconfir";
import { getTrip } from '../../data/database/trips.data';
import { filterd_TripData } from '../../data/tickets_data/DataTickets';

export default function Confirmation() {
    const [activeStep, setActiveStep] = useState(0);
    const [information, setInformation] = useState<filterd_TripData>();
    const [numPass,setNumPass] = useState<number>(0)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const router = useRouter();
    let numPass1:number = 0;
    let type_id1:number=0;
    useEffect(() => {
        const fetchData = async (index1:number,index2:number) => {
            await getTrip(index1, index2).then((a) => {
                setInformation(a)
            }).catch(() => { console.log('error from steps') });
        }
        if(router.isReady){
            const {trip,numPass,type_id} = router.query;
            setNumPass(Number(numPass));
            console.log('numpass1 is : ',numPass1);
            type_id1 = Number(type_id);
            fetchData(Number(trip), Number(type_id));
         }
    }, [router.isReady])
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    return (
        <>
            <HeaderOnconfir res={matches} activeStep={activeStep} setActiveStep={setActiveStep}/>
            <Grid height={'150px'}></Grid>
            <Grid padding={'48px 0'}>
                <Steps res={matches} activeStep={activeStep} setActiveStep={setActiveStep} information={information} numPass={numPass} type_id={type_id1}/>
            </Grid>
        

            <Footer/>
        </>
    )
}