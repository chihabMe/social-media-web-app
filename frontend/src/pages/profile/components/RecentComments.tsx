import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/use-fetch';
import comment from '../../../models/comment'
import { baseApiUrl } from '../../../utils/globals';
import { RecentCommentList, RecentCommentItem, RecentCommentLink, RecentCommentsContainer, RecentCommentAvatar, ProfileTitle } from '../styles'
const RecentComments:React.FC<{username:string}> = ({username}) => {
  const {data:comments,request,isLoading}=useFetch()
  let endPoint = baseApiUrl+"/users/"+username+"/"+"recent-comments/"
  useEffect(()=>{
    request(endPoint,'get')
  },[])
  return (
    <RecentCommentsContainer>
      <ProfileTitle>Recent Comments </ProfileTitle>

        <RecentCommentList >
        {comments?.map((ele:comment)=>{
            return <RecentCommentItem key={ele.id}>
              <RecentCommentAvatar src={ele.avatar}/>
                <RecentCommentLink to={`/post/${ele.postSlug}`}>{ele.body}</RecentCommentLink>
            </RecentCommentItem>
        })}
        </RecentCommentList>
    </RecentCommentsContainer>
  )
}

export default RecentComments