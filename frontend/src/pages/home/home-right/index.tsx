import React from 'react'
import FriendList from './FriendList';
import { HomeRightSideContainer, RightSideSearch, RightSideSearchInput, RightSideTitle } from './styles';

const HomeRightSide = () => {
  return (
    <HomeRightSideContainer>
        <RightSideSearch>
            <RightSideSearchInput placeholder='search ...'></RightSideSearchInput>
        </RightSideSearch>
        <RightSideTitle>Friends</RightSideTitle>
        <FriendList/>
    </HomeRightSideContainer>
  )
}

export default HomeRightSide;