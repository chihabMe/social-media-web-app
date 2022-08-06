import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth-context";
import AccountIcon from "../../../styles/icons/AccountIcon";
import MessageIcon from "../../../styles/icons/MessageIcon";
import NotificationIcon from "../../../styles/icons/NotificationIcon";
import HeaderPanelIcon from "./HeaderPanelIcon";
import { ThemeContext } from "styled-components";
import {
  Panel,
  UserAccountUsername,
  UserAccount,
  UserAccountAvatar,
  PanelUserActions,
  PanelUserAction,
} from "./styles";

const HeaderPanel:React.FC<{changeTheme:()=>void}> = (props) => {
  const theme = useContext(ThemeContext)
  const { user,logout } = useContext(AuthContext);
  const [showAction , setShowAction]= useState(false)
  const showActionToggle = ()=>{
    setShowAction(prev=>!prev);
  }

  return (
    <Panel>
      <HeaderPanelIcon Icon={AccountIcon} />
      <HeaderPanelIcon Icon={MessageIcon} />
      <HeaderPanelIcon Icon={NotificationIcon} />
      <UserAccount onClick={showActionToggle}>
        <UserAccountAvatar src={user?.avatar} />
        <UserAccountUsername>{user?.username}</UserAccountUsername>
        <svg
          color="gray"
          transform={showAction ? "rotate(-90)":"rotate(90)"}
          width="2.5rem"
          height="2.5rem"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </UserAccount>
        <PanelUserActions className={showAction ?"active":""}>
            <PanelUserAction>profile</PanelUserAction>
            <PanelUserAction onClick={props.changeTheme}>change to  {theme?.name=='light' ? "dark" :"light"}</PanelUserAction>
            <PanelUserAction onClick={logout}>logout</PanelUserAction>
          </PanelUserActions>
    </Panel>
  );
};

export default HeaderPanel;
