
import PostItem from '../home/home-center/posts-list/post-item'
import {PostPageContainer} from './styles'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useFetch from '../../hooks/use-fetch' 
import { baseApiUrl } from '../../utils/globals'

const Post:React.FC = ()=>{
    let {slug} = useParams()
    const {request,data:post,isLoading,errors} = useFetch()
    let endpoint = baseApiUrl+"/posts/"+slug+"/";
    useEffect(()=>{
        console.log("fetcging post data")
        request(endpoint,"get")
        },[])
  return <PostPageContainer>
          
      {isLoading && <h1>loading</h1>}
  {!isLoading && post &&
      <PostItem
        key={"post"+post.id}
        slug={post.slug}
        avatar={post.avatar_image}
        image={post.image}
        userUsername={post.author}
        comments={post.comments}
        tags={post.tags}
        likes={post.likes}
        body={post.body}
      />
  }
        </PostPageContainer>

}
export default Post;
