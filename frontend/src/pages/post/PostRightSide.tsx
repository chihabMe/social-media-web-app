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
import FollowButton from "../../components/Layout/FollowButton";
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

  return (
    <PostRightSideContainer>
      <StickyWrapper>
        <PostRightSideUser>
          <PostRightSideUserHeader/>

            <PostUserAvatar
              style={{ width: "7rem", height: "7rem" }}
              src={author_avatar}
            />
            <Title>{author_username}</Title>
        <FollowButton followed={followed}  user={author_username} />
        </PostRightSideUser>
      </StickyWrapper>
    </PostRightSideContainer>
  );
};
export default PostRightSide;
