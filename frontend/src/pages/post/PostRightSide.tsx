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
const PostRightSide: React.FC<{
  author_avatar: string;
  author_username: string;
  author_email?: string;
  author_posts: number;
  author_location?: string;
}> = ({
  author_posts,
  author_avatar,
  author_username,
  author_email,
  author_location,
}) => {
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
          <Button valid>follow</Button>
        </PostRightSideUser>
      </StickyWrapper>
    </PostRightSideContainer>
  );
};
export default PostRightSide;
