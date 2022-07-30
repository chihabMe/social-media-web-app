import React from 'react'
import SearchIcon from '../../../styles/icons/SearchIcon'
import HeaderSearch from './HeaderSearch'
import { LeftSide, Logo  } from './styles'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled(NavLink)`
text-decoration:none;
color:white;
`

export const HeaderLeftSide = () => {

  return (
    <LeftSide>
        <Logo><Nav to='/' >H</Nav></Logo>
        <HeaderSearch/>

      </LeftSide>
  )
}
