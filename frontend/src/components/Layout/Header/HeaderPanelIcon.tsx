import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { primaryColor } from '../../../styles/colors'

const HeaderPanelIcon:React.FC<{children?:any,Icon:React.FC,active?:boolean,clickHandler?:(e:any)=>void}> = ({children,active=true,clickHandler,Icon}) => {
    const [isActive,setIsActive] = useState(active)
    const extendHandler = (e:any)=>{
        if(clickHandler){
            clickHandler(e)
        }else{
            setIsActive(false)
        }
        console.log(isActive)
    }
  return (
     <HeaderPanelIconContainer onClick={extendHandler}>
        <Icon/>
        <ActiveDot className={isActive ? "active":""}/>
        {children}
     </HeaderPanelIconContainer>

  )
}
const HeaderPanelIconContainer = styled.div`
position: relative;
cursor: pointer;
`
const ActiveDot = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: ${primaryColor};
    border-radius: 50%;
    position: absolute;
    visibility: hidden;
    top:1px;
    right: 4px;
    transition:all 0.3s ;
    opacity: 0;
    transform: scale(0);
    &.active{
        visibility: visible;
        opacity: 1;
        transform: scale(1);
        
    }
`

export default HeaderPanelIcon