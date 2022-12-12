import React ,{useState} from 'react'

import { useAuthDispatch, useAuthSelector } from "../../redux/AuthHooks";
import AuthSlice, { AuthAsyncThunk } from '../../redux/Slices/AuthSlice';
import { logout } from '../../redux/Slices/AuthSlice';
import { AuthStateType,LoginType } from "../../model/AuthType";


import Grid from '@mui/material/Grid/Grid';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import SvgIcon  from '@mui/material/SvgIcon';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


type Props = {}

const LoginHeader = (props: Props) => {
        const [form,setForm] = useState<LoginType>({
            userName:'',passWord:''
        })
        const dispatch = useAuthDispatch()
        const auth = useAuthSelector(state => state.Auth)
        
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
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

      
      if (auth.isLogin) {
        return (
        <Button sx={{ padding: '8px 12px' }}>
            <SvgIcon sx={{ color: 'grey.700' }}><path d="M17.25 12.75A3.75 3.75 0 0 1 21 16.5v3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V16.5a3.75 3.75 0 0 1 3.75-3.75h10.5Zm0 1.5H6.75A2.25 2.25 0 0 0 4.5 16.5v3h15v-3a2.25 2.25 0 0 0-2.118-2.246l-.132-.004ZM12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 1 1 0-9Zm0 1.5a3 3 0 1 0-.001 5.999A3 3 0 0 0 12 4.5Z" fill-rule="evenodd"></path></SvgIcon>
            <Typography marginLeft={1} variant="body1" color={'grey.700'}> {auth.number}</Typography>
        </Button>
        );
      }
      return (
        <>
            <Button sx={{ padding: '8px 12px' }}>
                <SvgIcon sx={{ color: 'grey.700' }}><path d="M17.25 12.75A3.75 3.75 0 0 1 21 16.5v3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V16.5a3.75 3.75 0 0 1 3.75-3.75h10.5Zm0 1.5H6.75A2.25 2.25 0 0 0 4.5 16.5v3h15v-3a2.25 2.25 0 0 0-2.118-2.246l-.132-.004ZM12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 1 1 0-9Zm0 1.5a3 3 0 1 0-.001 5.999A3 3 0 0 0 12 4.5Z" fill-rule="evenodd"></path></SvgIcon>
                <Typography marginLeft={1} variant="body1" color={'grey.700'}> ورود یا ثبت‌نام </Typography>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
        );
}

export default LoginHeader