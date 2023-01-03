import { Typography, useScrollTrigger, Slide, AppBar, Grid, Stepper, Step, StepLabel } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import Logo from '../../public/Assets/Images/desktop_header/logo_deskNav.svg'
import Logo1 from '../../public/Assets/Images/desktop_header/logo_deskNav1.svg'
interface Props {
    children: React.ReactElement;
}
const steps = ['انتخاب بلیط','مشخصات مسافران', 'تایید اطلاعات'];

function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function HeaderOnconfir(props: { res: boolean, activeStep: number, setActiveStep: Dispatch<SetStateAction<number>> }) {
    // if (props.res == true) {
        return (
            <HideOnScroll>
                <AppBar >
                    <Grid zIndex={1501}>
                        <Grid container direction={'column'} width={'100%'} padding={'0 24px'} bgcolor={'#ffffff'} justifyContent={'center'} sx={{
                            boxShadow: '0px 0px 5px 3px #0000000d'
                        }}>
                            <Grid item display={'flex'} gap={1} justifyContent={'flex-start'} alignItems={'center'} height={'64px'} paddingX={'24px'} >
                                <Logo />
                                <Grid container direction={'column'} alignItems={'center'} sx={{
                                    width: 'auto',
                                    display: 'flex'
                                }}>
                                    <Logo1 />
                                    <Typography fontWeight={'400'} sx={{ color: 'grey.700', fontSize: '.625rem', paddingTop: '4px' }}> خرید بلیط، هتل، تور </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{
                                display:'flex',
                                justifyContent:'center'
                            }}>
                                <Grid sx={{
                                    paddingY:'1rem',
                                    paddingX: {
                                        xs : 'none',
                                        md : '1rem'
                                    },
                                    width: {
                                        lg: '1200px',
                                        md: '820px',
                                        xs: '100%'
                                    },
                                }}>
                                    <Stepper activeStep={props.activeStep} alternativeLabel>
                                        {steps.map((label: string, index: number) => {
                                            return (
                                                <Step key={index} >
                                                    <StepLabel>
                                                        <Typography sx={{
                                                            fontSize:{
                                                                xs:'10px',
                                                                sm:'13px'
                                                            }
                                                        }}>{label}</Typography>
                                                    </StepLabel>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </AppBar>
            </HideOnScroll>
        )
    // } else {
    //     return (
    //         <></>
    //     )
    // }
}