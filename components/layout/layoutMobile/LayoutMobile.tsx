import React, { ReactNode } from 'react'
//components
import HeaderMobile from './HeaderMobile';

//material-ui
import Grid from '@mui/material/Grid'
import FooterMobile from './FooterMobile';


interface LayoutMobile {
    children: ReactNode;
}

const LayoutMobile = ({ children }: LayoutMobile): JSX.Element => {
    return (
        <Grid display={{ xs: 'flex', md: 'none' }} xs={12} item container justifyContent={"center"} alignItems={"center"}>

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