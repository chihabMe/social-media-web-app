import {Button} from  '../../styles/Button';
import {FadeLoader} from 'react-spinners';
import {Form,FormController,Label} from '../../styles/Form';
import {SignUpTitle,SignupPage,SignUpFormWrapper, GoToLogIn} from './styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { FormEvent, useContext,useEffect,useState } from 'react';
import Spinner from '../../components/UI/Spinner';
import Input from '../../components/UI/Input';
import { globalValidator } from '../../utils/validators'
import { baseApiUrl } from '../../utils/globals';
import styled from 'styled-components';
import { redColor } from '../../styles/colors';
import { convertCompilerOptionsFromJson } from 'typescript';
const Signup :React.FC = ()=>{
  const [username,setUserName]= useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]= useState("")
  const [password2,setPassword2]= useState("")

  const [validUsername,setValidUsername]= useState(false)
  const [validPassword,setValidPassword]= useState(false)
  const [validPassword2,setValidPassword2]= useState(false)
  const [validEmail,setValidEmail]= useState(false)
  const [isLoading,setIsLoading]= useState(false)
  const [errors,setErrors]= useState<any>(null)
  const navigate = useNavigate()
  const [valid,setValid]= useState(false)

    const signup = async (username:string,password:string,password2:string,email:string)=>{

        setErrors(null)
        setIsLoading(true)
        let config = {
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({username,password,password2,email})
        }
        let response;
        try{

         response = await fetch(`${baseApiUrl}/users/registration/`,config)
        if(!response.ok){
            throw new Error("there is a problem during registration")
        }
        const data = await response.json()
        navigate('/login')
        }catch(err){
          let errors =  await response?.json()
            setErrors(errors)
        }
        setIsLoading(false)
        
    }


  useEffect(()=>{
    let check = validUsername&&validPassword&&validEmail&&validPassword2
    setValid(check)
  },[validUsername,validPassword,validEmail,validPassword2])
  const submitHandler = (e:FormEvent)=>{
    e.preventDefault()
    if(!valid)return
    signup(username,password,password2,email)
  }

  let errorJsx = []
  for(let key in errors){
    let element = <ErrorMessage>{errors[key]}</ErrorMessage>
    errorJsx.push(element)
  }
  return <SignupPage>

            <SignUpFormWrapper>
              <SignUpTitle>
                Sign up
              </SignUpTitle>
              <Form onSubmit={submitHandler}>
        <FormController>
            <Input valid={validUsername}  setValid={setValidUsername} value={username} setValue={setUserName} validator={globalValidator} errorMessage={"your username isn't long enough "}   placeholder={"enter your username"} type={"text"} />
          </FormController>
        <FormController>
            <Input valid={validEmail}  setValid={setValidEmail} value={email} setValue={setEmail} validator={globalValidator} errorMessage={"your username isn't long enough "}   placeholder={"enter your username"} type={"text"} />
          </FormController>
      <FormController>
            <Input valid={validPassword} setValid={setValidPassword} value={password} setValue={setPassword} validator={globalValidator} errorMessage={"your password isn't strong enough please use more the 8 characters   "}   placeholder="password" type={'password'} />
          </FormController>
      <FormController>
            <Input password={password} valid={validPassword2} setValid={setValidPassword2} value={password2} setValue={setPassword2}  validator={globalValidator} errorMessage={"password do not match"}   placeholder="password" type={'password'} />
          </FormController>
              <FormController>

              </FormController>
              <FormController>
                {errorJsx}
              </FormController>

                <Button valid={valid} px="1rem" size='1.5rem' color='white' background='primary'>
                  sign up
                </Button>
              </Form>
              <GoToLogIn to='/login'>do you have an account ? </GoToLogIn>
            </SignUpFormWrapper>

        </SignupPage> 

}
        


const ErrorMessage = styled.h3`
    color:${redColor};


`
export default Signup;
