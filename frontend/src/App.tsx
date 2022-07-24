import React from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Signup from './pages/signup';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<PrivateRoute children={<Home/>}/>}/>
          <Route path='/login'  element={<Login/>} />
          <Route path='/signup'  element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default App;
