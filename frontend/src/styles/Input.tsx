import styled from "styled-components";
import { primaryColor, redColor } from "./colors";


export const Input = styled.input`
    width:100%;
    border:none;
    padding-left: 5px;
    border-radius: 5px;
    min-height: 4rem;
    font-size:1.3rem;
    font-weight: bold;
    position: relative;
    &:focus{
        outline:2px solid ${primaryColor};
    }
    &.valid{
        outline: 2px solid ${primaryColor};
    }
    &.invalid{

        outline: 2px solid ${redColor};
        color:${redColor}
    }
`