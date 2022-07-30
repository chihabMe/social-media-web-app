import {Link} from "react-router-dom";
import styled,{keyframes} from "styled-components";
import { backgroundColor, primaryColor, textColor } from "../../../../../styles/colors";
import { md, sm } from "../../../../../styles/sizes";  

const showOnAnimation = keyframes`
    0%{
        opacity: 0;
        transform: scale(0);
        border-radius: 50%;
    }
    100%{
        border-radius: 10px;
        opacity: 1;
        transform: scale(1);
    }
`
export const PostItemContainer = styled(Link)`
    cursor: pointer;
    width:45%;
    max-height:50rem;
    padding: 1rem;
    border-radius: 10px;
    background-color: ${backgroundColor};
    display: flex;
    flex-direction: column;
    gap:1rem;
    border-radius: 15px;
    transition: all 0.2s linear;
    animation: ${showOnAnimation} 0.3s ease;
    &:hover{
        box-shadow: 0 0 5px 1px ${primaryColor};
    }
    @media screen and (max-width:${sm}) {
        width: 100%;
        
    }
`
export const PostItemImage = styled.img`
    width:100%;
    border-radius: 15px;
    height: 60%;
    min-height: 4rem;
`
export const PostItemCenterContainer = styled.div`
        width: 100%;
        padding:0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    
`
export const PostIconContainer = styled.div`
display: flex;
align-items: center;
gap:1rem;
`
export const PostIconText = styled.span`
    color:${textColor};
    font-weight:bold;
    font-size:1.2rem;
`
export const UserAvatar = styled.img`
    width:4rem;
    height:4rem;
    border-radius: 50%;
`
export const UserUserName = styled.h3`
    font-weight: bold;
    color: ${textColor};
    font-size:1.5rem;

`
export const PostCenterRight = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
    
`

export const PostItemBottomContainer = styled.div`
width:100%;
padding:1rem 1rem;
display: flex;
flex-direction: column;
gap:1rem;
`
export const PostItemBottomTags = styled.div`
    display: flex;
    gap:1rem;
    flex-wrap: wrap;
`

export const PostItemTag = styled.a`
color:${primaryColor};
font-weight: bold;
font-size:1.3rem;
cursor: pointer;
&::before{
    content:"#";
}
`

export const PostItemBottomBody = styled.p`
    font-size:1.3rem;
    font-weight: 500;
    text-align: left;
    color:gray
`
