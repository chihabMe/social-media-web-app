import {Button} from  '../../styles/Button';
import {BeatLoader} from 'react-spinners/';
import {Form,FormController,Label} from '../../styles/Form';
import {LoginTitle,LoginPage,LoginFormWrapper, GoToSignUp} from './styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { FormEvent, useContext,useEffect,useState } from 'react';
import Spinner from '../../components/UI/Spinner';
import Input from '../../components/UI/Input';
import { globalValidator } from '../../utils/validators'
const Login :React.FC = ()=>{
  const [username,setUserName]= useState("")
  const [password,setPassword]= useState("")
  const [validUsername,setValidUsername]= useState(false)
  const [validPassword,setValidPassword]= useState(false)
  const [valid,setValid]= useState(false)
  const {isLoading,error,isLogged,login}= useContext(AuthContext)

  const naviate = useNavigate()
  useEffect(()=>{
    console.log("logind in ",isLoading)
    if(isLogged){
      naviate('/')
    }
  },[isLogged])

  useEffect(()=>{
    let check = validUsername&&validPassword
    setValid(check)
  },[validUsername,validPassword])
  const submitHandler = (e:FormEvent)=>{
    e.preventDefault()
    if(!valid)return
    login(username,password)
    console.log(username,password)
  }
  return <LoginPage>

            <LoginFormWrapper>
              <LoginTitle>
                Sign in
              </LoginTitle>
              <Form onSubmit={submitHandler}>
        <FormController>
            <Input valid={validUsername}  setValid={setValidUsername} value={username} setValue={setUserName} validator={globalValidator} errorMessage={"your username isn't long enough "}   placeholder={"enter your username"} type={"text"} />
          </FormController>
      <FormController>
            <Input valid={validPassword} setValid={setValidPassword} value={password} setValue={setPassword} validator={globalValidator} errorMessage={"your password isn't strong enough "}   placeholder="password" type={'password'} />
          </FormController>
                <Button valid={valid} px="1rem" size='1.5rem' color='white' background='primary'>
                  {isLoading && < BeatLoader  size={8} color="white"/>}
                  {!isLoading && 'login'}
                </Button>
                {error && <h1>please try again</h1>}
              </Form>
              <GoToSignUp to='/signup'>create an account ? </GoToSignUp>
            </LoginFormWrapper>

        </LoginPage> 

}
        

export default Login;
