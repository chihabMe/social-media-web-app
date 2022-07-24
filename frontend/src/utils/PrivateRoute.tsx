import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'
import {Route } from 'react-router-dom'

const PrivateRoute:React.FC<{children:any}> = ({children,...rest}) => {
    const {isLogged} = useContext(AuthContext)

    if(!isLogged){
        return <Navigate to='/login' />
    }
    return children
}

export default PrivateRoute