import {Title,LeftPostAction,PostLeftSideContainer,Column, StickyWrapper} from './styles' 
import {AiOutlineHeart,AiOutlineBook,AiOutlineComment} from 'react-icons/ai';
import {primaryColor} from '../../styles/colors';
import {AiFillHeart} from 'react-icons/ai';
import { baseApiUrl } from '../../utils/globals';
import { useParams } from 'react-router-dom';
import {useEffect,useState} from 'react';
import useFetch from '../../hooks/use-fetch';
const PostLeftSide:React.FC<{likes:number,liked:boolean,comments:number,saved:number}> = ({liked,likes,saved,comments})=>{
  console.log("--------------------")
    console.log(liked)
    console.log(likes)
  console.log("--------------------")
  const [liked_,setLiked]= useState(liked)
  const [likes_,setLikes]=useState(likes)
  const {slug }= useParams()
    const {data,isLoading,request}= useFetch()
  const likeHandler = ()=>{

    let endpoint = baseApiUrl+"/posts/"+slug+"/like/";

    request(endpoint,"post")
  }
  useEffect(()=>{
      if(!data)return
      if(data.action=='liked'){
      setLiked(true)
      }else{
      setLiked(false)
      }
      setLikes(data.count)

      },[data])
  return <PostLeftSideContainer>
    <StickyWrapper>

    <LeftPostAction className={likes_ ? "active":""}  onClick={likeHandler}>
        <div>

        {!liked_ &&
        <AiOutlineHeart />
        }
        {liked_ &&
        <AiFillHeart />
        }

        </div>
        <Title>{likes_}</Title>
    </LeftPostAction>

    <LeftPostAction>
        <div><AiOutlineComment style={{width:"3.5rem",height:"3.5rem"}} color='white'/></div>
        <Title>{comments}</Title>
    </LeftPostAction>

    <LeftPostAction>
        <div><AiOutlineBook style={{width:"3.5rem",height:"3.5rem"}} color='white'/></div>
        <Title>{saved}</Title>
    </LeftPostAction>

    </StickyWrapper>
    </PostLeftSideContainer>
}
export default PostLeftSide;
