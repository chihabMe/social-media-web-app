import {CommentItemContainer} from './styles'
import CommentHeader from './CommentHeader'
import CommentBody from './CommentBody'
import CommentFooter from './CommentFooter'
const CommentItem = ()=>{
  return <CommentItemContainer>
        <CommentHeader/>
        <CommentBody/>
        <CommentFooter/>
        </CommentItemContainer>

}
export default CommentItem
