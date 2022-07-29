import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../../context/posts-context";
import { PostAddAvatar, PostAddFormController, PostAddText } from "./styles";

const PostAddFormText: React.FC = () => {
  const { postState,dispatchPost } = useContext(PostContext);
  const bodyChangeHandler = (e: any) => {
    dispatchPost({type:"addBody",payload:e.target.value})
  };
  return (
    <PostAddFormController>
      <PostAddAvatar src="https://picsum.photos/60/60" />
      <PostAddText
        onChange={bodyChangeHandler}
        value={postState.body}
        placeholder="what's happening ?"
      />
    </PostAddFormController>
  );
};

export default PostAddFormText;
