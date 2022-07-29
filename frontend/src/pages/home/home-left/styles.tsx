import styled from "styled-components/macro";
import { backgroundColor, primaryColor, textColor } from "../../../styles/colors";
import { md } from "../../../styles/sizes";

export const HomeLeftSideContainer  = styled.div`
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
    background-color: ${backgroundColor};
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
        color: ${primaryColor}  !important;
            }
            li{

        color: ${primaryColor}  !important;
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
color: ${primaryColor};
font-weight: bold;
`
export const LeftSideSectionTitle = styled.li`
    font-weight: bold;
    transition: all 0.2s ease;
    font-size: 1.35rem;
    color: ${textColor};

    
`