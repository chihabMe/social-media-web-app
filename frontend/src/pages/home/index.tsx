import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

const Home = () => {
    const {user} = useContext(AuthContext)
  return (
    <div>
        <h1>{user?.username}</h1>
        <h1>{user?.id}</h1>
    </div>
  )
}

export default Home;