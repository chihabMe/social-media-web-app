import React, { useContext } from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Header from './components/Layout/Header/Header';
import Signup from './pages/signup';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthContext } from './context/auth-context';



function App() {
  const {isLogged} = useContext(AuthContext)
  return (
    <div className="App">
      {isLogged &&<Header/>}
        <Routes>
          <Route path='/' element={<PrivateRoute children={<Home/>}/>}/>
          <Route path='/login'  element={<Login/>} />
          <Route path='/signup'  element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default App;
