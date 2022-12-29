import React ,{useState,useEffect} from 'react'

import { useAuthDispatch, useAuthSelector } from "../../redux/AuthHooks";
import AuthSlice, { AuthAsyncThunk } from '../../redux/Slices/AuthSlice';
import { logout } from '../../redux/Slices/AuthSlice';
import { AuthStateType,LoginType } from "../../model/AuthType";

import Grid from '@mui/material/Grid/Grid';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import SvgIcon  from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';

type Props = {}

const MobileLoginFrom = (props: Props) => {

    const [form,setForm] = useState<LoginType>({
        userName:'',passWord:''
    })
    const dispatch = useAuthDispatch()
    const auth:AuthStateType = useAuthSelector(state => state.Auth)
    
    const handleChange = (e: { target: { name: string; value: string; }; }) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    
    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault()
        dispatch(AuthAsyncThunk(form))
        
    }
    const handleLogOut = () =>{
        dispatch(logout())
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    if (auth.isLogin) {
        return (
        
            <Grid justifyContent={'center'} alignItems={'center'} >
                    <Typography marginLeft={1} variant="h6" color={'grey.700'}>  شماره موبایل:{auth.number} </Typography>
                    <Typography marginLeft={1} variant="h6" color={'grey.700'}>نام:{auth.name}</Typography>
                    <Typography marginLeft={1} variant="h6" color={'grey.700'}>کد ملی: {auth.idCode}</Typography>
                    
            </Grid>
            
        
        );
      }
  return (
    <Grid container display={'flex'} flexDirection={'column'}>
            <Grid textAlign={'center'}>
                            <Typography  variant='h6' fontWeight={'bold'}color={'grey.700'}>
                                    {'ورود یا ثبت نام'}
                            </Typography>
                            <Typography  variant={'caption'} fontWeight={'bold'}pt={2}color={'grey.500'}>
                                    {'شماره موبایل یا آدرس ایمیل به همراه کلمه عبور خود را وارد کنید.'}
                            </Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                            <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}pt={1}>
                                <TextField  color={'info'} type={'text'} sx={{width:'326px',marginBottom:2,paddingTop:1}} label={'آدرس ایمیل یا شماره موبایل'} variant='outlined' name='userName'value={form.userName} onChange={handleChange}/>
                                <TextField  color={'info'} type={'password'} sx={{width:'326px',marginBottom:2}} label={'رمز عبور'} variant='outlined' name='passWord'value={form.passWord} onChange={handleChange}/>
                                <Button disabled={auth.loading} variant='contained'type='submit' color={'secondary'} sx={{width:'326px',marginTop:4}}>ورود به علی بابا</Button>
                            </Grid>
            </form>
    </Grid>
  )
}

export default MobileLoginFrom