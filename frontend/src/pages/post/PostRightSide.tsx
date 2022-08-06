import {
  PostRightSideContainer,
  PostRow,
  Title,
  Text,
  PostUserAvatar,
  PostRightSideUserHeader,
  PostRightSideUser,
  StickyWrapper,
} from "./styles";
import { Button } from "../../styles/Button";
import { baseApiUrl } from "../../utils/globals";
import useFetch from "../../hooks/use-fetch";
import { useEffect, useState } from "react";
const PostRightSide: React.FC<{
  author_avatar: string;
  author_username: string;
  author_email?: string;
  author_posts: number;
  author_location?: string;
  followed:boolean,
}> = ({
  author_posts,
  author_avatar,
  author_username,
  author_email,
  author_location,
  followed,
}) => {
  const [followed_,setFollowed]=useState(false)
  const {request,data,isLoading} = useFetch()
  const addFollow = ()=>{
    let endpoint = baseApiUrl+"/users/"+author_username+"/follow/"
    request(endpoint,'post','application/json')
  }
  useEffect(()=>{
    if(data){
      if(data.action=='add')setFollowed(true)
      else setFollowed(false)
    }

  },[data])
  return (
    <PostRightSideContainer>
      <StickyWrapper>
        <PostRightSideUser>
          <PostRightSideUserHeader>
            <PostUserAvatar
              style={{ width: "7rem", height: "7rem" }}
              src={author_avatar}
            />
            <Title>{author_username}</Title>
          </PostRightSideUserHeader>
          <Button onClick={addFollow} className={followed_?"active":""} valid>{followed_?"unfollow":"follow"}</Button>
        </PostRightSideUser>
      </StickyWrapper>
    </PostRightSideContainer>
  );
};
export default PostRightSide;
