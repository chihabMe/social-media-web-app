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
import { AiOutlineConsoleSql } from "react-icons/ai";

const PostList:React.FC<{postList:post[],isLoading?:boolean,errors?:boolean}> = ({postList,errors,isLoading}) => {
  return (
    <PostListContainer>
      
      {isLoading && <LoadingWrapper><FadeLoader color={primaryColor} /></LoadingWrapper>} 
      {errors && <h1>error</h1>}
      {
        postList?.map((post:post)=>{
          return <PostItem
            key={post.id}
            {...post}
          />
        })
      }
    </PostListContainer>
  );
};

export default PostList;
