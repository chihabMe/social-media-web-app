import React from 'react'
import styled from 'styled-components'
import { PostIconContainer, PostIconText } from './styles'

const PostIcon:React.FC<{text?:string|number,Icon?:any}> = ({text,Icon}) => {
  return (
    <PostIconContainer>
        <Icon style={{width:"2.8rem",height:"2.8rem",color:"gray"}}/>
        <PostIconText>{text}</PostIconText>
    </PostIconContainer>
  )
}

export default PostIcon