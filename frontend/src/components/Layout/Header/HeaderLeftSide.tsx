import React from 'react'
import SearchIcon from '../../../styles/icons/SearchIcon'
import HeaderSearch from './HeaderSearch'
import { LeftSide, Logo  } from './styles'

export const HeaderLeftSide = () => {

  return (
    <LeftSide>
        <Logo>Logo</Logo>
        <HeaderSearch/>

      </LeftSide>
  )
}
