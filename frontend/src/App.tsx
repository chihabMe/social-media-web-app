import React, { useContext } from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Post from './pages/post';
import Header from './components/Layout/Header/Header';
import Signup from './pages/signup';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthContext } from './context/auth-context';
import GlobalStyles from './styles/global';
import styled, {ThemeProvider} from 'styled-components'
import {useState} from 'react'
import {lightTheme,darkTheme} from './utils/theme'

function App() {
  const {isLogged} = useContext(AuthContext)
  const [light,setLight]= useState(true)
  const changeTheme = ()=>{
    setLight(prev=>!prev)

  }
  return (
    <ThemeProvider theme={light? lightTheme:darkTheme}>
    <AppContainer className="App">
      <GlobalStyles />
      {isLogged &&<Header changeTheme={changeTheme}/>}
        <Routes>
          <Route path='/' element={<PrivateRoute children={<Home/>}/>}/>
          <Route path='/post/:slug' element={<PrivateRoute children={<Post/>}/>}/>
          <Route path='/login'  element={<Login/>} />
          <Route path='/signup'  element={<Signup/>} />
        </Routes>
    </AppContainer>

    </ThemeProvider>
  );
}
const AppContainer = styled.div`
width:100%;
max-width:1400px;
margin:0 auto;
background-color: ${props=>props.theme.bgSoft};
`
export default App;
