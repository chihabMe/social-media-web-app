import {Link} from "react-router-dom";
import styled,{keyframes} from "styled-components";
import { md, sm } from "../../../../../styles/sizes";  

const showOnAnimation = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`
export const PostItemContainer = styled.div`
    cursor: pointer;
    text-decoration:none;
    width:100%;
    max-width:50rem;
    padding: 1rem;
    background-color: ${props=>props.theme.bg};
    display: flex;
    flex-direction: column;
    gap:1rem;
    border-radius: 10px;
    animation: ${showOnAnimation} 0.3s ease;
    @media screen and (max-width:${sm}) {
        width: 100%;
        
    }
`
export const PostItemImage = styled.img`
    width:100%;
    object-fit:cover;
    border-radius: 10px;
    height: 35rem;
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
    color:${props=>props.theme.text};
    font-weight:bold;
    font-size:1.2rem;
`
export const UserAvatar = styled.img`
    width:5rem;
    height:5rem;
    border-radius: 25%;
`
export const UserUserName = styled.h3`
    font-weight: bold;
    color: ${props=>props.theme.text};
    font-size:1.5rem;
    font-weight:bold;

`
export const PostCenterRight = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
    svg{
        width:3rem !important;
        height:3rem !important;
    }
    span{
        font-size:1.4rem !important;
    }
    
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
    gap:1.2rem;
    flex-wrap: wrap;
    &:hover{

    }
`

export const PostItemTag = styled(Link)`
color:${props=>props.theme.primary};
font-weight: bold;
font-size:1.5rem;
text-decoration:none;
cursor: pointer;
opacity: 0.9;
&:hover{
opacity: 1;
}
&::before{
    content:"#";
}
`

export const PostItemBottomBody = styled.div`
    
    font-weight: bold;
    text-decoration:none;
    display: flex;
    gap:3px;
    flex-wrap: wrap;
    font-size:1.8rem;
    font-weight: 500;
    text-align: left;
    color:${props=>props.theme.text};
    span{
    font-size:1.5rem;
    }
    &:hover{

    }
`
