import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/use-fetch';
import User from '../../../models/User';
interface Props {
    userList:User[]
}
const SearchUsersResults:React.FC<Props> = ({userList}) => {

  return (
    <div>
        <h1>users search</h1>
        {userList?.length}
        {userList?.map(user=>user.username)}
    </div>
  )
}

export default SearchUsersResults