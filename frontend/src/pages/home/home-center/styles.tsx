import styled from "styled-components";
import { md } from "../../../styles/sizes";

export const HomeCenterContainer = styled.main`
    flex:0.6;
    @media screen and (max-width: ${md}){
        flex:1

        
    }
`
export const HomeCenterWrapper = styled.div`
width:100%;
max-width: 55rem;
margin:0 auto;
   padding-top: 5rem;
   display: flex;
   flex-direction: column;
   gap:4rem;
   align-items:center ;
    
`