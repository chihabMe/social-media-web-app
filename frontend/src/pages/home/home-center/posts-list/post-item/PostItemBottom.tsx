import React from 'react'
import { PostItemBottomBody, PostItemBottomContainer, PostItemBottomTags, PostItemTag } from './styles'

const PostItemBottom:React.FC<{slug:string,tags?:string[],body?:string}> = ({tags,body,slug}) => {
  let bodyWithTags = body?.split(" ").map(word =>{
    console.log("body")
    if(word.includes("#")){
      return <PostItemTag to={`/search/${word.replace("#",'')}`}>{word.replace("#",'')}</PostItemTag>
    }
    return <span>{word}</span>
  })
  console.log(bodyWithTags)

  return (
    <PostItemBottomContainer>
        <PostItemBottomBody >
            {bodyWithTags}
        </PostItemBottomBody>
    </PostItemBottomContainer>
  )
}

export default PostItemBottom