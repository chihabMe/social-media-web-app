import React from 'react'
import { useContext,useEffect } from 'react';
import { AuthContext } from '../../context/auth-context';
import { baseApiUrl } from '../../utils/globals';
import useFetch from '../../hooks/use-fetch';
import HomeCenter from './home-center';
import { useParams } from 'react-router-dom';

const Home = () => {
    const {user,logout} = useContext(AuthContext)
    const {isLoading,data,request}= useFetch();
    useEffect(()=>{

    request(`${baseApiUrl}/posts/`,'get')
    },[])
  return (
      <HomeCenter/>
  )
}

export default Home;
