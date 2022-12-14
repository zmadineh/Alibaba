export interface AuthStateType{
    isLogin : boolean
    loading : boolean
    name : string
    number : string 
    email : string 
    idCode : string 
    error ?: string
    value?:string
}
export interface LoginType{
    userName:string,
    passWord:string,
}