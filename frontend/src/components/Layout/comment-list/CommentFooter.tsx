import {
  CommentAction,
  CommentActionStat,
  CommentFooterWrapper,
} from "./styles";
import { textColor, primaryColor } from "../../../styles/colors";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/use-fetch";
import { useParams } from "react-router-dom";
import { baseApiUrl } from "../../../utils/globals";
const CommentFooter: React.FC<{
  likes: number;
  replies: number;
  id: number;
  liked: boolean;
  showReplayToggle: () => void;
}> = ({ id, liked, likes, showReplayToggle, replies }) => {
  const [liked_, setLiked] = useState(liked);
  const [likes_, setLikes] = useState(likes);

  const { data, request } = useFetch();

  let slug = useParams().slug;
  const likeHandler = () => {
    let endpoint = baseApiUrl + "/" + "posts/" + slug + "/comments/" + id + "/";
    request(endpoint, "post", "application/json");
    setLiked((prev) => !prev);
  };
  useEffect(() => {
    if (data) {
      setLikes(data.likes_count);
      setLiked(data.liked);
    }
  }, [data]);

  return (
    <CommentFooterWrapper>
      <CommentAction>
        <CommentActionStat onClick={showReplayToggle}>
          replies {replies}
        </CommentActionStat>
      </CommentAction>
      <CommentAction onClick={likeHandler}>
        {liked_ ? <AiFillHeart /> : <AiOutlineHeart color={primaryColor} />}
        <CommentActionStat>{likes_}</CommentActionStat>
      </CommentAction>
    </CommentFooterWrapper>
  );
};
export default CommentFooter;
