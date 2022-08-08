import React from "react";
import User from "../../../models/User";
import FollowButton from "../FollowButton";
import { NoResults, SearchResultAvatar, SearchResultContainer, SearchResultItem, SearchResultUserFollowButton, SearchResultUserUsername } from "./styles";

const SearchResults:React.FC<{results:User[]}> = ({results}) => {
  return (
    <SearchResultContainer>
        {results.length==0 && <NoResults>no results</NoResults>}
        {results.map(user=>{
        return <SearchResultItemComp followed={user.followed} username={user.username} link='' avatar={user.avatar}/>
        })}
    </SearchResultContainer>
  );
};
const SearchResultItemComp: React.FC<{
  username: string;
  link: string;
  avatar: string;
  followed:boolean
}> = ({link,followed,username,avatar}) => {
  return <SearchResultItem>

        <SearchResultAvatar src={avatar}/>
        <SearchResultUserUsername>{username}</SearchResultUserUsername>
        <FollowButton followed={followed} user={username} />
        </SearchResultItem>;
};
export default SearchResults;
