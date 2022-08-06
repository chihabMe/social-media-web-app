import React from 'react'
import { useContext,useEffect } from 'react';
import { AuthContext } from '../../context/auth-context';
import { baseApiUrl } from '../../utils/globals';
import useFetch from '../../hooks/use-fetch';
import { HomeContainer } from './styles/HomeStyles';
import HomeLeftSide from './home-left';
import HomeRightSide from './home-right';
import HomeCenter from './home-center';

const Home = () => {
    const {user,logout} = useContext(AuthContext)
    const {isLoading,data,request}= useFetch();
    useEffect(()=>{

    request(`${baseApiUrl}/posts/`,'get')
    },[])
  return (
    <HomeContainer>
      <HomeLeftSide/>
      <HomeCenter/>
      <HomeRightSide/>
    </HomeContainer>
  )
}

export default Home;
