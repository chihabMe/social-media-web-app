import React, { useContext, useState } from "react";
import PostItem from "./post-item";
import { LoadingWrapper, PostListContainer } from "./styles";
import useFetch from "../../../../hooks/use-fetch";
import { useEffect } from "react";
import { baseApiUrl } from "../../../../utils/globals";

import { FadeLoader } from "react-spinners";
import { primaryColor } from "../../../../styles/colors";
import {post} from '../../../../models/post'
import { PostContext } from "../../../../context/posts-context";

const PostList = () => {
  const {posts,addPosts} = useContext(PostContext)
  const {isLoading,errors,request,data} = useFetch()
  useEffect(()=>{
    let post_endpoint="/posts/";
    let full_endpoint = baseApiUrl+post_endpoint ;
    request(full_endpoint,"get")
  },[])
  useEffect(()=>{
    console.log("res",data)
    addPosts(data)
  },[data])

  return (
    <PostListContainer>
      
      {isLoading && <LoadingWrapper><FadeLoader color={primaryColor} /></LoadingWrapper>} 
      {errors && <h1>error</h1>}
      {
        posts?.map(post=>{
          return(

      <PostItem
        key={"post"+post.id}
        avatar={post.avatar_image}
        image={post.image}
        userUsername={post.author}
        comments={post.comments}
        tags={post.tags}
        likes={post.likes}
        body={post.body}
      />
          ) 
        })
      }
    </PostListContainer>
  );
};

export default PostList;
