import React, { ReactNode } from 'react'
//components
import HeaderMobile from './HeaderMobile';

//material-ui
import Grid from '@mui/material/Grid'
import FooterMobile from './FooterMobile';


interface LayoutMobile {
    children: ReactNode;
}

const LayoutMobile = ({ children }: LayoutMobile) => {
    return (
        <Grid xs={12} container gap={2}>
            <Grid container item>
                <HeaderMobile />
            </Grid>
            <Grid container item>
                {children}
            </Grid>
            <Grid container item>
                <FooterMobile />
            </Grid>
        </Grid>
    )
}

export default LayoutMobile