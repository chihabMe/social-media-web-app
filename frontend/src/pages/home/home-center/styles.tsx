import styled from "styled-components";
import { md } from "../../../styles/sizes";

export const HomeCenterContainer = styled.div`
    flex:0.6;
   padding-top: 5rem;
   display: flex;
   flex-direction: column;
   gap:4rem;
   align-items:center ;

    @media screen and (max-width: ${md}){
        flex:1

        
    }
`