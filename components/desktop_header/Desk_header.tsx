import { Button, Typography, Stack, List, ListItem, ListItemButton, Divider } from "@mui/material";
import { useState, useEffect, useRef, RefObject, MutableRefObject } from "react";
import Flight_box from "./Flight_box";
import RegisterIcon from '../../public/Assets/Images/desktop_header/registerIconButtton.svg';
import Logo from '../../public/Assets/Images/desktop_header/logo_deskNav.svg'
import Logo1 from '../../public/Assets/Images/desktop_header/logo_deskNav1.svg'
import DownIcon from '../../public/Assets/Images/desktop_header/downArrow.svg'

const useOutsideClick = (callback:any) => {
    const ref = useRef<HTMLInputElement>();
    useEffect(() => {
      const handleClick = (event:any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            console.log('clicked!');
            
          callback();
        }
      };
  
      document.addEventListener('click', handleClick, true);
  
      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }, [ref]);
  
    return ref;
  };

export default function Desk_header() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickOutside = () => {
        setOpen(false)
    }
    const ref:RefObject<HTMLLIElement> = useOutsideClick(handleClickOutside);
    return (
        <Stack direction={'row'} color={'black'} width={'100%'} padding={'0 24px'} bgcolor={'#ffffff'} justifyContent={'space-between'} height={'64px'} sx={{
            boxShadow: '0px 0px 5px 3px #00000036'
        }}>
            <Stack direction={'row'} gap={6}>
                <Stack gap={1} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Logo />
                    <Stack alignItems={'center'} sx={{
                        display: {
                            xs: 'none',
                            lg: 'flex'
                        }
                    }}>
                        <Logo1 />
                        <Typography fontWeight={'400'} sx={{ fontSize: '.625rem', paddingTop: '4px' }}> خرید بلیط، هتل، تور </Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }}>
                    <List sx={{ display: 'flex' }}>
                        <ListItem ref={ref} sx={{ paddingX: '4px' }}>
                            <ListItemButton onClick={handleClick} sx={{ position: 'relative' }}>
                                <Typography fontWeight={'500'} variant="body1" color={'grey.700'} marginLeft='10px'> بلیط </Typography>
                                <DownIcon color='#2B2F33' />
                            </ListItemButton>
                            <Flight_box open={open} setOpen={setOpen}/>
                        </ListItem>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{ marginY: '15px' }} />
                        <ListItem sx={{ paddingX: '4px' }}>
                            <ListItemButton>
                                <Typography fontWeight={'500'} variant="body1" color={'grey.700'}> قطار </Typography>
                            </ListItemButton>
                        </ListItem>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{ marginY: '15px' }} />
                        <ListItem sx={{ paddingX: '4px' }}>
                            <ListItemButton>
                                <Typography fontWeight={'500'} variant="body1" color={'grey.700'}> اتوبوس </Typography>
                            </ListItemButton>
                        </ListItem>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{ marginY: '15px' }} />
                        <ListItem sx={{ paddingX: '4px' }}>
                            <ListItemButton>
                                <Typography variant="body1" color={'grey.700'}> تور </Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Stack>
            </Stack>
            <Stack gap={3} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <Button sx={{ padding: '8px 12px' }}>
                    <RegisterIcon color='#2B2F33' />
                    <Typography marginRight={1} variant="body1" color={'grey.700'}> ورود یا ثبت‌نام </Typography>
                </Button>
            </Stack>
        </Stack>
    )
}