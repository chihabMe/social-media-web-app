import React, { useContext, useState } from 'react'
import PostAddButtons from './PostAddButtons'
import PostAddFormText from './PostAddFormText'
import {  PostAddContainer, PostAddForm, PostAddFormController  } from './styles'
import { useEffect } from 'react'
import useFetch from '../../../../hooks/use-fetch'
import { baseApiUrl } from '../../../../utils/globals'
import { PostContext } from '../../../../context/posts-context'
import { Button } from '../../../../styles/Button'

const PostAdd:React.FC = () => {
  const {postState,dispatchPost}= useContext(PostContext)
  const {addPost} = useContext(PostContext)
  const {isLoading,errors,data,request} = useFetch()
  const submitHandler = (e:any)=>{
    e.preventDefault()
    if(postState.body.trim().length<3)return
    let endpoint = '/posts/'
    let full_url = baseApiUrl+endpoint
    request(full_url,'post',JSON.stringify(postState))
  }
  useEffect(()=>{
    addPost(data)
    dispatchPost({type:'reset'})
  },[data])
  return (
    <PostAddContainer>
        <PostAddForm onSubmit={submitHandler}>
            <PostAddFormText   />
            <PostAddButtons/>
            <Button  background='primary' valid={true} px='1rem' color='white' size='1.3rem' py='10rem' >post</Button>
            
        </PostAddForm>
    </PostAddContainer>
  )
}

export default PostAdd