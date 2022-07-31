
import {CommentAddContainer,CommentAddText}  from './styles'
import {Form,FormController} from '../../../styles/Form'
import {primaryColor,backgroundColor} from '../../../styles/colors'
import {Button} from '../../../styles/Button'

const CommentAdd :React.FC = ()=>{

  return <CommentAddContainer>
            <Form>
            <FormController>
                <CommentAddText/>
            </FormController>
            <Button valid px="1rem" size="1.3rem" color={backgroundColor} background="primary" >comment</Button>
            </Form>
          </CommentAddContainer> 
}
export default CommentAdd;
