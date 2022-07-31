

import {CommentListContainer} from './styles'
import CommentItem from './CommentItem';

const CommentList:React.FC = ()=>{
  return <CommentListContainer>
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </CommentListContainer>

}
export default CommentList;
