
import {PostCenterContainer,Column,PostUserAvatar,Text,Title,Row,PostCenterImage} from './styles'
import CommentList from '../../components/Layout/comment-list'
import CommentAdd from '../../components/Layout/comment-add'
import { primaryColor } from '../../styles/colors'
import useFetch from '../../hooks/use-fetch';
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {baseApiUrl} from '../../utils/globals'
import commentType from '../../models/comment'

const PostCenter:React.FC<{body:string,author_avatar:string,author_username:string,image:string,avatar:string,created:string}> = ({body,author_avatar,author_username,image,avatar,created})=>{
    let date  = new Date(created);

    let post ={
      image:image,
      author_avatar:author_avatar,
      author_username:author_username,
      created:`${date.getUTCDay()}/${date.getMonth()}/${date.getFullYear()}`,
      body:body,
    }


    const [comments,setComments]= useState<commentType[]>([])
    const {data,isLoading,request}= useFetch()
      const {slug}= useParams()
      let endpoint = baseApiUrl +"/posts/"+slug+"/comments/";

    useEffect(()=>{
        request(endpoint,'get')
        },[])
    useEffect(()=>{
        if(data){
        setComments(data)
        }},[data])

    const addComment = (comment:commentType)=>{
      setComments(prev=>[comment,...prev])

    }

  return <PostCenterContainer>
        {post.image &&<PostCenterImage src={post.image}/> }
          <Row>
            <Column>
          <PostUserAvatar src={post.author_avatar}/>
            </Column>

            <Column>
            <Title>{post.author_username}</Title>
            <Text style={{fontSize:'1.2rem'}}>  {post.created}</Text>
            </Column>
          </Row>
          <Row>
            <Text>
            {post.body}
            </Text>
          </Row>
          <CommentAdd addComment={addComment}/>
          <CommentList comments={comments}/>
        </PostCenterContainer>
}
export default PostCenter;
