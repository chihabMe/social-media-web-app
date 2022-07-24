import {Button} from  '../../styles/Button';
import {Form,FormController,Label} from '../../styles/Form';
import { Input } from '../../styles/Input';
import {SignupPage,SignUpFormWrapper, GoToLogIn} from './styles';
const Signup :React.FC = ()=>{
  return <SignupPage>

            <SignUpFormWrapper>
              <Form>
                <FormSection text="username" type="text" />
                <FormSection text="email" type="email" />
                <FormSection text="password" type="password" />
                <FormSection text="password confirmation" type="password" />
                <Button px="1rem" size='1.5rem' color='white' background='primary'>login</Button>
              </Form>
              <GoToLogIn to='/login'>do you have an account ? </GoToLogIn>
            </SignUpFormWrapper>

        </SignupPage> 

}
const FormSection:React.FC<{text:string,type:string}> = (props)=>{
  return <FormController>

        <Label>{props.text}</Label>
        <Input type={props.type} />

      </FormController>
        

}
export default Signup;
