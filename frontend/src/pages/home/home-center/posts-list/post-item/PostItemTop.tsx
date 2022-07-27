import React from 'react'
import { PostItemImage } from './styles'

const PostItemTop:React.FC<{image:string}> = ({image}) => {
  return (
    <PostItemImage src={image}/>
  )
}

export default PostItemTop