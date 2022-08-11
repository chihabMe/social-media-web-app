import React from 'react'
import { social } from '../../../models/social'
import { ProfileSocial, ProfileSocials } from '../styles'

export const Socials:React.FC<{socials:social[]}> = ({socials}) => {
  return (
        <ProfileSocials>
          {socials.map((social,index)=>{
            return <ProfileSocial href={social.url}>{social.name}</ProfileSocial>
          })}
        </ProfileSocials>
  )
}
