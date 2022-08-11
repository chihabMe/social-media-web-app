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
let normalFeed = baseApiUrl+post_endpoint ;
const PostList:React.FC<{username?:string}> = ({username}) => {
  const {isLoading,errors,request,data} = useFetch()
  let full_endpoint:string;
  if(username){
    full_endpoint=baseApiUrl+`/users/${username}/posts/`;
  }else{
    full_endpoint = normalFeed
  }
    useEffect(()=>{
      request(full_endpoint,"get")
    },[])

  return (
    <PostListContainer>
      
      {isLoading && <LoadingWrapper><FadeLoader color={primaryColor} /></LoadingWrapper>} 
      {errors && <h1>error</h1>}
      {
        data?.results?.map((post:post)=>{
          return <PostItem
            key={post.id}
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
