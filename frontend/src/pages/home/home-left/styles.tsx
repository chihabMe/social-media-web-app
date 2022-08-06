import styled from "styled-components/macro";
import { md } from "../../../styles/sizes";

export const HomeLeftSideContainer  = styled.div`
    max-height:100vh;
    position: sticky;
    top:5rem;
    flex:0.2;
    display: flex;
    flex-direction: column;
    gap:2rem;
    padding-top    :5rem ;
    align-items: center;
    @media screen and (max-width: ${md}){
        display: none;

        
    }
`

export const LeftSideList = styled.div`
    padding:3rem ;
    border-radius: 10px;
    background-color: ${props=>props.theme.bg};
    max-width: 200px;
    display: flex;
    flex-direction: column;
    gap:2rem;
    align-items: center;
`
export const LeftSideSectionContainer = styled.ul`
    min-width: 150px;
    list-style: none;
    display: flex;
    align-items: center;
    gap:2rem;

    cursor: pointer;
        &:hover{
            svg{

        transition: all 0.2s ease;
        color: ${props=>props.theme.primary}  !important;
            }
            li{

color:${props=>props.theme.primary};
            }
    }
`
export const LeftSideSectionImage = styled.img`
    width:3rem;
    height: 3rem;
    border-radius: 25%;
`
export const LeftSideTitle= styled.h2`
width:100%;
max-width: 200px;
text-align:left;
font-size: 1.6rem;
color:${props=>props.theme.primary};
font-weight: bold;
`
export const LeftSideSectionTitle = styled.li`
    font-weight: bold;
    transition: all 0.2s ease;
    font-size: 1.35rem;
    color: ${props=>props.theme.text};

    
`