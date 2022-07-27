import styled from "styled-components";
import { textColor } from "../../../../styles/colors";

export const PostAddContainer = styled.div`
    width:100%;

    max-width: 40rem;
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
    height: 4rem;
    border-radius: 6px;
    padding: 1rem;
    outline: none;
    font-weight:500;
    font-size: 1.4rem;
    border: none;
    background-color: #cfe7de;
`
export const PostAddFormController = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap:2rem;
`
export const PostFileAddContainer = styled.div`
    cursor: pointer;
    display: flex;
    gap:1rem;
    align-items: center;
    
`
export const PostFileAddTitle = styled.h3`
color: ${textColor};
`