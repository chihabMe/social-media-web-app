import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor, textColor } from "../../styles/colors";

export const SignupPage  = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`

export const SignUpFormWrapper = styled.div`
    width:100%;
    max-width: 350px;
    padding:1rem;
    text-align:left ;
    display: flex;
    flex-direction: column;
    gap:2rem;
`
export const SignUpTitle = styled.h2`
    font-weight:bold;
    color:${textColor};
    font-size:2.5rem;
`
export const GoToLogIn = styled(Link)`
    color:${primaryColor};
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    display: block;
    margin-top:1rem;
`