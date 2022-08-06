import styled from "styled-components/macro";


 export const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    padding:1rem 5rem;
    background-color: ${props=>props.theme.bg};
    position: sticky;
    top:0;
    z-index: 20;
` 
export const Panel = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap:2rem;
    svg{
        color:${props=>props.theme.textSoft}  !important;
        width:2.5rem;
        height:2.5rem;
    }
`
export const PanelUserActions = styled.ul`
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
`
export const UserAccountAvatar = styled.img`
    width:3.5rem;
    height: 3.5rem;
    border-radius: 25%;
`

 export const LeftSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    align-items: center;
 `
export  const SearchContainer = styled.div`
    width:100%;
    max-width: 35rem;
    display: flex;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    &.active{
        box-shadow: 0 0 2px 1px ${props=>props.theme.primary};

    }
 `
 export const SearchForm = styled.form`
    height: 3rem;
    width:100%;
    display: flex;
    align-items: center;
    @media screen and (max-width:650px){
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
color: ${props=>props.theme.primary};
    
 `