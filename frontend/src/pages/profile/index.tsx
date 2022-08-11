import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'
import useFetch from '../../hooks/use-fetch'
import { baseApiUrl } from '../../utils/globals'
import ProfileHeader from './components/profile-header/ProfileHeader'
import { ProfileContainer } from './styles'
import { useNavigate } from 'react-router-dom'

let getUserEndPoint = baseApiUrl+"/users/"
const Profile = () => {
  const {username}=useParams()
  const {request,data,isLoading,errors}= useFetch() 
  const navigator = useNavigate()
   let user = useContext(AuthContext).user
   useEffect(()=>{

  if(username==user?.username)navigator('/profile')
   },[user])
  useEffect(()=>{
    if(username){
    getUserEndPoint+='/'+username+"/"
    request(getUserEndPoint,'get')
    }
  },[])
  useEffect(()=>{
    if(username && data){
    user = data
    }
  },[data])

  return (
    <ProfileContainer>
        {user && <ProfileHeader me={username==undefined} desc={'non'} username={user?.username} avatar={user?.avatar} />}
    </ProfileContainer>
  )
}

export default Profile