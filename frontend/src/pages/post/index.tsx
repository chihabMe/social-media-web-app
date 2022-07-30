
import PostItem from '../home/home-center/posts-list/post-item'
import {PostPageContainer} from './styles'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useFetch from '../../hooks/use-fetch' 
import { baseApiUrl } from '../../utils/globals'
import  PostLeftSide  from './PostLeftSide'
import  PostRightSide  from './PostRightSide'
import  PostCenter  from './PostCenter'
import {BeatLoader } from 'react-spinners'
import {primaryColor} from '../../styles/colors'
import {SpinnerContainer} from './styles'

const Post:React.FC = ()=>{
    let {slug} = useParams()
    const {request,data:post,isLoading,errors} = useFetch()
    let endpoint = baseApiUrl+"/posts/"+slug+"/";
    useEffect(()=>{
        request(endpoint,"get")
        },[])
  return <PostPageContainer>
    <PostLeftSide likes={post?.likes} comments={post?.comments} saved={0}/>      
      {isLoading && <SpinnerContainer> <BeatLoader  color={primaryColor}/> </SpinnerContainer>}
  {!isLoading && post &&
      <PostCenter
        body={post.body}
        image={post.image}
        avatar={post.user_avatar}
        created={post.created}
        author_username={post.author}
      />
  }
    <PostRightSide/>
        </PostPageContainer>

}
export default Post;
