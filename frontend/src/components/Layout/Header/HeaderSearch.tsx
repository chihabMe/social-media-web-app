import React, { FormEvent, useEffect, useState } from "react";
import useFetch from "../../../hooks/use-fetch";
import User from "../../../models/User";
import { primaryColor } from "../../../styles/colors";
import SearchIcon from "../../../styles/icons/SearchIcon";
import { baseApiUrl } from "../../../utils/globals";
import SearchResults from "./SearchResults";
import {
  SearchButton,
  SearchContainer,
  SearchForm,
  SearchInput,
  HeaderNavLink,
} from "./styles";

const HeaderSearch = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState("");
  const {isLoading,data,request}=useFetch()
  const [searchResults,setSearchResults] = useState<User[]>([])
  const searchEndpoint = baseApiUrl+"/users/user/search/"

  const searchChangeHandler = (e: any) => {
    setSearch(e.target.value);
  };
  const searchSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };
  useEffect(()=>{
    let timeout = setTimeout(()=>{
      request(searchEndpoint,'post','application/json',JSON.stringify({q:search}))
    },200)
    return ()=>{clearTimeout(timeout)}
  },[search])
  useEffect(()=>{
    if(data)
    setSearchResults(data.results)
  },[data])
  return (
    <SearchContainer className={isSearching ? "active" : ""}>
      <HeaderNavLink to='/search'>
          <SearchIcon color={isSearching ? primaryColor : "gray"} />
      </HeaderNavLink>
      <SearchForm onSubmit={searchSubmitHandler}>
        <SearchInput
          onFocus={() => {
            setIsSearching(true);
            setSearchResults([])
            setSearch('')
          }}
          placeholder="search ..."
          value={search}
          onChange={searchChangeHandler}
        />
        <SearchButton type="submit">
          <SearchIcon color={isSearching ? primaryColor : "gray"} />
        </SearchButton>
      </SearchForm>

     {isSearching && searchResults && <SearchResults results={searchResults}/>}
    </SearchContainer>
  );
};

export default HeaderSearch;
