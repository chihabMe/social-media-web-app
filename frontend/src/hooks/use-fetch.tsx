
import {useState,useContext} from 'react'
import { AuthContext } from '../context/auth-context'


let config :{
    method:string,
    headers:any,
    url:string
}
const useFetch = ()=>{
    let {tokens} =useContext(AuthContext)
    const [accessToken,setAccessToken]=useState<any>(tokens.access)
    const [errors,setErrors]= useState<any>(null)
    const [data,setData] = useState<any>(null)
    const [isLoading,setIsLoading] = useState(false)

    const request = async (url:string,method:string,body?:string)=>{
        setIsLoading(true)
        setErrors(null)
        let config = {
            method,
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${accessToken}`
            },
            body
        }
        let response = await fetch(url,config)
        try{

        if(!response.ok){
            throw new Error("problem during connection")
        }
        let res_data = await response.json();
        setData(res_data)
        }catch(error){
            setErrors(error)
        }
        setIsLoading(false)
    }

    return{
        isLoading,
        errors,
        data,
        request
    }


}
export default useFetch;