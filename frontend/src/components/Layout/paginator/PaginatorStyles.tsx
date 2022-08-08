import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const PaginatorContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding:1rem 1rem;
width:100%;
`
export  const NextPageButton  = styled(Link)`
    text-decoration:none;
    padding:1rem;
    background-color: ${props=>props.theme.primary};
    border-radius: 5px;
    cursor: pointer;
    color: white;
`