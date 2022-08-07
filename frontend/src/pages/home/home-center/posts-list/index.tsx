import React, { useContext, useRef, useState } from "react";
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
  const lastPostElement = useRef<HTMLElement>()
  let nextPage =""
    useEffect(()=>{
      let post_endpoint="/posts/";
      let full_endpoint = baseApiUrl+post_endpoint ;
      request(full_endpoint,"get")
    },[])
    useEffect(()=>{
      if(data){
        addPosts(data.results)
        nextPage=data.next
      }
    },[data])
    const loadMorePosts = ()=>{
      if(!isLoading)request(nextPage,'get')
    }
    window.addEventListener('scroll',()=>{
      if(lastPostElement.current ){
      if(isLoading)return 
      let position = lastPostElement.current.getBoundingClientRect().top
      if(position<200){
        loadMorePosts()
      }
      }
    })

  return (
    <PostListContainer>
      
      {isLoading && <LoadingWrapper><FadeLoader color={primaryColor} /></LoadingWrapper>} 
      {errors && <h1>error</h1>}
      {
        posts?.map((post,index)=>{
          if(index==posts.length-1){
          return <PostItem
            element={lastPostElement}
            key={index}
            slug={post.slug}
            avatar={post.avatar_image}
            image={post.image}
            userUsername={post.author}
            comments={post.comments}
            tags={post.tags}
            likes={post.likes}
            body={post.body}
          />
          }
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
