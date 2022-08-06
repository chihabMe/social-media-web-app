import { CommentItemContainer, CommentReplayAdd, CommentReplayInput } from "./styles";
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentFooter from "./CommentFooter";
import { Button } from "../../../styles/Button";
import { useState } from "react";
import { Line } from "../../../pages/post/styles";
const CommentItem: React.FC<{
  body: string;
  liked: boolean;
  created: string;
  username: string;
  avatar: string;
  likes: number;
  id:number;
  replies: number;
}> = ({ likes,id, liked, replies, created, body, username, avatar }) => {
  const [showReplay,setShowReplay] = useState(false)
  const showReplayToggle = ()=>{
    setShowReplay(prev=>!prev)
  }
  return (
    <CommentItemContainer>
      <CommentHeader username={username} avatar={avatar} />
      <CommentBody body={body} />
      <CommentFooter showReplayToggle={showReplayToggle} id={id} liked={liked} likes={likes} replies={replies} />
        <CommentReplayAdd className={showReplay ? "active":""}>
          <CommentReplayInput/>
          <Button valid>replay</Button>
        </CommentReplayAdd>
        <Line/>
    </CommentItemContainer>
  );
};
export default CommentItem;
