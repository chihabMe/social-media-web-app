import React, { memo, useContext, useRef, useState } from "react";
import PostItem from "./post-item";
import { LoadingWrapper, PostListContainer } from "./styles";
import useFetch from "../../../../hooks/use-fetch";
import { useEffect } from "react";
import { baseApiUrl } from "../../../../utils/globals";

import { FadeLoader } from "react-spinners";
import { primaryColor } from "../../../../styles/colors";
import {post} from '../../../../models/post'
import { PostContext } from "../../../../context/posts-context";
import Paginator from "../../../../components/Layout/paginator/Paginator";
import { useLocation, useParams } from "react-router-dom";

let post_endpoint="/posts/";
let full_endpoint = baseApiUrl+post_endpoint ;
const PostList = () => {
  const {posts,addPosts} = useContext(PostContext)
  const {isLoading,errors,request,data} = useFetch()
  const location  = useLocation()
    useEffect(()=>{
      request(full_endpoint,"get")
    },[])
    useEffect(()=>{
      if(data){
        addPosts(data.results)
      }
    },[data])

  return (
    <PostListContainer>
      
      {isLoading && <LoadingWrapper><FadeLoader color={primaryColor} /></LoadingWrapper>} 
      {errors && <h1>error</h1>}
      {
        posts?.map((post,index)=>{
          return <PostItem
            key={index}
            slug={post.slug}
            avatar={post.avatar_image}
            image={post.image}
            userUsername={post.author}
            comments={post.comments}
            tags={post.tags}
            likes={post.likes}
            body={post.body} element={undefined}          />
        })
      }
    </PostListContainer>
  );
};

export default PostList;
