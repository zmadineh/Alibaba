export interface AuthStateType{
    value: any;
    isLogin : boolean
    loading : boolean
    name : string
    number : string 
    email : string 
    idCode : string 
    error ?: string
}
export interface LoginType{
    userName:string,
    passWord:string,
}