import styled from 'styled-components/macro'
import { md } from '../../styles/sizes'

export const HomeRightSideContainer = styled.aside`
position: relative;
flex:0.2;
display: flex;
flex-direction: column;
gap:2rem;
padding-top: 3rem ;
align-items: flex-start;

    @media screen and (max-width: ${md}){
        display: none;

        
    }
`
export const StickyWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:100%;
position: sticky;
top:10rem;
gap:1rem;
    
`
export const RightSideSearch = styled.form`
    display: flex;
    width:100%;

`
export const RightSideSearchInput = styled.input`
    padding: 0.5rem 0.8rem;
    outline: none;
    font-size: 1.2rem;
    font-weight: bold;
    min-height: 3.5rem;
    width: 100%;
    text-transform: capitalize;
    color: ${props=>props.theme.text};
    background-color: ${props=>props.theme.bg};
    border:none;
    border-radius: 5px;
    &:focus{
        outline:2px solid ${props=>props.theme.primary};
    }
`
export const RightSideTitle = styled.h2`
    color: ${props=>props.theme.primary};
    text-align: left;
    text-transform: capitalize;
    font-size: 1.9rem;
    font-weight:bold;
`

export const FriendsListContainer = styled.ul`
    padding: 2rem 0;
    width:100%;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
`
export const FriendItem = styled.li`
display: flex;
align-items: center;
gap:1rem;
width: 100%;
padding:1rem 1rem;
border-radius: 10px;
transition: background-color 0.2s ease ;

cursor: pointer;
&:hover{
    background-color: ${props=>props.theme.bg};
    
}
`
export const FriendAvatar = styled.img`
    width:3rem;
    height:3rem;
    border-radius: 50%;
`
export const FriendUserName = styled.h3`
    font-size: 1.5rem;
    color:${props=>props.theme.text};

`
