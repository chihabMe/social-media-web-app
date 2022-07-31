import React, {useState,useEffect,createContext} from 'react'
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
    tokens:any,


}
initState ={
    isLogged:false,
    isLoading:false,
    user:null,
    error:null,
    login:()=>{},
    logout:()=>{},
    tokens:null,
}

const userDecoder = (access:string|null ) => {
    if(!access)return null
    let decoded_data:{username:string,id:string} = jwtDecode(access)
    let user ={
        username:decoded_data.username,
        id:decoded_data.id
    }
    return user
} 
let access = localStorage.getItem("access")
let refresh = localStorage.getItem("refresh")
let storedTokens = (access && refresh) ? {
    access,
    refresh,
}:null

export const AuthContext = createContext(initState)
export const AuthContextProvider:React.FC<{children:any}> = (props)=>{
    const [tokens,setTokens] = useState(storedTokens)
    const [isLogged,setIsLogged] = useState(storedTokens ? true:false)
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
        setTokens(data)
        setIsLogged(true)
        localStorage.setItem("access",data.access)
        localStorage.setItem("refresh",data.refresh)
        }catch(err){
            setError("problem")
            setIsLogged(false)
            setTokens(null)
        }
        setIsLoading(false)



    }
    useEffect(()=>{
        let get_user = async ()=>{
        if(!tokens)return 
        let pre_user:{
        username:string,
        id:string
        }
          pre_user= jwtDecode(tokens.access)
        let endpoint = baseApiUrl+"/users/"+pre_user.username+"/"
        let resp  = await fetch(endpoint,{headers:{"Authorization":`Bearer ${tokens.access}`}});
        let data = await resp.json()
        console.log("getting the new user ")
        console.log(data)
        setUser(data)

        }
        get_user()
        },[tokens])
    const logout = ()=>{
        setIsLogged(false)
        setTokens(null)
        setUser(null)
        setError(null)
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
    }
    useEffect(()=>{
        if(isLogged){
            console.log("refresh----------------------")
            console.log(tokens)

        let timeout  = setTimeout(()=>{
            fetch(`${baseApiUrl}/users/token/refresh/`,{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({refresh:tokens?.refresh})
            }).then(res=>res.json()).then(data=>{
            if(data.access){
            localStorage.setItem("access",data.access)
            localStorage.setItem("refresh",data.refresh)
            setTokens({access:data.access,refresh:data.refresh})
            }else{
                localStorage.removeItem("refresh")
                localStorage.removeItem("access")
                console.log("token error ",data)
            }
            })
        },30000)
        return ()=>{clearTimeout(timeout)}
        }
    },[tokens])

    let value={
        isLogged,
        isLoading,
        user,
        error,
        login,
        logout,
        tokens,

    }
    
    return <AuthContext.Provider value={value}>
            {props.children}

        </AuthContext.Provider>

}

