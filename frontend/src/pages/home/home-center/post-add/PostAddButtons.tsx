import React from 'react'
import { Button } from '../../../../styles/Button'
import { PostAddFormController } from './styles'
import {AiOutlineVideoCameraAdd,AiOutlineFileImage} from 'react-icons/ai'
import PostAddFile from './PostAddFile'

const PostAddButtons = () => {
  return (
    <PostAddFormController>

        <PostAddFile Icon={AiOutlineVideoCameraAdd} text='video'   />
        <PostAddFile Icon={AiOutlineFileImage} text='image'   />
        <Button background='primary' color='white' py='2rem' size='1.2rem' px='0.7rem'  valid={true} >Post</Button>
    </PostAddFormController>
  )
}

export default PostAddButtons