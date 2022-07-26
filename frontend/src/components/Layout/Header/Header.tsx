import React, { FormEvent, FormEventHandler, useState } from 'react'
import { SearchContainer,Panel,HeaderContainer, UserAccountAvatar, UserAccount, LeftSide, Logo, SearchInput, SearchForm, SearchButton } from './styles';
import MessageIcon from '../../../styles/icons/MessageIcon';
import AccountIcon from '../../../styles/icons/AccountIcon';
import NotificationIcon from '../../../styles/icons/NotificationIcon';
import SearchIcon from '../../../styles/icons/SearchIcon';
import { Form } from '../../../styles/Form';
import HeaderPanel from './HeaderPanel';
import { HeaderLeftSide } from './HeaderLeftSide';

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderLeftSide/>

       <HeaderPanel/> 
    </HeaderContainer>
  )
}

export default Header