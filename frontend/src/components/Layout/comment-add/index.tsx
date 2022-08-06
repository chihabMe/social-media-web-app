
import {CommentAddContainer,CommentAddText}  from './styles';
import {Form,FormController} from '../../../styles/Form';
import {primaryColor,backgroundColor} from '../../../styles/colors';
import {BeatLoader} from 'react-spinners';
import {Button} from '../../../styles/Button';
import {useState,useEffect} from 'react';
import {baseApiUrl} from '../../../utils/globals';
import useFetch from '../../../hooks/use-fetch';
import commentType from '../../../models/comment';

import {useParams} from 'react-router-dom';


const CommentAdd :React.FC<{addComment:(comment:commentType)=>void}> = ({addComment})=>{
    const [comment,setComment] = useState('');
    const {slug}= useParams();
    const {data,isLoading,errors,request}=useFetch()
    const commentChangeHanlder = (e:any)=>{
      setComment(e.target.value)
    }
  const formSubmitHandler = (e:any)=>{
    e.preventDefault()
    let endpoint = baseApiUrl+"/posts/"+slug+"/comments/"
    let commentAsStr  = JSON.stringify({body:comment})
    request(endpoint,"post", "application/json" ,commentAsStr)
    setComment("")
  }
  useEffect(()=>{
      if(data){
      addComment(data)
      }
      },[data])


  return <CommentAddContainer>
            <Form onSubmit={formSubmitHandler}>
            <FormController>
                <CommentAddText onChange={commentChangeHanlder} value={comment} />
            </FormController>
            <Button radius='5px' valid px="1rem" size="1.3rem" >
            {!isLoading && 'comment'}
            {isLoading && <BeatLoader size={8} color="white"/>}
            </Button>
            </Form>
          </CommentAddContainer> 
}
export default CommentAdd;
