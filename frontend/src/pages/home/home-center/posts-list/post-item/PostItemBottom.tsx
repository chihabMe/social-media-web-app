import React from 'react'
import { PostItemBottomBody, PostItemBottomContainer, PostItemBottomTags, PostItemTag } from './styles'

const PostItemBottom:React.FC<{tags?:string[],body?:string}> = ({tags,body}) => {
  return (
    <PostItemBottomContainer>
        <PostItemBottomTags>

            {tags?.map(tag=>
            <PostItemTag>{tag}</PostItemTag>
                )}

        </PostItemBottomTags>
        <PostItemBottomBody>
            {body}
        </PostItemBottomBody>
    </PostItemBottomContainer>
  )
}

export default PostItemBottom