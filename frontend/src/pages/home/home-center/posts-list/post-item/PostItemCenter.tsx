import React from 'react'
import PostIcon from './PostIcon'
import {AiOutlineHeart,AiOutlineComment} from 'react-icons/ai';
import { PostCenterRight, PostItemCenterContainer, UserAvatar, UserUserName } from './styles';

const PostItemCenter:React.FC<{userAvatar:string,userUserName:string,likes:number,comments:number}> = ({likes,userUserName,comments,userAvatar}) => {
  return (
    <PostItemCenterContainer>
        <PostCenterRight>
            <UserAvatar src={userAvatar}/>
            <UserUserName>{userUserName}</UserUserName>
        </PostCenterRight>
        <PostCenterRight>
            <PostIcon text={likes} Icon={AiOutlineHeart} />
            <PostIcon text={comments} Icon={AiOutlineComment} />

        </PostCenterRight>
    </PostItemCenterContainer>
  )
}

export default PostItemCenter
