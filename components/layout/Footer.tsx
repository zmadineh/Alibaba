import React from 'react'

import Image from 'next/image'

import  Grid  from '@mui/material/Grid'

import footer1 from '../../public/Assets/Images/footer/footer1.png'
import footer2 from '../../public/Assets/Images/footer/footer2.png'
import footer3 from '../../public/Assets/Images/footer/footer3.png'
import { Typography } from '@mui/material'
type Props = {}

const Footer = (props: Props) => {

    const footerArr1 =[
        {id:0,image:footer1,title:'رتبه یک سفر',subtitle:'معتبرترین عرضه کننده محصولات گردشگری در ایران'},
        {id:1,image:footer2,title:'همسفر هر سفر',subtitle:'ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)'},
        {id:2,image:footer3,title:'همسفر همه لحظات سفر',subtitle:'پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر'},
    ]
  return (
    <Grid container display={'flex'} direction={'column'} xs={12} alignItems={'center'}>
            <Grid item container display={'flex'} direction={{xs:'column',md:'row'}} justifyContent={'center'} md={10} xs={12}>
                <Grid item container display={'flex'} direction={{xs:'column',md:'row'}} >
                    {footerArr1.map((item:any)=>(
                        <Grid item container display={'flex'} key={item.id}>
                            <Grid  item p={2}>
                            <Image src={item.image}alt='' width={80} height={80}/>
                            </Grid>
                            <Grid item py={2}px={2}maxWidth={'250px'}>
                                    <Typography variant={'h6'}>{item.title}</Typography>
                                    <Typography variant={'body2'} color={'grey.600'}>{item.subtitle}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                    
                </Grid>
            </Grid>
    </Grid>
  )
}

export default Footer