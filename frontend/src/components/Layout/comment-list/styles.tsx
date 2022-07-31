import styled from 'styled-components'
import { textColor,primaryColor } from '../../../styles/colors'

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
gap:1rem;
`

export const CommentBodyText = styled.p`
color:${textColor};
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

`
export const CommentActionStat = styled.span`
color:${primaryColor};
font-size:1.4rem;

`
