import React from 'react'
import { FriendAvatar, FriendItem, FriendUserName } from './styles'

const FriendListItem:React.FC<{image:string,username:string}> = ({image,username}) => {
  return (
    <FriendItem>
    <FriendAvatar src={image}/>
    <FriendUserName>{username}</FriendUserName>
    </FriendItem>
  )
}

export default FriendListItem;