import styled from 'styled-components'
import { mediaMd, mediaSm } from '../../styles/sizes'



export const PostPageContainer = styled.div`
z-index: 1;
width:100%;
padding:5rem 5rem;
justify-content:space-between;
display:flex;
gap:3rem;
position: relative;
min-height: 100vh;
`
export const SpinnerContainer = styled.div`
display:flex;
align-items:center;
padding-top:10rem;

`
export const Line = styled.hr`
  border-top:1px solid ${props=>props.theme.bg};
  opacity: 0.3;
`
export const PostCenterContainer = styled.div`
padding-top:5rem;
flex:0.65;
display:flex;
flex-direction:column;
gap:3rem;

  @media ${mediaMd}{
    flex:0.7;
  }
  @media ${mediaSm}{
    flex:1;
  }
`
export const PostUserAvatar = styled.img`
width:4rem;
height:4rem;
border-radius:25%;

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
gap:1rem;
align-items:right;
`
export const Title = styled.h3`
font-weight:bold;
text-align:left;


font-size:1.5rem;
color:${props=>props.theme.text};
`
export const Text = styled.p`
font-size:1.6rem;
text-align:left;
color:${props=>props.theme.text};
`
export const PostLeftSideContainer = styled.div`
  flex:0.05;
  display:flex;
  padding:5rem 4rem;
  gap:4rem;
  flex-direction:column;
  align-items:center;

  @media ${mediaMd}{
    flex: 0.025;
  }
  @media ${mediaSm}{
    display: none;
    position: sticky;
    bottom:0;
    left:0;
    right:0;
  }
`

export const LeftPostAction = styled.div`
cursor:pointer;
display:flex;
flex-direction:column;
align-items:center; 
gap:1rem;
transition:all 0.2s linear;
  &.active{
    svg{

    color:${props=>props.theme.primary} !important;
    }

  }
svg{
  width:3rem !important;
  height:3rem !important;
  color:${props=>props.theme.text} !important;
}
&:hover{
  svg{
color:${props=>props.theme.primary} !important;
  }
  h3{
color:${props=>props.theme.primary} !important;
  }

}

`

export const PostRightSideContainer = styled.div`
flex:0.25;
display:flex;
flex-direction:column;
align-items:center;
gap:2rem;
position: relative;
  @media ${mediaMd}{
    display: none;
    background-color: yellow;
    position: sticky;
    bottom:0;
    left:0;
    right:0;
  }
`
export const StickyWrapper = styled.div`
align-items: center;
padding:1rem;
background-color: ${props=>props.theme.bgSoft};
width:100%;
display: flex;
flex-direction: column;
gap:1rem;
position: sticky;
top:9rem;

  
`
export const PostRightSideUser = styled.div`
max-width:20rem;
padding:1rem;
display: flex;
flex-direction: column;
gap:1rem;
button{
  padding: 1rem 2.5rem;
  border-radius: 5px;
  color:white;
  font-size:1.1rem;
  font-weight: bold;
  background-color: ${props=>props.theme.primary};
  &.active{
    background-color:${props=>props.theme.red};
  }
}
`
export const PostRightSideUserHeader = styled.div`
display:flex;
gap:2rem;
flex-direction:column;
align-items:center;
`
export const PostRow = styled.div`
text-align:left;
width:100%;
display:flex;
flex-direction:column;
gap:1.2rem;
`
