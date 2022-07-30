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
import { createNoSubstitutionTemplateLiteral } from "typescript";

const PostAdd: React.FC = () => {
  const { postState, dispatchPost } = useContext(PostContext);
  const { addPost } = useContext(PostContext);
  const { isLoading, errors, data, request } = useFetch();
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (postState.body.trim().length < 3) return;
    let endpoint = "/posts/";
    let full_url = baseApiUrl + endpoint;
    let formData = new FormData()
      console.log("making the form  data ------------")
      console.log(postState)
      formData.append("image",postState.image)
      formData.append("body",postState.body)
      formData.append("video",postState.video)
      console.log("form",formData)
    //let postAsStr = JSON.stringify(postState)
    console.log('000000000000000000')
    console.log(postState)
    console.log()
    request(full_url, "post","multipart/form-data", formData);
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
          background="primary"
          valid={true}
          px="1rem"
          
          color={backgroundColor}
          size="1.3rem"
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
