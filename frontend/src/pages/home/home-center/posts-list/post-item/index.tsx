import React from 'react'
import PostItemBottom from './PostItemBottom';
import PostItemCenter from './PostItemCenter';
import PostItemTop from './PostItemTop';
import { PostItemContainer } from './styles';

type resProps = {
    avatar:string,
    image?:string,
    slug:string,
    body:string,
    userUsername:string,
    comments:number,
    likes:number,
    tags?:string[],
}
const PostItem:React.FC<resProps> = ({avatar,slug,tags,image,body,userUsername,comments,likes}) => {
  let minBody:string|string[] = body?.split(" ")
  if(minBody.length>=30){
    console.log(minBody)
    minBody=minBody.slice(1,2)
  }
  minBody=minBody.join(" ")
  return (
    <PostItemContainer href={slug}>
      {image && <PostItemTop image={image}/>}
      <PostItemCenter userUserName={userUsername} comments={comments} likes={likes} userAvatar={avatar} />
      <PostItemBottom body={minBody} tags={tags}/>

    </PostItemContainer>
  )
}

export default PostItem;
