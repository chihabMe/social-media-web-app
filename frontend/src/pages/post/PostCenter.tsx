
import {PostCenterConitaner,Column,PostUserAvatar,Text,Title,Row,PostCenterImage} from './styles'
import CommentList from '../../components/Layout/comment-list'
import CommentAdd from '../../components/Layout/comment-add'
import { primaryColor } from '../../styles/colors'

const PostCenter:React.FC<{body:string,author_avatar:string,author_username:string,image:string,avatar:string,created:string}> = ({body,author_avatar,author_username,image,avatar,created})=>{
    let post ={
      image:image,
      author_avatar:author_avatar,
      author_username:author_username,
      craeted:created,
      body:body,
    }
  return <PostCenterConitaner>
        {post.image &&<PostCenterImage src={post.image}/> }
          <Row>
            <Column>
          <PostUserAvatar src={post.author_avatar}/>
            </Column>

            <Column>
            <Title>{post.author_username}</Title>
            <Text>created at {post.craeted}</Text>
            </Column>
          </Row>
          <Row>
            <Text>
            {post.body}

            </Text>
          </Row>
          <Title style={{color:primaryColor}}>tell us what you think</Title>
          <CommentAdd/>
          <Title style={{color:primaryColor}}>Comments</Title>
          <CommentList/>
        </PostCenterConitaner>
}
export default PostCenter;
