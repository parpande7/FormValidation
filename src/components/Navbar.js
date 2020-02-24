//rsf
import React from 'react';
//import SignUp from './SignUp'
import {Link} from 'react-router-dom';
//import Login from './Login'
function Navbar(props) {
    return (
        <div align = 'center'>

            <Link className = "nav-link" to="/" align = 'center'>Home </Link> 
            <br/>
            <br/>

           <Link className = "nav-link" to="/signup" align = 'center'>SignUp </Link>

            <br/>  
            
            <Link className = "nav-link" to="/login" align = 'center'>Login </Link>
        </div>
    );
}

export default Navbar;  