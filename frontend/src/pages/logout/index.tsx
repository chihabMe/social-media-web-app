import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth-context'
import { Navigate } from 'react-router-dom'
const Logout = () => {
    const {logout} = useContext(AuthContext)
    useEffect(()=>{
    logout()
    },[])
  return (
    <Navigate to='/login' />
  )
}

export default Logout