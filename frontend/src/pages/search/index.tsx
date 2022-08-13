import React, { FormEvent, useEffect, useRef, useState } from "react";
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchSubject,
  SearchSubjects,
  SearchWrapper,
} from "./styles";
import {
  useParams,
  useLocation,
  useNavigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import { baseApiUrl } from "../../utils/globals";
import SearchUsersResults from "./components/SearchUsersResults";
import SearchPostsResults from "./components/SearchPostsResults";
import { SearchResults } from "../profile/styles";

const Search = () => {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("users");
  const { data, request, isLoading, errors } = useFetch();
  const formRef = useRef<any>()

  const searchChangeHandler = (e: any) => {
    setSearch(e.target.value);
  };
  const setSubjectToPosts = () => {
    setSubject("posts");
  };
  const setSubjectToUsers = () => {
    setSubject("users");
  };
  const searchFun = ()=>{
    let endpoint = `${baseApiUrl}/${subject}/search?q=${search}`;
    if(search.trim().length>1)
    request(endpoint, "get");
  }
  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    searchFun()
  };
  useEffect(()=>{
    searchFun()

  },[subject])

  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchForm ref={formRef}  onSubmit={submitSearch}>
          <SearchInput
            onChange={searchChangeHandler}
            placeholder="search ..."
          />
        </SearchForm>
        <SearchSubjects>
          <SearchSubject
            className={subject == "posts" ? "active" : ""}
            onClick={setSubjectToPosts}
          >
            posts
          </SearchSubject>
          <SearchSubject
            className={subject == "users" ? "active" : ""}
            onClick={setSubjectToUsers}
          >
            users
          </SearchSubject>
        </SearchSubjects>
      <SearchResults>
        {subject == "posts" && data && !isLoading && (
          <SearchPostsResults postList={data.results} />
        )}
        {subject == "users" && data && !isLoading  && (
          <SearchUsersResults userList={data.results} />
        )}
      </SearchResults>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
