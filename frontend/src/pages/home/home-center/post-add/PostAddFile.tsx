import React from 'react'
import { PostFileAddContainer, PostFileAddTitle } from './styles'

const PostAddFile:React.FC<{Icon?:any,text?:string}> = ({text,Icon}) => {
  return (
    <PostFileAddContainer>
        <Icon style={{width:"2rem",height:"2rem",color:"gray"}}/>
        <PostFileAddTitle>{text}</PostFileAddTitle>
    </PostFileAddContainer>
  )
}

export default PostAddFile