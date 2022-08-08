import React, { useContext, useState } from "react";
import PostAddButtons from "./PostAddButtons";
import PostAddFormText from "./PostAddFormText";
import { PostAddContainer, PostAddForm, PostAddFormController } from "./styles";
import { useEffect } from "react";
import useFetch from "../../../../hooks/use-fetch";
import { baseApiUrl } from "../../../../utils/globals";
import { PostContext } from "../../../../context/posts-context";
import { Button } from "../../../../styles/Button";
import { ClipLoader, FadeLoader, PulseLoader } from "react-spinners";
import { backgroundColor } from "../../../../styles/colors";

const PostAdd: React.FC = () => {
  const { postState, dispatchPost } = useContext(PostContext);
  const { addPost } = useContext(PostContext);
  const { isLoading, errors, data, request } = useFetch();
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (postState.body.trim().length < 3){
      window.alert('the post must have a body ')
      return 
    } ;
    let endpoint = "/posts/";
    let full_url = baseApiUrl + endpoint;
    let formData = new FormData()
    if(postState.image)formData.append("image",postState.image)
    if(postState.body)formData.append("body",postState.body)
    if(postState.video)formData.append("video",postState.video)
    request(full_url, "post",undefined, formData);
  };
  useEffect(() => {
    addPost(data);
    dispatchPost({ type: "reset" });
  }, [data]);
  return (
    <PostAddContainer>
      <PostAddForm onSubmit={submitHandler}>
        <PostAddFormText />
        <PostAddButtons />
        <Button 
          valid={true}
          px="1rem"
          size="1.4rem"
          py="10rem"
        >
          {isLoading && 
              <PulseLoader size={7} color={backgroundColor} />
          }
          {!isLoading && "post"}
        </Button>
      </PostAddForm>
    </PostAddContainer>
  );
};

export default PostAdd;
