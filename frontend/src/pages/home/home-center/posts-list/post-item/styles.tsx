import styled from "styled-components";
import { primaryColor, textColor } from "../../../../../styles/colors";
import { md, sm } from "../../../../../styles/sizes";  

export const PostItemContainer = styled.div`
    width:45%;
    max-height:50rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
    border-radius: 15px;
    @media screen and (max-width:${sm}) {
        width: 100%;
        
    }
`
export const PostItemImage = styled.img`
    width:100%;
    border-radius: 15px;
    height: 50%;
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
    width:3rem;
    height:3rem;
    border-radius: 50%;
`
export const UserUserName = styled.h3`
    font-weight: bold;
    color: ${textColor};
    font-size:1.3rem;

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