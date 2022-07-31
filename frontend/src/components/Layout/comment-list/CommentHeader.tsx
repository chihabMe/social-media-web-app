
import { UserAvatar } from "../../../pages/home/home-center/posts-list/post-item/styles"
import { Title,Row } from "../../../pages/post/styles"
const CommentHeader :React.FC = ()=>{
  return <Row>
          <UserAvatar src='http://127.0.0.1:8000/media/admin/profile/index.jpg'/>
          <Title>chihab</Title>
            
        </Row>

}
export default CommentHeader;
