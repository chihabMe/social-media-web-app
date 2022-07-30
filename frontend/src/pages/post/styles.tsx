import styled from 'styled-components'
import { textColor,primaryColor } from '../../styles/colors'



export const PostPageContainer = styled.div`
postition:relative;
width:100%;
display:flex;
gap:3rem;
`
export const SpinnerContainer = styled.div`
position:absolute;
top:20%;
transform:translate(-35%);
left:50%;
display:flex;
align-items:center;
padding-top:10rem;

`
export const PostCenterConitaner = styled.div`
padding-top:5rem;
backgrond-color:gray;
flex:0.55;
margin-left:15%;
display:flex;
flex-direction:column;
gap:3rem;
`
export const PostRightSide = styled.div`
flex:0.25;
display:flex;
flex-direction:column;
align-items:center;
`
export const PostRightSideUser = styled.div`
width:100%;
max-width:20rem;
padding:1rem;
border-raduis:10px;
`
export const PostRightSideUserHeader = styled.div`
display:flex;gap:2rem;
align-items:center;
`
export const PostRow = styled.div`
display:flex;
flex-direction:column;
gap:1rem;
`
export const PostUserAvatar = styled.img`
width:4rem;
height:4rem;
border-radius:50%;

`
export const PostCenterImage = styled.img`
width:100%;
max-height:50rem;
object-fit:cover;
border-radius:4px;
`
export const Column = styled.div`
display:flex;
flex-direction:column;
`
export const Row = styled.div`
width:100%;
align-items:center;
display:flex;
flex-directoin:column;
gap:1rem;
align-items:right;
`
export const Title = styled.h3`
font-weight:bold;
text-align:left;
font-size:1.8rem;
color:${textColor}
`
export const Text = styled.p`
font-size:1.6rem;
text-align:left;
color:${textColor}
`
export const PostLeftSideContainer = styled.div`
  position:fixed;
  height:100vh;
  max-height:100vh;
  flex:0.15;
  display:flex;
  padding:5rem 4rem;
  gap:4rem;
  flex-direction:column;
  align-items:center;
`

export const LeftPostAction = styled.div`
cursor:pointer;
display:flex;
flex-direction:column;
align-items:center; 
gap:1rem;
transition:all 0.2s linear;
&:hover{
  svg{
color:${primaryColor} !important;
  }
  h3{
color:${primaryColor};
  }

}

`
