import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Login } from "../api/login";

export const AuthAsyncThunk = createAsyncThunk(
    'auth/Login',
    //authData => {userName:'amir' , passWord:'123456}
    async(authData)=>{
        const data = await Login(authData.userName , authData.passWord);
        return data
    }//1:Pendding 2:fullfilled 3:rejected
)

const initialState ={
    isLogin:false,
    loading:false,
    name:'',
    age:0,
    country:''
}

export const AuthSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        logout:(state)=>{
            state.isLogin = false
            state.loading = false
            state.name = ''
            state.age = 0 
            state.country = ''
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(AuthAsyncThunk.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(AuthAsyncThunk.fulfilled,(state,action)=>{
            const payload = action
            state.isLogin = true
            state.name=payload.name
            state.age=payload.age
            state.country=payload.country

        })
        builder.addCase(AuthAsyncThunk.rejected,(state)=>{
            state.loading = false
            state.error = 'invalid Username or Password'
        })
    }
})

export const {logout} =AuthSlice.actions
export default AuthSlice.reducer