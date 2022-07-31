
import {PostRightSideContainer,PostRow,Title,Text,PostUserAvatar,PostRightSideUserHeader,PostRightSideUser,Row} from './styles'
import {Button} from '../../styles/Button'
const PostRightSide:React.FC<{author_avatar:string,
  author_username:string,
  author_email?:string,
  author_posts:number,
  author_location?:string}> = ({
      author_posts,
      author_avatar,
      author_username,
      author_email,
      author_location
      })=>{
  return <PostRightSideContainer>
            <PostRightSideUser>
            <PostRightSideUserHeader>
             <PostUserAvatar style={{width:"7rem",height:"7rem"}} src={author_avatar}/>
             <Title>{author_username}</Title>
            </PostRightSideUserHeader>
            </PostRightSideUser>
              <PostRow>
                  <Title>email</Title>
                  <Text>{author_email}</Text>
              </PostRow>
              <PostRow>
                  <Title>number of posts</Title>
                  <Text>{author_posts}</Text>
              </PostRow>

              <PostRow>
                  <Title>Location</Title>
                  <Text>{author_location}</Text>
              </PostRow>
              <Button color='white' valid style={{width:'90%'}} size='1.6rem' px="1rem" background='primary'>followe</Button>
        </PostRightSideContainer>
}
export default PostRightSide;
