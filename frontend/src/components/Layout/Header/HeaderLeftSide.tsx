import React from "react";
//import HeaderSearch from './HeaderSearch'
import {  LeftSide, LeftSideMenu, Logo } from "./styles";
import { HiOutlineHome, HiOutlineSearch,HiOutlineCog,HiOutlineLogout, HiOutlineUser } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const HeaderLeftSide = () => {
  return (
    <LeftSide>
      <LeftSideMenu>
        <NavLinkComp to='/' Icon={HiOutlineHome} />
        <NavLinkComp to='/search' Icon={HiOutlineSearch} />
        <NavLinkComp to='/profile' Icon={HiOutlineUser} />
        <NavLinkComp to='/settings' Icon={HiOutlineCog} />
        <NavLinkComp  to='/logout' Icon={HiOutlineLogout} />
      </LeftSideMenu>
    </LeftSide>
  );
};

const NavLinkComp:React.FunctionComponent<{Icon:any,to:string}> = ({Icon,to})=>{
        return <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={to}
          >
            <Icon />
          </NavLink>
        </li>
}
