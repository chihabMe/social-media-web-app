import React, { memo } from 'react'
import { useContext,useEffect } from 'react';
import { AuthContext } from '../../context/auth-context';
import { baseApiUrl } from '../../utils/globals';
import useFetch from '../../hooks/use-fetch';
import HomeCenter from './home-center';
import { useParams } from 'react-router-dom';
let i = 1 
const Home = () => {
      return <HomeCenter/>
}

export default Home;
