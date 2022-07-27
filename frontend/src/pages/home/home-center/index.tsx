import React from 'react'
import PostAdd from './post-add';
import PostList from './posts-list';
import { HomeCenterContainer } from './styles';

const HomeCenter = () => {
  return (
    <HomeCenterContainer>
        <PostAdd/>
        <PostList/>
    </HomeCenterContainer>
  )
}

export default HomeCenter;