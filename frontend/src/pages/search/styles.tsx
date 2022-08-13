import styled from 'styled-components'
import { md } from '../../styles/sizes'


export  const  SearchContainer = styled.div`
    padding-top: 5rem;
    flex:0.6;
    @media screen and (max-width: ${md}){
        flex:1

        
    }
`
export  const   SearchWrapper = styled.div`
width:100%;
max-width:40rem;
margin:0 auto;
display: flex;
flex-direction:column;
gap:3rem;
    
`
export const SearchForm = styled.form`
width:100%;
`
export const SearchInput = styled.input`
width:100%;
height:4.3rem;
border-radius:5px ;
outline:none;
border:none;
color:${props=>props.theme.text};
font-size:1.6rem;
padding-left: 10px;
background-color: ${props=>props.theme.bg};
    
`

export const SearchSubjects = styled.ul`
    display: flex;
    gap:1rem;
    justify-content: flex-start;
    list-style:none;
`
export const SearchSubject = styled.li`
font-size:2rem;
cursor: pointer;
text-transform: capitalize;
color:${props=>props.theme.text};
&.active{
color:${props=>props.theme.primary};
}
`
