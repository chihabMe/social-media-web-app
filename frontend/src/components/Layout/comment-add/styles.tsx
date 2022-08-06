
import styled from 'styled-components'

export const CommentAddContainer = styled.div`
width:100%;
display:flex;
button{
    background-color: ${props=>props.theme.primary};
    color:${props=>props.theme.text};
    color:white;
}
`
export const CommentAddText = styled.textarea`
width:100%;
resize:none;
height:10rem;
padding:1rem;
font-size:1.4rem;
font-weight:500;
background-color:${props=>props.theme.bg};

border:none;
border-radius:7px;
color:${props=>props.theme.text};
color:white;

`
