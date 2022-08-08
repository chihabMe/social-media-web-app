import React from 'react'
import { useLocation } from 'react-router-dom'
import { NextPageButton, PaginatorContainer } from './PaginatorStyles'

const Paginator:React.FC<{nextPage:"string"}> = ({nextPage}) => {
    let page = nextPage.split("?")
    let location =  useLocation()
    let next = "?"+page[page.length-1]
    console.log(next)
  return (
    <PaginatorContainer>
        <NextPageButton to={next}>
            next
        </NextPageButton >

    </PaginatorContainer>
  )
}

export default Paginator