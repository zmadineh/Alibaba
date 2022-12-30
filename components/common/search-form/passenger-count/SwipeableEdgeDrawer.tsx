import * as React from 'react';

import PassengerCountContent from "./PassengerCountContent";
import {passengersCount} from "../../../../model/form/passengerCount.type";

import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import {Divider} from "@mui/material";
import Grid from "@mui/material/Grid";

const drawerBleeding = 56;

interface Props {
    count: passengersCount,
    setCount: React.Dispatch<React.SetStateAction<passengersCount>>,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    window?: () => Window;
    handleClose: () => void,
}

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

export default function SwipeableEdgeDrawer(props: Props) {
    const { window } = props;

    const toggleDrawer = (newOpen: boolean) => () => {
        props.setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(40% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />

            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={props.open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    zIndex: 2000,
                    '& .MuiPaper-root': {
                        borderRadius: '10px 10px 0 0'
                    }
                }}
            >
                <Grid
                    container
                    flexDirection={"column"}
                    gap={1}
                    alignItems={"center"}
                >
                    <Grid container alignItems={"center"}>
                        <IconButton onClick={() => props.setOpen(false)}><Close /></IconButton>
                        <Typography>نوع و تعداد مسافران</Typography>
                    </Grid>

                    <Divider />

                    <Grid container width={'90%'}>
                        <PassengerCountContent count={props.count} setCount={props.setCount} open={props.open} setOpen={props.setOpen} />

                        <Button sx={{backgroundColor: 'secondary.main', color: '#fff', width: '100%', height: '40px', borderRadius: '10px'}}
                                onClick={() => props.handleClose()}>
                            تایید
                        </Button>
                    </Grid>
                </Grid>

            </SwipeableDrawer>
        </Root>
    );
}