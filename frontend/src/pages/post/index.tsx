
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
  {post && <PostLeftSide liked={post?.liked} likes={post?.likes} comments={post?.comments} saved={0}/>      }
      {isLoading && <SpinnerContainer> <BeatLoader  color={primaryColor}/> </SpinnerContainer>}
  {!isLoading && post &&
      <PostCenter
        body={post.body}
        image={post.image}
        avatar={post.user_avatar}
        author_avatar={post.avatar_image}
        created={post.created}
        author_username={post.author}
      />
  }
  { post && <PostRightSide author_posts={2} author_location="algeria" author_email="chihab@email.com" author_username={post?.author} author_avatar={post?.avatar_image} />}
    </PostPageContainer>

}
export default Post;
