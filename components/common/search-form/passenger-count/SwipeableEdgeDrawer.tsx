import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PassengerCountContent from "./PassengerCountContent";
import {passengersCount} from "../../../../model/passengerCount.type";
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
    // const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        props.setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            {/*<CssBaseline />*/}
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

                    <PassengerCountContent count={props.count} setCount={props.setCount} open={props.open} setOpen={props.setOpen} />

                    <Button sx={{backgroundColor: 'secondary.700', width: '80%', height: '40px', borderRadius: '10px'}}
                            onClick={() => props.setOpen(false)}>
                        تایید
                    </Button>
                </Grid>

            </SwipeableDrawer>
        </Root>
    );
}