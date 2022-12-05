import { jsx } from "@emotion/react";
import { Divider, Stack, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction,useRef,useEffect, ReactElement } from "react";
import { JsxElement } from "typescript";

interface propsType{
    open : boolean,
    setOpen : Dispatch<SetStateAction<boolean>>
}

export default function Flight_box(props:propsType):any {
    const {open,setOpen} = props;
    
    // const useOutsideClick = (callback:any) => {
    //     const ref = useRef<HTMLInputElement>();
    //     useEffect(() => {
    //       const handleClick = (event:any) => {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //             console.log('clicked!');
                
    //           callback();
    //         }
    //       };
      
    //       document.addEventListener('click', handleClick, true);
      
    //       return () => {
    //         document.removeEventListener('click', handleClick, true);
    //       };
    //     }, [ref]);
      
    //     return ref;
    //   };
      
      if(open){
        return (
            <Stack display={open ? 'flex' : 'none'} bgcolor={'white'} sx={{ position: 'absolute', top: '100%', padding: '5px', width: '130px', borderRadius: '8px', border: '1px solid', borderColor: 'grey.200',boxShadow:'18px 18px 46px #e8e8e8' }}>
                <Stack sx={{
                    cursor: 'pointer', padding: '15px',
                    '& .root': { backgroundColor: 'black' }
                }}>
                    <Typography textAlign={'right'} fontWeight={'500'} variant="body1" color={'grey.700'}> پرواز داخلی </Typography>
                </Stack>
                <Divider variant="middle" flexItem sx={{ marginY: '5px' }} />
                <Stack sx={{ cursor: 'pointer', padding: '15px' }}>
                    <Typography textAlign={'right'} fontWeight={'500'} variant="body1" color={'grey.700'}> پرواز خارجی </Typography>
                </Stack>
            </Stack>
        )
      }
      else{
        return(
            <></>
        )
      }
    
}


