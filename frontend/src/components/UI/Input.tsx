import React, { useEffect, useState } from 'react'
import { redColor } from '../../styles/colors'
import { Input as StyledInput } from '../../styles/Input'
import styled from 'styled-components'

const Input:React.FC<{password?:string,value:string,setValue:(text:string)=>void,valid:boolean,setValid:(value:boolean)=>void,placeholder:string,validator:(value:string)=>boolean,type:string,errorMessage:string}> = ({password,setValue,value,validator,placeholder,errorMessage,valid,setValid,...rest}) => {
    const [touched,setTouched]= useState(false)
    const valueChangeHandler = (e:any)=>{
        setValue(e.target.value)
    }

    useEffect(()=>{
        let timeout = setTimeout(()=>{
            console.log(validator(value))
            let check  
            if(password){
                console.log(password)
                check = validator(value)&&password==value
            }else{
                check=validator(value)
            }
             setValid(check)
        },200)
        return ()=>{
            clearTimeout(timeout)
        }
    },[value,password])
  return (
    <>
    <StyledInput {...rest} placeholder={placeholder} onFocus={()=>{setTouched(true)}}  className={`${valid && touched && "valid"} ${!valid&&touched&&"invalid"}`} onChange={valueChangeHandler} />
    <ErrorMessage> {!valid&&touched&&errorMessage}</ErrorMessage>
    </>
  )
}

const ErrorMessage = styled.h3`
    color:${redColor};


`
export default Input