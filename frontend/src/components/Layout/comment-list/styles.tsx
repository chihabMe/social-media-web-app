import { MdPanoramaPhotosphere } from 'react-icons/md'
import styled from 'styled-components'


export const CommentListContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:1.5rem;
`

export const CommentItemContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
`

export const CommentBodyText = styled.p`
padding:2rem;
color:${props=>props.theme.text};
text-align:left;
font-size:1.35rem;
font-weight:500;
`
export const CommentFooterWrapper = styled.div`
padding:1rem 2rem;
display:flex;
justify-content:flex-end;
gap:1.2rem;
align-items:center;

`
export const CommentAction = styled.div`
display:flex;
gap:1rem;
align-items:center;
font-weight:bold;
cursor:pointer;
svg{
    width:2.5rem;
    height: 2.5rem;
    color:${props=>props.theme.primary} !important;
}

`
export const CommentActionStat = styled.span`
color:${props=>props.theme.primary};
font-size:1.4rem;

`
export const CommentReplayAdd = styled.form`
display: flex;
    width:100%;
    border-radius: 5px;
    border:none;
    padding: 1rem;;
    visibility: hidden;
    opacity: 0;
    transform: opacity 0.2s ease;
    background-color: ${props=>props.theme.bgSoft};
    gap:1rem;
    button{
        background-color: ${props=>props.theme.primary};
        color:${props=>props.theme.text};
        color:white;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0.5rem 2rem;
    }
    &.active{
        visibility: visible;
        opacity: 1;
    }
    
`
export const CommentReplayInput = styled.textarea`
width: 100%;
resize: none;
font-weight: 500;
outline:none;
border:none;
font-size:1.4rem;
height: 100%;
border-radius: 5px;
color:${props=>props.theme.text};
padding:0.2rem 1rem;
background-color: ${props=>props.theme.bg};
`