import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'
import useFetch from '../../hooks/use-fetch'
import { baseApiUrl } from '../../utils/globals'
import ProfileHeader from './components/profile-header/ProfileHeader'
import { ProfileContainer, ProfileTitle } from './styles'
import { useNavigate } from 'react-router-dom'
import { Socials } from './components/Socials'
import RecentComments from './components/RecentComments'
import PostList from '../home/home-center/posts-list/index';
  let socials  = [
    {name:"github",url:"link"},
    {name:"linkden",url:"link"},
    {name:"twitter",url:"link"},
  ]

const getUserPostsEndpoint= (username:string )=>baseApiUrl+`/users/${username}/posts/`;
let getUserEndPoint = baseApiUrl+"/users/"
const Profile = () => {
  const {username}=useParams()
  //requestProfile looks cleaner then profileRequest
  const {request:requestProfile,data:userData,isLoading:isLoadingProfile,errors:errorsProfile}= useFetch() 
  const {request:requestPosts,data:postList,isLoading:isLoadingPosts,errors:errorsPosts}= useFetch() 
  //
  // need it to redirect to another page 
  const navigator = useNavigate()
  //
   let user = useContext(AuthContext).user

   useEffect(()=>{

    //profile/{user} if user==loggedUser redirect to just profile    
  if(username==user?.username)navigator('/profile')
   },[user])
   //getting the profile data
  useEffect(()=>{
    if(username){
    getUserEndPoint+='/'+username+"/"
    requestProfile(getUserEndPoint,'get')
    }
  },[])
  useEffect(()=>{
    if(username && userData){
    user = userData
    }
  },[userData])
  //getting the user posts
  useEffect(()=>{
    if(username)requestPosts(getUserPostsEndpoint(username),'get')
    else{

    if(user?.username)requestPosts(getUserPostsEndpoint(user.username),'get')
    }

  },[user])
  return (
    <ProfileContainer>
        {user && <ProfileHeader me={username==undefined} desc={'non'} username={user?.username} avatar={user?.avatar} />}
        <Socials socials={socials} />
       {user && <RecentComments username={user?.username}  />}
       <ProfileTitle>posts</ProfileTitle>
       {user && <PostList isLoading={isLoadingPosts} errors={errorsPosts} postList={postList?.results} />}

    </ProfileContainer>
  )
}

export default Profile