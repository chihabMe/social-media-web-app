import React from 'react'
import { PostAddAvatar, PostAddFormController, PostAddText } from './styles'

const PostAddFormText = () => {
  return (
                <PostAddFormController>
                <PostAddAvatar src='https://picsum.photos/60/60'/>
                <PostAddText placeholder="what's happening ?"/>
            </PostAddFormController>
  )
}

export default PostAddFormText