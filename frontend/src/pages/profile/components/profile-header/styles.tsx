import styled from 'styled-components'
import { mediaMd, mediaSm } from '../../../../styles/sizes'

export const ProfileHeaderContainer = styled.section`
width:100%;
display: flex;
max-width: 70rem;
align-items: center;
gap:1rem;
@media ${mediaSm}{
    flex-direction: column;
    gap:3rem;
}
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
@media ${mediaSm}{
    gap:1rem;
}
`
export const ProfileHeaderRightTop = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${mediaSm}{
        align-items:center;
        gap:2rem;
        flex-direction:column-reverse ;
    }
`
export const ProfileUserUsername = styled.h2`

    color:${props=>props.theme.title};
    font-weight: bold;
    font-size:1.7rem;
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
    max-width: 30rem;
    font-weight: bold;
    text-align: left;
    color:${props=>props.theme.text};
    @media ${mediaSm}{
        text-align:center;
    }
`