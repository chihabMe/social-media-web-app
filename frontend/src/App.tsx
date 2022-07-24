import React from 'react';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import {Route,Routes,BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path=''  element={<Login/>} />
          <Route path='/login'  element={<Login/>} />
          <Route path='/signup'  element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default App;
