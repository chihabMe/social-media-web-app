import styled from "styled-components";
import { backgroundColor, primaryColor, textColor } from "../../../../styles/colors";

export const PostAddContainer = styled.div`
    width:100%;
    border-radius: 10px;
    background-color: ${backgroundColor};
    padding:2rem 3rem;
    max-width: 53rem;
    display: flex;
    flex-direction: column;
    gap:2rem;
` 
export const PostAddForm  = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    gap:2rem;
    align-items: center;
`
export const PostAddAvatar = styled.img`
    width:4rem;
    height: 4rem;
    border-radius: 50%;
`
export const PostAddText = styled.textarea`
    resize: none;
    width: 100%;
    height: 5rem;
    border-radius: 10px;
    padding: 1rem;
    outline: none;
    font-weight:500;
    font-size: 1.4rem;
    border: none;
    background-color: black;
    color: ${textColor};

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
        background-color: ${primaryColor};
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
color: ${textColor};
`