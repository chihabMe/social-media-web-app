import React, { memo } from 'react'
import PostAdd from './post-add';
import PostList from './posts-list';
import { HomeCenterContainer, HomeCenterWrapper } from './styles';
import { PostContextProvider } from '../../../context/posts-context';
const HomeCenter = () => {
  return (
    <HomeCenterContainer>
      <PostContextProvider >
        <HomeCenterWrapper>
        <PostAdd/>
        <PostList/>
        </HomeCenterWrapper>
      </PostContextProvider>
    </HomeCenterContainer>
  )
}

export default memo(HomeCenter);
