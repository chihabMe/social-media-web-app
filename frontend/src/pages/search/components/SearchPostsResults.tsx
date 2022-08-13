import React from 'react'
import { post } from '../../../models/post';
import PostItem from '../../home/home-center/posts-list/post-item';
interface Props {
    postList:post[];
}
const SearchpostsResults:React.FC<Props> = ({postList}) => {
  return (
    <>
      { postList[0]?.body && postList.map(postItem=><PostItem key={postItem.id}  {...postItem} />)}
    </>
  )
}

export default SearchpostsResults