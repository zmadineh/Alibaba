import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

interface propsType{
    open : boolean,
}



export default function Flight_box(props:propsType) {
    const {open} = props;
      if(open){
        return (
            <Stack zIndex={1503} display={'flex'} bgcolor={'white'} sx={{ position: 'absolute', top: '100%', padding: '5px', width: '130px', borderRadius: '8px', border: '1px solid', borderColor: 'grey.200',boxShadow:'18px 18px 46px #e8e8e8' }}>
                <Stack sx={{
                    cursor: 'pointer', padding: '15px',
                    '& .root': { backgroundColor: 'black' }
                }}>
                    <Typography textAlign={'center'} fontWeight={'500'} variant="body1" color={'grey.700'}> پرواز داخلی </Typography>
                </Stack>
                <Divider variant="middle" flexItem sx={{ marginY: '5px' }} />
                <Stack sx={{ cursor: 'pointer', padding: '15px' }}>
                    <Typography textAlign={'center'} fontWeight={'500'} variant="body1" color={'grey.700'}> پرواز خارجی </Typography>
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


