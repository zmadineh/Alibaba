import React, { useState ,Dispatch ,SetStateAction} from 'react'

import PassengerIcon from '../../../public/Assets/Images/common/passenger-info/PassengerIcon.svg'

import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button/Button';
import { formType } from '../Steps';


interface PassengerInfo  {
        forms:Array<formType>,
        setForms:Dispatch<SetStateAction<Array<formType>>>,
        setActiveStep:Dispatch<SetStateAction<number>>,
}

const PassengerInfo = (props: PassengerInfo) => {
        const [form,setForm]=useState<formType>({
             firstName:'',
             lastName:'',
             gender:'مرد',
             phone:'',
             idCode:''

        })
        const input =[
                {id:0,name:'firstName',label:'نام' , value:form.firstName},
                {id:1,name:'lastName',label:'نام خانوادگی' , value:form.lastName},
                {id:2,name:'phone',label:'شماره ضروری' , value:form.phone},
                {id:3,name:'idCode',label:'کد ملی' , value:form.idCode},
        ]

        const handleChange = (e:any)=>{
                
                setForm({...form,[e.target.name]:e.target.value})
        }
        const handleSubmit = (e:any)=>{
                e.preventDefault()
                props.setForms([...props.forms,form])
                props.setActiveStep(2)
        }
  return (
        <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Grid item container bgcolor={'common.white'} display={'flex'} md={11} sm={12} m={2} border={2}borderColor={'divider'}borderRadius={2}>
                        <Grid item display={'inline-flex'} color={'grey.600'} py={2}>
                                {/* <span style={{height:'48',width:'8px',backgroundColor:'#4b5259',borderRadius:'2px 0 0 2px'}}></span> */}
                                <Divider sx={{height:'40px',width:'4px',backgroundColor:'#4b5259',borderRadius:'0px 2px 2px 0px'}}/>
                                <PassengerIcon/>
                                <Typography variant={'h5'}>
                                        {'مشخصات مسافر'}
                                </Typography>
                        </Grid>
                        <Grid item container display={'flex'}  p={2}>
                                <form onSubmit={handleSubmit}>
                                        <Grid item container display={{md:'inline-flex',xs:'flex'}} justifyContent={{xs:'center',md:'flex-start'}}alignItems={{xs:'center',md:'flex-start'}}>
                                                {input.map((item:any)=>(
                                                        <Grid item key={item.id}>
                                                                <TextField color='secondary' sx={{margin:'8px',height:'48px',width:'264px'}}  type={'text'} name={item.name} label={item.label}value={item.value} onChange={handleChange}/>    
                                                        </Grid>
                                                ))}
                                                <Grid item>
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
                                                </Grid>
                                                <Grid item>
                                                        <Button sx={{margin:'8px',height:'56px',width:'264px'}} variant="contained" color="secondary" type={'submit'} disabled={!(form.firstName && form.lastName && form.idCode && form.phone)}>تایید و ادامه خرید</Button>
                                                </Grid>
                                        </Grid>
                                </form>
                        </Grid>
                </Grid>
         </Grid>
  )
}

export default PassengerInfo