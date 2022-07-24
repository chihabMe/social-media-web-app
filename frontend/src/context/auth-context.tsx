import React, {useState,createContext} from 'react'
import jwtDecode from 'jwt-decode';
import { baseApiUrl } from '../utils/globals';
import User from '../models/User';

let initState:{
    isLogged:boolean,
    isLoading:boolean,
    user:User|null,
    error:string|null,
    login:(username:string,password:string)=>void,
    logout:()=>void,


}
initState ={
    isLogged:false,
    isLoading:false,
    user:null,
    error:null,
    login:()=>{},
    logout:()=>{},
}
export const AuthContext = createContext(initState)

export const AuthContextProvider:React.FC<{children:any}> = (props)=>{
    const [tokens,setTokens] = useState<string|null>(null)
    const [isLogged,setIsLogged] = useState(false)
    const [user,setUser]= useState<User|null>(null)
    const [error,setError] = useState<string|null>(null)
    const [isLoading,setIsLoading]=useState(false)
    const login  = async (username:string,password:string)=>{
        setIsLoading(true)
        setError(null)
        let config = {
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({username,password})
        }
        try{

        const response = await fetch(`${baseApiUrl}/users/token/`,config)
        if(!response.ok){
            throw new Error("there is a problem ")
        }
        const data = await response.json()
        console.log("00000000000")
        console.log(data)
        let decoded_data:{
            username:string,
            user_id:string,
        } = jwtDecode(data)
        let user_={
            username:decoded_data.username,
            id:decoded_data.user_id,
        } 
        setUser(user_)
        setTokens(data)
        setIsLogged(true)
        console.log("00000000000")
        }catch(err){
            console.log(err)
            console.log("response")
            setError("problem")
        }
        setIsLoading(false)



    }
    const logout = ()=>{
        setIsLogged(false)
        setTokens(null)
    }


    let value={
        isLogged,
        isLoading,
        user,
        error,
        login,
        logout,

    }
    return <AuthContext.Provider value={value}>
            {props.children}

        </AuthContext.Provider>

}

