
import { UserAvatar } from "../../../pages/home/home-center/posts-list/post-item/styles"
import { Title,Row } from "../../../pages/post/styles"
const CommentHeader :React.FC<{avatar:string,username:string}> = ({avatar,username})=>{
  return <Row>
          <UserAvatar src={avatar}/>
          <Title>{username}</Title>
            
        </Row>

}
export default CommentHeader;
