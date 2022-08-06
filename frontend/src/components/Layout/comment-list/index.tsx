

import {CommentListContainer} from './styles'
import CommentItem from './CommentItem';
import {useEffect} from 'react';
import useFetch from '../../../hooks/use-fetch';
import {useParams} from 'react-router-dom';
import {baseApiUrl} from '../../../utils/globals';
import commentType from '../../../models/comment';

const CommentList:React.FC<{comments:commentType[]}> = ({comments})=>{
  return <CommentListContainer>
        {comments?.map(comment=><CommentItem id={comment.id} key={comment.id} created={comment.created} body={comment.body} likes={comment.likes} username={comment.username} avatar={comment.avatar} liked={comment.liked} replies={comment.replies} />)}
        </CommentListContainer>

}
export default CommentList;
