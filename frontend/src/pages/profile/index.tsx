import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth-context'
import ProfileHeader from './components/profile-header/ProfileHeader'
import { ProfileContainer } from './styles'

const Profile = () => {
    const {user}= useContext(AuthContext)
  return (
    <ProfileContainer>
        {user && <ProfileHeader desc={'non'} username={user?.username} avatar={user?.avatar} />}
    </ProfileContainer>
  )
}

export default Profile