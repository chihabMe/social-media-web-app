import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../../../../styles/Button'
import { PostAddFormController } from './styles'
import {AiOutlineVideoCameraAdd,AiOutlineCalendar} from 'react-icons/ai'
import {BiImageAdd,BiLocationPlus} from 'react-icons/bi'
import PostAddFile from './PostAddFile'
import { PostContext } from '../../../../context/posts-context'

const PostAddButtons = () => {
  const [image,setImage]= useState<string|null>(null)
  const [video,setVideo]= useState<string|null>(null)
  const {dispatchPost} = useContext(PostContext)
  useEffect(()=>{
    if(image){
      dispatchPost({action:"addImage",payload:image})
    }
    if(video){
      dispatchPost({action:"addVideo",payload:video})
    }
  },[image,video])
  return (
    <PostAddFormController>
        <PostAddFile upload name='video'  types={['mp4','mkv']} Icon={AiOutlineVideoCameraAdd} text='video'   />
        <PostAddFile upload name='image' types={['png','jpeg','jpg']} Icon={BiImageAdd} text='image'   />
        <PostAddFile Icon={AiOutlineCalendar} text='events'   />
        <PostAddFile Icon={BiLocationPlus} text='location'   />
    </PostAddFormController>
  )
}

export default PostAddButtons