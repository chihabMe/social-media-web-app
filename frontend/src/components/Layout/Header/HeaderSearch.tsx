import React, { FormEvent, useState } from 'react'
import { primaryColor } from '../../../styles/colors'
import SearchIcon from '../../../styles/icons/SearchIcon'
import { SearchButton, SearchContainer, SearchForm, SearchInput } from './styles'

const HeaderSearch = () => {
const [isSearching,setIsSearching] = useState(false)
const [search,setSearch]= useState("")
  const searchChangeHandler = (e:any)=>{setSearch(e.target.value)}
  const searchSubmitHandler = (e:FormEvent)=>{
    e.preventDefault()
    console.log(search)
    setSearch("")

  }
  return (
            <SearchContainer>
          <SearchForm onSubmit={searchSubmitHandler}>
          <SearchInput onBlur={()=>{setIsSearching(false)}} onFocus={()=>{setIsSearching(true)}} placeholder='search ...' value={search} onChange={searchChangeHandler}  />
          <SearchButton type='submit'>
                <SearchIcon color={isSearching ? primaryColor : "gray"} />
          </SearchButton>
          </SearchForm>
        </SearchContainer>
  )
}

export default HeaderSearch