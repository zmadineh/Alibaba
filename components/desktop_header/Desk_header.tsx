import { Typography, List, ListItem, ListItemButton, Divider, SvgIcon, useScrollTrigger, Slide, AppBar, Grid } from "@mui/material";
import { useState } from "react";
import Flight_box from "./Flight_box";
import Logo from '../../public/Assets/Images/desktop_header/logo_deskNav.svg'
import Logo1 from '../../public/Assets/Images/desktop_header/logo_deskNav1.svg'
import LoginHeader from "./LoginHeader";
import Router from 'next/router'


interface Props {
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const handleclick = (a:number) => {
    Router.push({
        pathname: '/',
        query: { index: a },
    })
}

export default function Desk_header(props: { res: boolean }) {
    const [open, setOpen] = useState(false)
    if (props.res == true) {
        const handleClick = () => {
            setOpen(!open);
        };
        return (
            <HideOnScroll>
                <AppBar >
                    <Grid zIndex={1501}>
                        <Grid position={'absolute'} zIndex={1502} display={open ? 'flex' : 'none'} width={'100vw'} height={'100vh'} onClick={handleClick} sx={{ backgroundColor: 'transparent' }}></Grid>
                        <Grid display={'flex'} width={'100%'} padding={'0 24px'} bgcolor={'#ffffff'} justifyContent={'space-between'} height={'64px'} sx={{
                            boxShadow: '0px 0px 5px 3px #00000036'
                        }}>

                            <Grid display={'flex'} gap={6}>
                                <Grid display={'flex'} gap={1} justifyContent={'center'} alignItems={'center'}>
                                    <Logo />
                                    <Grid display={'flex'} alignItems={'center'} sx={{
                                        display: {
                                            xs: 'none',
                                            lg: 'flex'
                                        }
                                    }}>
                                        <Logo1 />
                                        <Typography fontWeight={'400'} sx={{ color: 'grey.700', fontSize: '.625rem', paddingTop: '4px' }}> خرید بلیط، هتل، تور </Typography>
                                    </Grid>
                                </Grid>
                                <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
                                    display: {
                                        xs: 'none',
                                        md: 'flex'
                                    }
                                }}>
                                    <List sx={{ display: 'flex' }}>
                                        <ListItem sx={{ paddingX: '4px' }}>
                                            <ListItemButton onClick={handleClick} sx={{ position: 'relative' }}>
                                                <Typography fontWeight={'500'} variant="body1" color={'grey.700'} marginRight='10px'> بلیط </Typography>
                                                <SvgIcon sx={{ color: 'grey.700', width: "16px", height: "16px" }}><path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path></SvgIcon>
                                            </ListItemButton>
                                            <Flight_box open={open} />
                                        </ListItem>
                                        <Divider orientation="vertical" variant="middle" flexItem sx={{ marginY: '15px' }} />
                                        <ListItem sx={{ paddingX: '4px' }}>
                                            <ListItemButton onClick={()=>handleclick(2)}>
                                                <Typography fontWeight={'500'} variant="body1" color={'grey.700'}> قطار </Typography>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider orientation="vertical" variant="middle" flexItem sx={{ marginY: '15px' }} />
                                        <ListItem sx={{ paddingX: '4px' }}>
                                            <ListItemButton onClick={()=>handleclick(3)}>
                                                <Typography fontWeight={'500'} variant="body1" color={'grey.700'}> اتوبوس </Typography>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                            <Grid display={'flex'} gap={3} justifyContent={'center'} alignItems={'center'}>
                                <LoginHeader />

                                {/* <Button sx={{ padding: '8px 12px' }}>
                            <SvgIcon sx={{ color: 'grey.700' }}><path d="M17.25 12.75A3.75 3.75 0 0 1 21 16.5v3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V16.5a3.75 3.75 0 0 1 3.75-3.75h10.5Zm0 1.5H6.75A2.25 2.25 0 0 0 4.5 16.5v3h15v-3a2.25 2.25 0 0 0-2.118-2.246l-.132-.004ZM12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 1 1 0-9Zm0 1.5a3 3 0 1 0-.001 5.999A3 3 0 0 0 12 4.5Z" fill-rule="evenodd"></path></SvgIcon>
                            <Typography marginLeft={1} variant="body1" color={'grey.700'}> ورود یا ثبت‌نام </Typography>
                        </Button> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </AppBar>
            </HideOnScroll>
        )
    } else {
        return (
            <></>
        )
    }
}