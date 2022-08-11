import { Link,NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { mediaMd, mediaSm } from "../../../styles/sizes";


 export const HeaderContainer = styled.header`
    width:100%;
    display:flex;
    justify-content: space-between;
    padding:1rem 5rem;
    background-color: ${props=>props.theme.bg};
    position: sticky;
    top:0;
    z-index: 20;
    @media ${mediaMd}{
        padding:2rem 3rem;
        
    }
    
    @media ${mediaSm}{
        flex-direction: column;
        padding:7rem 0;
        align-items:center;
        bottom: 0;
        height:100vh;
        width:auto;
        max-width:17vw;
    }
` 
export const Panel = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap:2rem;
    svg{
        color:${props=>props.theme.textSoft}  !important;
        width:2.2rem !important;
        height:2.2rem !important;
    }
    @media ${mediaSm}{
        gap:1rem;
        align-items:center;
        flex-direction: column;
        width:100%;
        height:unset;

    }
`
export const PanelUserActions = styled.ul`
box-shadow: 0 0 2px 1px  ${props=>props.theme.primary};
display: none;
padding:1.5rem 1rem;
width:15rem;
list-style:none;
position: absolute;
top:150%;
background-color: ${props=>props.theme.bg};
z-index: 100 ;
right:0;
border-radius: 5px;

&.active{
    display: block;

@media ${mediaSm}{
    top:0;
    left:150%;
}

}
`
export const PanelUserAction = styled.li`
padding: 0.8rem;
border-radius: 5px;
text-align:left;
cursor: pointer;
font-weight:500;
font-size:1.4rem;
text-transform:capitalize;
color:${props=>props.theme.text};
width:100%;
&:hover{
color:${props=>props.theme.primary};
background-color:${props=>props.theme.bgSoft};
}

`
export const UserAccount = styled.div`

    margin-left: 1rem;
    display: flex;
    align-items: center;
    gap:1rem;
    cursor: pointer;
    @media ${mediaSm}{
        align-items: center;
        flex-direction: column;
        align-items:center;
        position: relative;
    }

`
export const UserAccountAvatar = styled.img`
    width:3.5rem;
    height: 3.5rem;
    border-radius: 25%;
    @media ${mediaSm}{
        width:3rem;
        height:3rem;
    }
`

 export const LeftSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
 `
export  const SearchContainer = styled.div`
    width:100%;
    max-width: 35rem;
    display: flex;
    position: relative;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    &.active{
        box-shadow: 0 0 2px 1px ${props=>props.theme.primary};

    }
    @media ${mediaSm}{
        max-width: unset;
    }

 `
 export const LeftSideMenu= styled.ul`
 list-style: none;
 display: flex;
 align-items: center;
 gap:2rem;
 @media ${mediaSm}{
    gap:1rem;
    flex-direction: column;
 }
 li{
    a{
    text-decoration: none;
    display: block;
    padding:0.8rem;
    border-radius: 25%;
    background-color: ${props=>props.theme.bgSoft};
    &.active{
        svg{

        color:${props=>props.theme.primary};
        }
    }
    svg{
        width:2.2rem;
        height:2.2rem;
        color:${props=>props.theme.textSoft};
    }
    &:hover{
        svg{

        color:${props=>props.theme.primary};
        }
    }
    @media ${mediaSm}{
        display: block;
    }
    }
 }
 
 `
 export const SearchForm = styled.form`
    height: 3rem;
    width:100%;
    display: flex;
    align-items: center;
    @media ${mediaMd}{
    }
    @media ${mediaSm} {
        display: none;
        
    }
    svg{
            color:${props=>props.theme.primary} !important;
    }
 `
 export const  SearchInput = styled.input`
 height: 100%;

 color: ${props=>props.theme.text};
 width:100%;
 min-height: 2rem;
 border:none;
 outline: none;
 padding-left: 2rem;
 font-size: 1.3rem;
 background-color: transparent;
 font-weight: bold;
 

    
 `
 export const UserAccountUsername = styled.h2`
    color: ${props=>props.theme.title};
    text-transform: capitalize;
 `
 export const SearchButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    border:none;
    outline: none;
 `
export const Logo = styled.div`
font-size: 3rem;
font-weight: bold;
a{

color: ${props=>props.theme.primary} ;
}
    
 `
 export const SearchResultContainer = styled.div`
    width:100%;
    list-style: none;
    position: absolute;
    top:150%;
    padding:1rem 0;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: ${props=>props.theme.bg};
    box-shadow:0 0 2px 1px ${props=>props.theme.primary};
    left:0;
    @media ${mediaSm} {
        display: none;
        
    }
 `
 export const SearchResultItem = styled(Link)`
    text-decoration: none;
    gap:1rem;
    width:100%;
    border-radius: 3px;
    display: flex;
    align-items:center;
    padding:0.9rem 1rem;
    font-size:1.4rem;
    color:${props=>props.theme.text};
    text-align:left;
    cursor: pointer;
    button{

 background-color: ${props=>props.theme.primary};
 color:white;
 border-radius:5px;
 cursor: pointer;
 padding: 0.8rem 1rem;
 border:none;
 text-align: right;
 align-self: flex-end;
 justify-self: flex-end;
 &.active{
    background-color: ${props=>props.theme.red};
 }
    }
 `
 export const SearchResultAvatar = styled.img`
   width:3.5rem;
   height:3.5rem;
   border-radius:50% ;
 `
 export const SearchResultUserUsername  = styled.h4`
    color:${props=>props.theme.text};
    font-size:1.4rem;
    border-radius: bold;
    text-transform: capitalize;
    width:50%;
 `
 export const SearchResultUserFollowButton = styled.button`
 `
 export const NoResults = styled.h2`
    color:${props=>props.theme.primary};
 `
 export const HeaderNavLink  = styled(NavLink)`
    
    text-decoration: none;
    display: block;
    padding:0.8rem;
    border-radius: 25%;
    background-color: ${props=>props.theme.bgSoft};
    svg{
        width:2.2rem;
        height:2.2rem;
        color:${props=>props.theme.textSoft};
    }
    .active{
        color:${props=>props.theme.primary};
    }
    &:hover{
        svg{

        color:${props=>props.theme.primary};
        }
    }
    @media ${mediaSm}{
        display: block;
    }
    }
    
 `