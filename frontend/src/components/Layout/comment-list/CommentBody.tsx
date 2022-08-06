import {CommentBodyText} from './styles'
const CommentBody:React.FC<{body:string}> = ({body})=>{

return <CommentBodyText>
            {body}
      </CommentBodyText>

}
export default CommentBody
