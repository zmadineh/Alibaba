import React from "react";
import Grid from "@mui/material/Grid";
import {useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function SearchPage() {

    const headerHeight = 70;
    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container flexDirection={"column"} minHeight={'100vh'} alignItems={"center"}>
            <Grid item container bgcolor={"gray"} height={`${headerHeight}px`} position={"fixed"} top={0}>
                HEADER
            </Grid>

            <Grid item container width={'100%'} height={'100%'}
                  sx={{maxWidth: {lg: '1200px', sm: '100%'}}}
                  mt={{xs: `${headerHeight}px`, sm: `${headerHeight+10}px`}}
                  justifyContent={"center"}
            >
                {!mobileMatch &&
                    <Grid item xs={12} sm={4} bgcolor={'blue'}>
                        SIDE FILTER
                    </Grid>
                }

                <Grid item container gap={1} mx={{xs: 0, sm: 1}} flexDirection={"column"} xs={12} sm={7}>

                    <Grid item height={'100px'} bgcolor={'yellow'}> date </Grid>

                    {!mobileMatch &&
                        <Grid item height={'100px'} bgcolor={'red'}> order filter</Grid>
                    }

                    <Grid item height={'800px'} bgcolor={'green'}>
                        tickets
                    </Grid>

                </Grid>
            </Grid>

            {mobileMatch &&
                <Grid item container bgcolor={"gray"} height={'60px'} position={"fixed"} bottom={0}>
                    <Grid item display={"flex"} xs={6}>
                        <Grid item xs={6} bgcolor={'red'}>
                            popover filter
                        </Grid>
                        <Grid item xs={6} bgcolor={'blue'}>
                            dialog filter
                        </Grid>
                    </Grid>
                    <Grid item xs={6} bgcolor={'orange'}>
                        next and prev day
                    </Grid>
                </Grid>
            }
        </Grid>
    );
}