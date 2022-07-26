import React from 'react'
import FriendListItem from './FreindListItem'
import {   FriendsListContainer } from './styles'

const FriendList = () => {
  return (
        <FriendsListContainer>
            <FriendListItem image='https://picsum.photos/60/60' username='user1 ' />
            <FriendListItem image='https://picsum.photos/60/60' username='user2 ' />
            <FriendListItem image='https://picsum.photos/60/60' username='user3 ' />
            <FriendListItem image='https://picsum.photos/60/60' username='user4'/>

        </FriendsListContainer>
  )
}

export default FriendList