
import {useState,useEffect,useContext} from 'react'
import { AuthContext } from '../context/auth-context'



type configType ={
    method:string;
    headers:any;
    body:any
}
const useFetch = ()=>{
    let {tokens,logout} =useContext(AuthContext)
    const [accessToken,setAccessToken]=useState<any>(tokens.access)
    const [errors,setErrors]= useState<any>(null)
    const [data,setData] = useState<any>(null)
    const [isLoading,setIsLoading] = useState(false)

    const request = async (url:string,method:string,contentType?:string,body?:string|any)=>{
     
      

        setIsLoading(true)
        setErrors(null)
        const config :configType={
        method:method ,
        headers:{
                "Authorization":`Bearer ${accessToken}`,
        },
         body
        }
        if(contentType){
          config.headers["Content-Type"]=contentType
        }
      if(contentType){
        config.headers["Content-Type"]=contentType
      }
        let response = await fetch(url,config)
        try{

        if(!response.ok){
          if(response.status==401){
          logout()
          }
          console.log(response)
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
