import React,{useEffect, useState} from 'react'

import Image from 'next/image'

import  Grid  from '@mui/material/Grid'
import SvgIcon from '@mui/material/SvgIcon'

import footer1 from '../../public/Assets/Images/footer/footer1.png'
import footer2 from '../../public/Assets/Images/footer/footer2.png'
import footer3 from '../../public/Assets/Images/footer/footer3.png'
import AlibabaIcon from '../../public/Assets/Images/footer/AlibabaIcon.png'
import namad1 from '../../public/Assets/Images/footer/namad1.png'
import namad2 from '../../public/Assets/Images/footer/namad2.png'
import namad3 from '../../public/Assets/Images/footer/namad3.png'
import namad4 from '../../public/Assets/Images/footer/namad4.png'
import namad5 from '../../public/Assets/Images/footer/namad5.png'
import namad6 from '../../public/Assets/Images/footer/namad6.png'
import AparatIcon from '../../public/Assets/Images/footer/AparatIcon.svg'
import InstagramIcon from '../../public/Assets/Images/footer/InstagramIcon.svg'
import LinkedinIcon from '../../public/Assets/Images/footer/LinkedinIcon.svg'
import TelegramIcon from '../../public/Assets/Images/footer/TelegramIcon.svg'
import TwitterIcon from '../../public/Assets/Images/footer/TwitterIcon.svg'
import YoutubeIcon from '../../public/Assets/Images/footer/YoutubeIcon.svg'



import {  Divider, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { render } from 'react-dom'
type Props = {}

const Footer = (props: Props) => {
   
        const [open, setOpen] =useState(false);
        const [open1, setOpen1] =useState(false);
        const [open2, setOpen2] =useState(false);
      
        const handleClick = (id:number) => {
            setFooterArr2(footerArr2.map(item => item.id === id ?{...item, open:(!item.open)}:{...item}))
            
           
           console.log(footerArr2); 
        };

    const footerArr1 =[
        {id:0,image:footer1,title:'رتبه یک سفر',subtitle:'معتبرترین عرضه کننده محصولات گردشگری در ایران'},
        {id:1,image:footer2,title:'همسفر هر سفر',subtitle:'ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)'},
        {id:2,image:footer3,title:'همسفر همه لحظات سفر',subtitle:'پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر'},
    ]
    const [footerArr2,setFooterArr2]=useState([
        {id:0,title:'علی بابا',open:false,sub:[
                {id:0,title:'درباره ما'},
                {id:1,title:'تماس با ما'},
                {id:2,title:'چرا علی بابا'},
                {id:3,title:'علی بابا پلاس'},
                {id:4,title:'بیمه مسافرتی'},
                {id:5,title:'مجله علی بابا'}
        ]},
        {id:1,title:'خدمات مشتریان',open:false,sub:[
                {id:0,title:'مرکز پشتیبانی'},
                {id:1,title:'راهنما خرید'},
                {id:2,title:'راهنما استرداد'},
                {id:3,title:'قوانین و مقررات'},
                {id:4,title:'پرسش و پاسخ'}
        ]},
        {id:2,title:'اطلاعات تکمیلی',open:false,sub:[
                {id:0,title:'باشگاه همسفران'},
                {id:1,title:'فروش سازمانی'},
                {id:2,title:'همکاری با آژانس ها'},
                {id:3,title:'فرصت شغلی'}

        ]}
    ])

    const footerArr3=[
        {id:0,image:namad1},
        {id:1,image:namad2},
        {id:2,image:namad3},
        {id:3,image:namad4},
        {id:4,image:namad5},
        {id:5,image:namad6}
    ]
    const footerIcon=[
            {id:0,icon:<TelegramIcon  />},
            {id:1,icon:<YoutubeIcon   />},
            {id:2,icon:<TwitterIcon   />},
            {id:3,icon:<AparatIcon    />},
            {id:4,icon:<InstagramIcon />},
            {id:5,icon:<LinkedinIcon  />},
    ]
  return (
    <Grid container display={'flex'} direction={'column'}  justifyContent={'center'} alignItems={'center'} borderTop={1} borderColor={'divider'}>
            <Grid item container display={'flex'} direction={{xs:'column',md:'row'}} xs={12}maxWidth={'1126px'} width={{md:'900px',xs:'auto'}} py={8}>
                    {footerArr1.map((item:any)=>(
                        <Grid item container display={'flex'} flexDirection={{xs:'column',md:'row'}} alignItems={{xs:'center',md:'center'}} md={4}xs={12}  justifyContent={{xs:'center',md:'flex-start'}} key={item.id}>
                            <Grid  item md={4}xs={12}p={1} >
                            <Image src={item.image}alt='' width={64} height={64}/>
                            </Grid>
                            <Grid item md={8}xs={12}p={1}>
                                    <Typography textAlign={{xs:'center',md:'start'}} variant={'h6'}>{item.title}</Typography>
                                    <Typography variant={'body1'}fontSize={'16px'} color={'grey.600'}>{item.subtitle}</Typography>
                            </Grid>
                        </Grid>
                    ))}
            </Grid>
            
            <Grid item container xs={10} display={{xs:'none',md:'flex'}} justifyContent={'center'}pt={4} direction={{xs:'column',md:'row'}}borderTop={1} borderColor={'divider'}maxWidth={'1126px'}width={'auto'}py={8}>
                    <Grid item container xs={12} md={6} display={'inline-flex'}>
                        {footerArr2.map((item:any)=>(
                            <Grid key={item.id} item xs={4} >
                                    <Typography variant={'body1'} fontWeight={'bold'} px={1} py={2}>{item.title}</Typography>
                                    {item.sub.map((item:any)=>(
                                        <Typography sx={{cursor:'pointer'}} key={item.id} variant={'body2'} p={1}>{item.title}</Typography>
                                    ))}
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item container xs={12} md={6} display={'flex'} direction={'column'} alignItems={'flex-end'}>
                            <Grid  item>
                                
                                    <Image src={AlibabaIcon}alt='' width={168}/>
                                
                            </Grid>
                            <Grid item py={1}>
                                <Typography>تلفن پشتیبانی: ۰۲۱-۴۳۹۰۰۰۰۰</Typography>
                            </Grid>
                            <Grid item py={1} justifyContent={'flex-end'}>
                                <Typography variant={'body2'}>دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1</Typography>
                            </Grid>
                            <Grid item container pt={5} display={'flex'}alignItems={'center'}justifyContent={'flex-end'}>
                                {footerArr3.map((item:any)=>(
                                    <Grid key={item.id} item border={1}borderColor={'divider'}borderRadius={2}my={2}mr={1}maxHeight={72}maxWidth={72}width={'auto'}sx={{cursor:'pointer'}}justifyContent={'center'} alignItems={'center'}>
                                        <Image src={item.image}alt=''width={64}/>
                                    </Grid>
                                ))}
                            </Grid>
                    </Grid>
            </Grid>
            <Grid item container className='collapseitem' xs={12} display={{xs:'flex',md:'none'}} direction={'column'}width={'100%'} maxWidth={'900px'}>
                        {footerArr2.map((item:any)=>(
                            <List  key={item.id}>
                                <ListItemButton onClick={()=>handleClick(item.id)}>
                                    <ListItemText primary={item.title} />
                                    {item.open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={item.open}>
                                    
                                    {item.sub?.map((item:any)=>(
                                        <List key={item.id} component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary={item.title} />
                                            </ListItemButton>
                                        </List>
                                    ))}
                                    
                                </Collapse>
                            </List>
                        ))}
            </Grid>
            <Grid item container xs={10} display={'flex'} justifyContent={'center'}pt={4} flexDirection={{xs:'column-reverse',md:'row'}}borderTop={1} borderColor={'divider'}maxWidth={'1126px'}width={'auto'}py={8}>
                        <Grid item xs={12}md={6} justifyContent={{md:'flex-end',xs:'center'}}>
                                    <Typography variant='caption'color={'grey.500'}>
                                        {'کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 1.185.4)'}
                                    </Typography>
                        </Grid>
                        <Grid item xs={12}md={6} container color={'grey.500'} display={'flex'} justifyContent={{md:'flex-end',xs:'center'}} alignItems={'center'}>
                                    {footerIcon.map((item:any)=>(
                                        <Grid key={item.id} item mx={2} sx={{cursor:'pointer'}}>
                                            {item.icon}
                                        </Grid>
                                    ))}
                        </Grid>
            </Grid>
    </Grid>
  )
}

export default Footer