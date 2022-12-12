export interface LoginProps{
    userName:string,
    passWord:string,
}



export const Login = ({userName , passWord}:LoginProps)=>{
    return new Promise((resolve,reject)=>{
        if (userName==='09123456789' && passWord==='123456'){
            setTimeout(()=>{
                resolve({
                    name:'امیر پرتوی',
                    idCode:'001234567',
                    number:'09123456789',
                    email:'a.partovi99@gmail.com'
                })
            },4000)
            
        }else{
            reject('invalid Username or Password')
        }
    })
}