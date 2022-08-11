import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/use-fetch'
import { Button, PrimaryButton } from '../../styles/Button'
import { baseApiUrl } from '../../utils/globals'

const FollowButton:React.FC<{user:string,followed:boolean}> = ({user,followed}) => {
    const {request,data,isLoading} = useFetch()
    const [followed_,setFollowed]=useState<boolean>(followed)
    const addFollow = ()=>{
      let endpoint = baseApiUrl+"/users/"+user+"/follow/"
      request(endpoint,'post','application/json')
    }
    useEffect(()=>{
      if(data){
        if(data.action=='add')setFollowed(true)
        else setFollowed(false)
      }
  
    },[data])
  return (
    <PrimaryButton onClick={addFollow} color='white' className={followed_?"active":""} valid>{followed_?"unfollow":"follow"}</PrimaryButton>
  )
}

export default FollowButton