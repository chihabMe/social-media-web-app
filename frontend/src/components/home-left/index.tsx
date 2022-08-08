import React from 'react'
import LeftSideSection from './LeftSideSection';
import { HomeLeftSideContainer, LeftSideList, LeftSideTitle } from './styles'
import {CgFeed} from 'react-icons/cg'
import {FaUserFriends} from 'react-icons/fa'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {HiVideoCamera,HiPhotograph,HiUserGroup, HiHome} from 'react-icons/hi';
import { StickyWrapper } from '../home-right/styles';

const HomeLeftSide = () => {
  return (
    <HomeLeftSideContainer>
      <StickyWrapper>

        <LeftSideList>
        <LeftSideTitle>Trending</LeftSideTitle>
            <LeftSideSection Image="https://picsum.photos/50/50" tag title='programing '/>
            <LeftSideSection Image="https://picsum.photos/50/50" tag title='java '/>
            <LeftSideSection Image="https://picsum.photos/50/50" tag title='python  '/>
            <LeftSideSection Image="https://picsum.photos/50/50" tag title='web '/>
        </LeftSideList>
       {/* 
        <LeftSideList>

            <LeftSideSection Icon={HiHome}  title='Main'/>
            <LeftSideSection Icon={HiUserGroup}  title='Friends'/>
            <LeftSideSection Icon={HiPhotograph}  title='Photos'/>
            <LeftSideSection Icon={HiVideoCamera}  title='Videos'/>
        </LeftSideList>
  */}
        <LeftSideList>
        <LeftSideTitle>Groups</LeftSideTitle>
            <LeftSideSection Image="https://picsum.photos/50/50" title='programing '/>
            <LeftSideSection Image="https://picsum.photos/50/50" title='java '/>
            <LeftSideSection Image="https://picsum.photos/50/50" title='python  '/>
            <LeftSideSection Image="https://picsum.photos/50/50" title='web '/>
        </LeftSideList>
      </StickyWrapper>
    </HomeLeftSideContainer>
  )
}

export default HomeLeftSide;