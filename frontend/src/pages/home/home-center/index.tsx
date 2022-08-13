import React, { memo, useEffect, useRef, useState } from 'react'
import PostAdd from './post-add';
import PostList from './posts-list';
import { HomeCenterContainer, HomeCenterWrapper } from './styles';
import { PostContextProvider } from '../../../context/posts-context';
import useFetch from '../../../hooks/use-fetch';
import { baseApiUrl } from '../../../utils/globals';
import { post } from '../../../models/post';
let postsEndpoint = baseApiUrl+'/posts/' ;
const HomeCenter = () => {

  const {isLoading,errors,request,data:postList} = useFetch()
  const renderAfterCalled = useRef(false)
    useEffect(()=>{
      if(!renderAfterCalled.current){
      request(postsEndpoint,"get")
      }
      renderAfterCalled.current=true
    },[])
  return (
    <HomeCenterContainer>
      <PostContextProvider >
        <HomeCenterWrapper>
        <PostAdd/>
        <PostList postList={postList?.results}/>
        </HomeCenterWrapper>
      </PostContextProvider>
    </HomeCenterContainer>
  )
}

export default memo(HomeCenter);
