import styled from 'styled-components'

export const ProfileHeaderContainer = styled.section`
width:100%;
display: flex;
max-width: 70rem;
align-items: center;
gap:1rem;
`
export const ProfileHeaderLeft   = styled.div`
flex:0.2;
    
`
export const ProfileUserAvatar  = styled.img`
    width:10rem;
    height:10rem;
    border-radius: 50%;
`
export const ProfileHeaderRight = styled.div`
flex:0.7;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const ProfileHeaderRightTop = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ProfileUserUsername = styled.h2`

    color:${props=>props.theme.title};
    font-weight: bold;
    font-size:1.5rem;
    text-align: left;
`
export const ProfileHeaderRightButtons = styled.div`
    display:flex;
    gap:2rem;
`
export const ProfileHeaderRightBottom = styled.div`
display: flex;
flex-direction: column;
`
export const ProfileHeaderBottomDesc = styled.p`
    font-size:1.3rem;
    font-weight: 500;
    max-width: 30rem;
    text-align: left;
    color:${props=>props.theme.text};
`