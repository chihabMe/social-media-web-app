import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

const Home = () => {
    const {user,logout} = useContext(AuthContext)
  return (
    <div>
        <h1>{user?.username}</h1>
        <h1>{user?.id}</h1>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home;