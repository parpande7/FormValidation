import React from 'react';
import Navbar from './Navbar';
import {Route} from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp';
import '../App.css';
import MainPage from './MainPage';


function App() {
  return (
    <div>
        <Navbar />
        <div className = "cointainer my-4">
        <Route path = "/" exact  component = {MainPage}/>
        <Route path = "/signup" exact  component = {SignUp}/>
        <Route path = "/login" exact  component = {Login}/>
      
            
                  
            </div>


        
    </div>
  );
}

export default App;
