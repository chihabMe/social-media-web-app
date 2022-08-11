import styled from 'styled-components'
import { mediaMd, mediaSm } from '../../../../styles/sizes'

export const ProfileHeaderContainer = styled.section`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
gap:1rem;
@media ${mediaSm}{
    flex-direction: column;
    gap:3rem;
}
`
export const ProfileHeaderTop   = styled.div`
width:100%;
    
`
export const ProfileUserAvatar  = styled.img`
    width:10rem;
    height:10rem;
    border-radius: 50%;
`
export const ProfileHeaderContent = styled.div`
flex:0.7;
display: flex;
gap:3rem;
flex-direction: column;
justify-content: space-between;
@media ${mediaSm}{
    gap:1rem;
}
`
export const ProfileHeaderRightTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap:2rem;
    flex-direction:column-reverse ;
`
export const ProfileUserUsername = styled.h1`

    color:${props=>props.theme.title};
    font-weight: bold;
    font-size:2.2rem;
    text-transform: capitalize;
    text-align: left;
    @media ${mediaSm}{
        font-size: 2.2rem;
        text-transform: capitalize;
    }
`
export const ProfileHeaderRightButtons = styled.div`
    display:flex;
    gap:2rem;
    button{
        padding: 1rem 2rem;
        font-weight:bold;
        font-size:1.3rem;

        @media ${mediaSm}{
            width:13rem;
            padding: 1.2rem 2rem;
        }
    }
        @media ${mediaSm}{
            display: flex;
            align-items: center;
            flex-direction: column;
        }
`
export const ProfileHeaderRightBottom = styled.div`
display: flex;
flex-direction: column;
`
export const ProfileHeaderBottomDesc = styled.p`
    font-size:1.3rem;
    max-width: 60rem;
    font-weight: bold;
    text-align: center;
    color:${props=>props.theme.text};
    @media ${mediaSm}{
        text-align:center;
    }
`