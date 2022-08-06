import React from 'react'
import FriendList from './FriendList';
import { HomeRightSideContainer, RightSideSearch, RightSideSearchInput, RightSideTitle, StickyWrapper } from './styles';

const HomeRightSide = () => {
  return (
    <HomeRightSideContainer>
      <StickyWrapper>
        <RightSideSearch>
            <RightSideSearchInput placeholder='search ...'></RightSideSearchInput>
        </RightSideSearch>
        <FriendList/>
      </StickyWrapper>
    </HomeRightSideContainer>
  )
}

export default HomeRightSide;