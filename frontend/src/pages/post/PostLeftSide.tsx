import {Title,LeftPostAction,PostLeftSideContainer,Column} from './styles' 
import {AiOutlineHeart,AiOutlineBook,AiOutlineComment} from 'react-icons/ai';
const PostLeftSide:React.FC<{likes:number,comments:number,saved:number}> = ({likes,saved,comments})=>{
  return <PostLeftSideContainer>
    <LeftPostAction>
        <div><AiOutlineHeart style={{width:"3.5rem",height:"3.5rem"}} color='white'/></div>
        <Title>{likes}</Title>
    </LeftPostAction>

    <LeftPostAction>
        <div><AiOutlineComment style={{width:"3.5rem",height:"3.5rem"}} color='white'/></div>
        <Title>{comments}</Title>
    </LeftPostAction>

    <LeftPostAction>
        <div><AiOutlineBook style={{width:"3.5rem",height:"3.5rem"}} color='white'/></div>
        <Title>{saved}</Title>
    </LeftPostAction>

    </PostLeftSideContainer>
}
export default PostLeftSide;
