import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor,textColor } from "../../styles/colors";

export const LoginPage  = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`

export const LoginFormWrapper = styled.div`
    width:100%;
    max-width:350px;
    text-align:left ;
    display: flex;
    flex-direction: column;
    gap:2rem;
    padding: 1rem;
`
export const LoginTitle = styled.h2`
    font-weight:bold;
    color:${textColor};
    font-size:2.5rem;
`
export const GoToSignUp = styled(Link)`
    color:${primaryColor};
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    display: block;
    margin-top:1rem;
`