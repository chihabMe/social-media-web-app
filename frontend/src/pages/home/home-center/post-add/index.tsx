import React from 'react'
import PostAddButtons from './PostAddButtons'
import PostAddFormText from './PostAddFormText'
import {  PostAddContainer, PostAddForm, PostAddFormController  } from './styles'

const PostAdd = () => {
  return (
    <PostAddContainer>
        <PostAddForm>
            <PostAddFormText/>
            <PostAddButtons/>
        </PostAddForm>
    </PostAddContainer>
  )
}

export default PostAdd