import styled from "styled-components/macro";
import { primaryColor, textColor } from "../../../styles/colors";


 export const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    padding:2rem 5rem;
    background-color: white;
    justify-content: space-between;
` 
export const Panel = styled.div`
    display: flex;
    align-items: center;
    gap:2rem;
`
export const UserAccount = styled.div`
margin-left: 1rem;
    display: flex;
    align-items: center;
    gap:1rem;
    cursor: pointer;
`
export const UserAccountAvatar = styled.img`
    width:3rem;
    height: 3rem;
    border-radius: 100%;
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
 `
 export const SearchForm = styled.form`
    height: 3.5rem;
    width:100%;
    display: flex;
    align-items: center;
    @media screen and (max-width:650px){
        display: none;
        
    }
 `
 export const  SearchInput = styled.input`
 height: 100%;
 color: ${textColor};
 width:100%;
 min-height: 3rem;
 border:none;
 outline: none;
 padding-left: 2rem;
 font-size: 1.3rem;
 font-weight: bold;
    
 `
 export const UserAccountUsername = styled.h2`
    color: ${textColor};
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
color: ${primaryColor};
    
 `