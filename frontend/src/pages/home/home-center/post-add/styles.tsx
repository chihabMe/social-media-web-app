import styled from "styled-components";
import { mediaSm } from "../../../../styles/sizes";

export const PostAddContainer = styled.div`
    width:100%;
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    padding:2rem 3rem;
    gap:2rem;
    @media ${mediaSm}{
        padding:2rem 1rem;
    }
    button{
        width:100%;
        color:${props=>props.theme.bg} !important;
        color:white !important;

    }
    svg{
        width:3rem;
        height: 3rem;
        color:${props=>props.theme.title};
        &.active{
        color:${props=>props.theme.primary};
        }
    }
` 
export const PostAddForm  = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    gap:2rem;
    align-items: flex-end;
    button{
        width:100%;
        background-color: ${props=>props.theme.primary};
        color:${props=>props.theme.bg} !important;
        color:white !important;
        border-radius: 15px !important;

    }
`
export const PostAddAvatar = styled.img`
    width:4rem;
    height: 4rem;
    border-radius: 25%;
`
export const PostAddText = styled.textarea`
    resize: none;
    width: 100%;
    height: 5rem;
    border-radius: 10px;
    padding: 1rem 2rem;
    outline: none;
    font-weight:500;
    font-size: 1.4rem;
    border: none;
    background-color: ${props=>props.theme.bg};
    color: ${props=>props.theme.text};

    border-radius: 20rem;

`
export const PostAddFormController = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap:2rem;
`
export const PostFileAddContainer = styled.label`
    cursor: pointer;
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s ease;
    padding:.4rem;
    border-radius: 5px;
    &:hover{
        background-color: ${props=>props.theme.primary};
        opacity: 0.8;
        h3,svg{
            color:white !important;
        }
    }

    
`
export const FileUpload= styled.input`
    display: none;
`
export const PostFileAddTitle = styled.h3`
color: ${props=>props.theme.text};
`