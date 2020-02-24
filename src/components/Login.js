
import React, { Component } from 'react'
import Sorry from './Sorry';
import Welcome from './Welcome';
import {Router, Route,browserHistory} from 'react-router';
// import {  Link, browserHistory, IndexRoute } from 'react-router'

//import {Link} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';
class Login extends Component {
            
    state = {

        values : {

            email : "",
            password : ""
        },

        errors : {
            email : [],
            password : []
        },
        wasValidated : false
    };        
    
    emailRef = React.createRef();
    passwordRef = React.createRef();


    onSignUp = (ev) => {
        console.log(1);
        ev.preventDefault();
    }

    update = (event) => {
        console.log("update");

        const newValues = {
            ...this.state.values,
            [event.target.name]: event.target.value
        };
        

        this.setState(
            curState => ({
                ...curState,
                values: newValues
            }),
            this.validate
        );
        console.log("update ended");
    }

    validate = () => {
        console.log("Validate()")    
        const errors = {
            
            email : [],
            password :[]
        };

        

        var noError = true;

        if(this.emailRef.current.value.length < 10 && this.emailRef.current.value.length > 25){
            noError = false;
            errors.email.push("Please provide a Valid Email ID");
        }
        
        if(this.passwordRef.current.value.length < 2 || this.passwordRef.current.value.length > 15){
            noError = false;
            errors.password.push("Please provide a Valid Password");
        }

        var emailVal = this.emailRef.current.value;
        var passVal = this.passwordRef.current.value;

        this.setState ({
            ...this.state,
            errors: errors,
            wasValidated : true
        });

        console.log("NoError ",noError);
        if (noError) {
            try {

                this.fetchData(emailVal,passVal);
            }
            catch{
                alert("Email is Wrong !!!!!");
            }
            // ReactDOM.render(<Login />, document.getElementById('root'))
        }
        
    }

    fetchData = (a,b) => {
        var m = JSON.parse(localStorage.getItem(a));
        console.log(typeof(m.password === b));
        try{
        if ((m.password === b)&& (m.email === a)){
            console.log("m.password",m.password);
            //<Redirect to="/welcome" />
            ReactDOM.render(<Welcome />,document.getElementById('root'))
        }
        else{
           
            alert("Password is Wrong !!!!!!");        
            
        }
    }
    catch (err){

        
    }
        
    }

    isValid = () => {

        console.log("isValid()");
        const {email,password} = this.state.errors;
//KINDLY CHANGE THIS CONDITION ALSO
        return email.length === 0 && password.length === 0 
    }


///RENDER
    render() {
        return (
            <div>
                <form align = "center">
                <br/>
                <br/><br/><br/>    
                
                <label for =  "email">Email </label>
                <input type = "text" name = "email" id = "email" className={`form-control ${this.state.errors.email.length === 0 ? `is-valid` : `is-invalid`}`} ref={this.emailRef} />
                        <div className="invalid-feedback">
                            {this.state.errors.email.map( error => <div>{error}</div>)}
                        </div>
                <br/><br/>
                <label for =  "password">Password </label>
                <input type = "password" name = "password"id = "password"className={`form-control ${this.state.errors.password.length === 0 ? `is-valid` : `is-invalid`}`} ref={this.passwordRef} />
                        <div className="invalid-feedback">
                            {this.state.errors.password.map( error => <div>{error}</div>)}
                        </div>
                <br/>
                <br/>
                <br/><br/><br/>
                <input type = "button" onClick = {this.update} value = "Login" />          
                
                
            </form>
            </div>
        );
    }
}

export default Login;


