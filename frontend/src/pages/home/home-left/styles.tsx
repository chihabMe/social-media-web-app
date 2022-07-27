import styled from "styled-components/macro";
import { primaryColor, textColor } from "../../../styles/colors";
import { md } from "../../../styles/sizes";

export const HomeLeftSideContainer  = styled.div`
    flex:0.2;
    display: flex;
    flex-direction: column;
    gap:2rem;
    padding-top    :5rem ;
    @media screen and (max-width: ${md}){
        display: none;

        
    }
`

export const LeftSideList = styled.div`
    width: 100%;
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
width:50%;
font-size: 1.6rem;
color: ${primaryColor};
font-weight: bold;
`
export const LeftSideSectionTitle = styled.li`
    font-weight: bold;
    transition: all 0.2s ease;
    font-size: 1.5rem;
    color: ${textColor};

    
`