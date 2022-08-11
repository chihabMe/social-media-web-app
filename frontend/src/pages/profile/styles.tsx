import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProfileContainer = styled.main`
display: flex;
flex-direction: column;
gap:1rem;
padding-top: 5rem;
align-items: center;
width: 100%;
max-width: 50rem;
margin: 0 auto;
`
export const ProfileTitle = styled.h1`
font-size:1.9rem;
text-transform: capitalize;
font-weight: bold;
width: 100%;
text-align: left;
color:${props=>props.theme.title};
`
export const ProfileSocials = styled.div`
width: 100%;
display: flex;
gap:2rem;
justify-content: center;
align-items: center;
`
export const ProfileSocial = styled.a`
    text-decoration: none;
    font-weight: bold;
    color:${props=>props.theme.title};
    cursor:pointer;
    transition: color 0.2s ease;
    font-size:1.3rem;
    &:hover{

    color:${props=>props.theme.primary};
    }
`

export const RecentCommentsContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;
`
export const RecentCommentList = styled.ul`
    list-style:none ; 
    width: 100%;
    display: flex;
    flex-direction:column;
`
export const RecentCommentItem = styled.li`
width: 100%;
display: flex;
gap:1rem;
align-items:center;
padding:1rem;
border-radius: 5px;
&:hover{
    background-color: ${props=>props.theme.bg};
}
`
export const RecentCommentAvatar = styled.img`
width:2.2rem;
height:2.2rem;
border-radius: 50%;
`

export const RecentCommentLink = styled(Link)`
display: block;
width: 100%;
text-decoration:none;
text-transform: capitalize;
text-align: left;
color:${props=>props.theme.title};
font-size:1.7rem;
cursor:pointer;
`