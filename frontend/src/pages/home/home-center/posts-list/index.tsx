import React, { useState } from "react";
import PostItem from "./post-item";
import { PostListContainer } from "./styles";
import useFetch from "../../../../hooks/use-fetch";
import { useEffect } from "react";
import { baseApiUrl } from "../../../../utils/globals";
type post ={
  body:string,
  image:string,
  userAvatar:string,
  author:string,
  created:string,
  updated:string,
  user:number,
  id:number,
  likes:number,
  comments:number,
  tags?:string[],

}

const PostList = () => {
  const [posts,setPosts]= useState<post[]|null>(null)
  const {isLoading,errors,request,data} = useFetch()
  useEffect(()=>{
    let post_endpoint="/posts/";
    let full_endpoint = baseApiUrl+post_endpoint ;
    request(full_endpoint,"get")
  },[])
  useEffect(()=>{
    setPosts(data)
    console.log("res",data)
  },[data])

  return (
    <PostListContainer>
      {isLoading && <h1>loading</h1>}
      {errors && <h1>error</h1>}
      {
        posts?.map(post=>{
          return(

      <PostItem
        key={post.id}
        avatar={post.userAvatar}
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
