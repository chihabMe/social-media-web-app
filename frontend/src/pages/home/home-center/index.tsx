import React from 'react'
import PostAdd from './post-add';
import PostList from './posts-list';
import { HomeCenterContainer } from './styles';
import { PostContextProvider } from '../../../context/posts-context';
const HomeCenter = () => {
  return (
    <HomeCenterContainer>
      <PostContextProvider >
        <PostAdd/>
        <PostList/>
      </PostContextProvider>
    </HomeCenterContainer>
  )
}

export default HomeCenter;