import React from 'react'
import LeftSideSection from './LeftSideSection';
import { HomeLeftSideContainer, LeftSideList, LeftSideTitle } from './styles'
import {CgFeed} from 'react-icons/cg'
import {FaUserFriends} from 'react-icons/fa'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {HiVideoCamera,HiPhotograph,HiUserGroup, HiHome} from 'react-icons/hi';

const HomeLeftSide = () => {
  return (
    <HomeLeftSideContainer>
        <LeftSideList>
            <LeftSideSection Icon={HiHome}  title='Main'/>
            <LeftSideSection Icon={HiUserGroup}  title='Friends'/>
            <LeftSideSection Icon={HiPhotograph}  title='Photos'/>
            <LeftSideSection Icon={HiVideoCamera}  title='Videos'/>
        </LeftSideList>
        <LeftSideTitle>Groups</LeftSideTitle>
        <LeftSideList>
            <LeftSideSection Image="https://picsum.photos/50/50" title='programing '/>
            <LeftSideSection Image="https://picsum.photos/50/50" title='java '/>
            <LeftSideSection Image="https://picsum.photos/50/50" title='python  '/>
            <LeftSideSection Image="https://picsum.photos/50/50" title='web '/>
        </LeftSideList>
    </HomeLeftSideContainer>
  )
}

export default HomeLeftSide;