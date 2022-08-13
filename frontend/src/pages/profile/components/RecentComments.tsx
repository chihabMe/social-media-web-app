import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../../hooks/use-fetch';
import comment from '../../../models/comment'
import { baseApiUrl } from '../../../utils/globals';
import { RecentCommentList, RecentCommentItem, RecentCommentLink, RecentCommentsContainer, RecentCommentAvatar, ProfileTitle } from '../styles'
const RecentComments:React.FC<{username:string}> = ({username}) => {
  const {data:comments,request,isLoading}=useFetch()
  let endPoint = baseApiUrl+"/users/"+username+"/"+"recent-comments/"
  let fetchedData = useRef(false)
  useEffect(()=>{
    if(!fetchedData.current)
    request(endPoint,'get')
    fetchedData.current=true

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