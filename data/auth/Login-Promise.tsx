export interface LoginProps{
    userName:string,
    passWord:string,
}



export const Login = ({userName , passWord}:LoginProps)=>{
    return new Promise((resolve,reject)=>{
        if (userName==='09123456789' && passWord==='123456'){
            setTimeout(()=>{
                resolve({
                    name:'amir',
                    age:24,
                    country:'iran'
                })
            },5000)
            
        }else{
            reject('invalid Username or Password')
        }
    })
}