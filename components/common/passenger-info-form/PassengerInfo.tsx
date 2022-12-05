import React, { useState } from 'react'

import PassengerIcon from '../../../public/Assets/Images/common/passenger-info/PassengerIcon.svg'

import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import Divider from '@mui/material/Divider';
import  Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button/Button';


type Props = {}

const PassengerInfo = (props: Props) => {
        const [form,setForm]=useState<any>({
             firstname:'',
             lastName:'',
             gender:'مرد',
             phone:'',
             idCode:''

        })

        const handleChange = (e:any)=>{
                setForm({...form,[e.target.name]:e.target.value})
        }
        const handleSubmit = (e:any)=>{
                e.preventdefault()

        }
  return (
        <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Grid item container display={'flex'} md={11} sm={12} m={2} border={2}borderColor={'divider'}borderRadius={2}>
                        <Grid item display={'inline-flex'} color={'grey.600'} py={2}>
                                {/* <span style={{height:'48',width:'8px',backgroundColor:'#4b5259',borderRadius:'2px 0 0 2px'}}></span> */}
                                <Divider sx={{height:'48',width:'8px',backgroundColor:'#4b5259',borderRadius:'0px 2px 2px 0px'}}/>
                                <PassengerIcon/>
                                <Typography variant={'h5'}>
                                        {'مشخصات مسافر'}
                                </Typography>
                        </Grid>
                        <Grid item container display={'flex'}  p={2}>
                                <form onSubmit={handleSubmit}>
                                        <TextField color='secondary' sx={{margin:'8px',height:'48px',width:'264px'}} type={'text'} name='firstName' label={'نام'}value={form.firstName} onChange={handleChange}/>
                                        <TextField color='secondary' sx={{margin:'8px',height:'48px',width:'264px'}} type={'text'} name='lastName' label={'نام خانوادگی'}value={form.lastName} onChange={handleChange}/>
                                        <Select
                                                name='gender'
                                                label={'جنسیت'}
                                                value={form.gender} 
                                                onChange={handleChange}
                                                sx={{margin:'8px',height:'56px',width:'264px'}}
                                                color='secondary'
                                                >
                                                <MenuItem color='secondary' value={'مرد'}>مرد</MenuItem>
                                                <MenuItem color='secondary' value={'زن'}>زن</MenuItem>
                                                
                                        </Select>
                                        <TextField color='secondary' sx={{margin:'8px',height:'48px',width:'264px'}}  type={'text'} name='phone' label={'شماره ضروری'}value={form.phone} onChange={handleChange}/>
                                        <TextField color='secondary' sx={{margin:'8px',height:'48px',width:'264px'}}  type={'text'} name='idCode' label={'کد ملی'}value={form.idCode} onChange={handleChange}/>
                                        <Button sx={{margin:'8px',height:'56px',width:'264px'}} variant="contained" color="secondary" type={'submit'}>تایید و ادامه خرید</Button>
                                </form>
                        </Grid>
                </Grid>
         </Grid>
  )
}

export default PassengerInfo