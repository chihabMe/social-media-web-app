import styled from "styled-components";
import { primaryColor } from "./colors";


export const Input = styled.input`
    width:100%;
    border:1px solid ${primaryColor};
    padding-left: 5px;
    border-radius: 5px;
    min-height: 4rem;
    font-size:1.3rem;
    font-weight: bold;
    &:focus{
        outline:1px solid ${primaryColor};
    }
`