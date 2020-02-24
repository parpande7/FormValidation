import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import { Router} from 'react-router';
import Login from './Login'
import SignUp from './SignUp';

class Sorry extends Component {
    render() {
        return (
            <Router >

            <div align = "center">
                <h1>
                Sorry Wrong Response Kindly try it again
                </h1>
                <Link className = "nav-link" to="/signup" align = 'center'>SignUp </Link>

            <br/>  
            
            <Link className = "nav-link" to="/login" align = 'center'>Login </Link>

                <br/><br/><br/><br/>
                <Route path = "/signup" exact  component = {SignUp}/>
                <Route path = "/login" exact  component = {Login}/>
                
            </div>

            </Router>
        );
    }
}

export default Sorry;