import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/auth-context";
import { PostContext } from "../../../../context/posts-context";
import { PostAddAvatar, PostAddFormController, PostAddText } from "./styles";

const PostAddFormText: React.FC = () => {
  const { postState,dispatchPost } = useContext(PostContext);
  const {user} = useContext(AuthContext) 
  const bodyChangeHandler = (e: any) => {
    dispatchPost({type:"addBody",payload:e.target.value})
  };
  return (
    <PostAddFormController>
      {/* <PostAddAvatar src={user?.avatar} /> */}
      <PostAddText
        onChange={bodyChangeHandler}
        value={postState.body}
        placeholder="what's happening ?"
      />
    </PostAddFormController>
  );
};

export default PostAddFormText;
