import styled from 'styled-components/macro'
import { primaryColor, textColor } from '../../../styles/colors'
import { md } from '../../../styles/sizes'

export const HomeRightSideContainer = styled.div`
flex:0.2;
display: flex;
flex-direction: column;
gap:2rem;
padding-top: 3rem ;
padding-left: 1rem;
padding-right: 1rem;
align-items: flex-start;

    @media screen and (max-width: ${md}){
        display: none;

        
    }
`
export const RightSideSearch = styled.form`
    display: flex;
`
export const RightSideSearchInput = styled.input`
    border: none;
    outline: none;
    font-size: 1.2rem;
    font-weight: bold;
    min-height: 3rem;
    width: 100%;
    text-transform: capitalize;
    color: ${textColor};
`
export const RightSideTitle = styled.h2`
    color: ${primaryColor};
    text-align: left;
    text-transform: capitalize;
    font-size: 1.9rem;
    font-weight:bold;
`

export const FriendsListContainer = styled.ul`
    width:100%;
    display: flex;
    flex-direction: column;
    gap:2rem;
`
export const FriendItem = styled.li`
display: flex;
align-items: center;
gap:2rem;
width: 100%;
height:3rem;
cursor: pointer;
`
export const FriendAvatar = styled.img`
    width:3.5rem;
    height:3.5rem;
    border-radius: 50%;
`
export const FriendUserName = styled.h3`
    font-size: 1.5rem;
    color:${textColor}

`