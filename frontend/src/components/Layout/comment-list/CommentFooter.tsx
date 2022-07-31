import {CommentAction,CommentActionStat,CommentFooterWrapper} from './styles'
import { textColor,primaryColor } from '../../../styles/colors'
import { AiFillHeart } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import {useState } from 'react'
const CommentFooter : React.FC = ()=>{
  const [liked,setLiked]= useState(false)
    const likeHandler = ()=>{
    setLiked(prev=>!prev)
    }
    
return <CommentFooterWrapper>
          
            <CommentAction >
            <CommentActionStat>replay</CommentActionStat>
            </CommentAction>
            <CommentAction onClick={likeHandler}>
            {liked ? 
            <AiFillHeart style={{width:"2.5rem",height:"2.5rem"}} color={primaryColor}/>
              :
            <AiOutlineHeart style={{width:"2.5rem",height:"2.5rem"}} color={primaryColor}/>
            }
            <CommentActionStat>32</CommentActionStat>
            </CommentAction>

      </CommentFooterWrapper>

}
export default CommentFooter
