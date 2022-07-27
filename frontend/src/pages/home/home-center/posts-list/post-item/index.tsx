import React from 'react'
import PostItemBottom from './PostItemBottom';
import PostItemCenter from './PostItemCenter';
import PostItemTop from './PostItemTop';
import { PostItemContainer } from './styles';

type resProps = {
    avatar:string,
    image?:string,
    body:string,
    userUsername:string,
    comments:number,
    likes:number,
    tags?:string[],
}
const PostItem:React.FC<resProps> = ({avatar,tags,image,body,userUsername,comments,likes}) => {
  let minBody = body?.split(" ").slice(1,20).join(" ")+" ..."
  return (
    <PostItemContainer>
      {image && <PostItemTop image={image}/>}
      <PostItemCenter userUserName={userUsername} comments={comments} likes={likes} userAvatar={avatar} />
      <PostItemBottom body={minBody} tags={tags}/>

    </PostItemContainer>
  )
}

export default PostItem;