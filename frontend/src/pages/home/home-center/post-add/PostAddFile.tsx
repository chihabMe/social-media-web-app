import React from 'react'
import { PostFileAddContainer, PostFileAddTitle } from './styles'

const PostAddFile:React.FC<{Icon?:any,text?:string}> = ({text,Icon}) => {
  return (
    <PostFileAddContainer>
        <Icon style={{width:"3rem",height:"3rem",color:"gray"}}/>
        <PostFileAddTitle>{text}</PostFileAddTitle>
    </PostFileAddContainer>
  )
}

export default PostAddFile