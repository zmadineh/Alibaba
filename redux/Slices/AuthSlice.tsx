import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Login , LoginProps } from "../../data/auth/Login-Promise";
import { LoginType, AuthStateType } from "../../model/AuthType";



export const AuthAsyncThunk = createAsyncThunk(
    'auth/Login',
    //authData => {userName:'09123456789' , passWord:'123456}
    async(auth:LoginType)=>{
        const data = await Login(auth);
        return data
    }//1:Pendding 2:fullfilled 3:rejected
)

const initialState : AuthStateType ={
    isLogin: false,
    loading: false,
    name: '',
    number: '',
    email: '',
    idCode: '',
    error:'',
    value: ''
}

export const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        logout:(state:AuthStateType)=>{
            state.isLogin = false
            state.loading = false
            state.name = ''
            state.number = '' 
            state.email = ''
            state.idCode = ''
            state.error = ''
            state.value = ''
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(AuthAsyncThunk.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(AuthAsyncThunk.fulfilled,(state:AuthStateType,action:any)=>{
            const payload = action
            state.isLogin = true
            state.name=payload.name
            state.number=payload.number
            state.email=payload.email
            state.idCode=payload.idCode
            
        })
        builder.addCase(AuthAsyncThunk.rejected,(state:AuthStateType)=>{
            state.loading = false
            state.error = 'نام کاربری یا رمز اشتباه است'
        })
    }
})

export const {logout} =AuthSlice.actions

export default AuthSlice.reducer


