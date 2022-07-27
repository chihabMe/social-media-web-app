import React from 'react'
import styled from 'styled-components'
import { PostIconContainer, PostIconText } from './styles'

const PostIcon:React.FC<{text?:string|number,Icon?:any}> = ({text,Icon}) => {
  return (
    <PostIconContainer>
        <Icon style={{width:"2.5rem",height:"2.5rem",color:"gray"}}/>
        <PostIconText>{text}</PostIconText>
    </PostIconContainer>
  )
}

export default PostIcon