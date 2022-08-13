import React from "react";
import { post } from "../../../../../models/post";
import PostItemBottom from "./PostItemBottom";
import PostItemCenter from "./PostItemCenter";
import PostItemTop from "./PostItemTop";
import { PostItemContainer } from "./styles";

const PostItem: React.FC<post> = ({
  avatar_image,
  slug,
  tags,
  image,
  body,
  author,
  comments,
  likes,
}) => {
  let minBody: string | string[] = body.split(" ");
  if (minBody.length >= 30) {
    minBody = minBody.slice(1, 2);
  }
  minBody = minBody.join(" ");
  return (
    <PostItemContainer   >
      <PostItemCenter
        userUserName={author}
        comments={comments}
        likes={likes}
        userAvatar={avatar_image}
      />
      <PostItemBottom slug={slug} body={minBody} tags={tags} />
      {image && <PostItemTop image={image} />}
    </PostItemContainer>
  );
};

export default PostItem;
