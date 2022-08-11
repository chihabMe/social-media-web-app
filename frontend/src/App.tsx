import React, { useContext } from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Post from './pages/post';
import Header from './components/Layout/Header/Header';
import Signup from './pages/signup';
import Logout from './pages/logout';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthContext } from './context/auth-context';
import GlobalStyles from './styles/global';
import styled, {ThemeProvider} from 'styled-components'
import {useState} from 'react'
import {lightTheme,darkTheme} from './utils/theme'
import HomeLeftSide from './components/home-left';
import HomeRightSide from './components/home-right';
import Profile from './pages/profile/index';
import { mediaSm } from './styles/sizes';
let themeName = localStorage.getItem('theme')
let initLight:boolean;
  if(themeName){

    if(themeName=='dark'){
      initLight=false
    }
  }else{

      initLight=true
  }
function App() {
  const {isLogged} = useContext(AuthContext)
  const [light,setLight]= useState(initLight)
  const changeTheme = ()=>{
    setLight(prev=>{
      let value = !prev;
      localStorage.setItem('theme',value?"light":'dark')
      return value;
    })
  }
  return (
    <ThemeProvider theme={light? lightTheme:darkTheme}>
    <AppContainer className="App">
      <GlobalStyles />
      {isLogged &&<Header changeTheme={changeTheme}/>}

        <Routes>
          <Route path='/' element={<WrapperComponent Element={Home} />}/>

          <Route path='/profile' >
            <Route path='' element={<WrapperComponent Element={Profile} /> } />
            <Route  path=':username' element={<WrapperComponent Element={Profile} /> } />

          </Route>
 
          <Route path='/post/:slug' element={<PrivateRoute children={<Post/>}/>}/>
          <Route path='/login'  element={<Login/>} />
          <Route path='/signup'  element={<Signup/>} />
          <Route path='/logout'  element={<Logout/>} />
        </Routes>
    </AppContainer>

    </ThemeProvider>
  );
}
const WrapperComponent:React.FC<{Element:any}> = ({Element}) =>{

  return  <PrivateRoute>
          <ContentWrapper>
        <HomeLeftSide/>
        <Element/>
        <HomeRightSide/>
      </ContentWrapper>
  </PrivateRoute>
}
const ContentWrapper = styled.div`
  width:100%;
   display :flex ;
   justify-content: space-between;
   gap:1rem;
   padding:0 2rem;
`
const AppContainer = styled.div`
width:100%;
max-width:1400px;
min-height: 100vh;
margin:0 auto;
background-color: ${props=>props.theme.bgSoft};
   @media ${mediaSm}{
    display: flex;
   }
`
export default App;
