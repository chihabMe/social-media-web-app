import {Button} from  '../../styles/Button';
import {Form,FormController,Label} from '../../styles/Form';
import { Input } from '../../styles/Input';
import {LoginPage,LoginFormWrapper, GoToSignUp} from './styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { FormEvent, useContext,useEffect,useState } from 'react';
const Login :React.FC = ()=>{
  const [username,setUseName]= useState("")
  const [password,setPassword]= useState("")
  const {isLoading,error,isLogged,login}= useContext(AuthContext)

  const naviate = useNavigate()
  useEffect(()=>{
    console.log("logind in ",isLoading)
    if(isLogged){
      naviate('/')
    }
  },[isLogged])
  const usernameChangeHandler = (e:any)=>{
    setUseName(e.target.value)
  }
  const passwordChangeHandler = (e:any)=>{
    setPassword(e.target.value)
  }
  const submitHandler = (e:FormEvent)=>{
    e.preventDefault()
    if(username.trim().length<=2)return 
    if(password.trim().length<=2)return
    login(username,password)
  }
  return <LoginPage>

            <LoginFormWrapper>
              <Form onSubmit={submitHandler}>
                <FormSection handler={usernameChangeHandler} text="username" type="text" />
                <FormSection handler={passwordChangeHandler} text="password" type="password" />
                <Button px="1rem" size='1.5rem' color='white' background='primary'>
                  {isLoading && 'trying to login'}
                  {!isLoading && 'login'}
                </Button>
                {error && <h1>please try again</h1>}
              </Form>
              <GoToSignUp to='/signup'>create an account ? </GoToSignUp>
            </LoginFormWrapper>

        </LoginPage> 

}
const FormSection:React.FC<{text:string,type:string,handler:(e:any)=>void}> = (props)=>{
  return <FormController>

        <Label>{props.text}</Label>
        <Input onChange={props.handler} type={props.type} />

      </FormController>
        

}
export default Login;
