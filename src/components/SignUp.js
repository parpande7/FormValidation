//import {Link} from 'react-router-dom';
//import { render } from 'react-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Login from './Login';
import "./SignUp.css";

class SignUp extends Component {    



    state = {

        emailValue : "",

        values  : {

            fname : "",
            lname : "",
            age : '',
            password : '',
            cpassword : '',
            email :"",
            mobile: ""

        },

        errors : {

            fname : [],
            lname : [],
            age : [],
            password : [],
            cpassword : [],
            email :[],
            mobile: []

        },
        wasValidated : false

    };

    fnameRef = React.createRef();
    lnameRef = React.createRef();
    ageRef = React.createRef();
    passwordRef = React.createRef();
    cpasswordRef = React.createRef();
    emailRef = React.createRef();
    mobileRef = React.createRef();
    
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
            fname : [],
            lname : [],
            age : [],
            password :[],
            cpassword : [],
            email : [],
            mobile :[]
        };
        var noError = true;
        console.log(this.fnameRef.current.value.length);
        if(this.fnameRef.current.value.length < 2 || this.fnameRef.current.value.length > 15){
            noError = false;
            errors.fname.push("Invalid First Name");
        }
        if(this.lnameRef.current.value.length < 2 || this.lnameRef.current.value.length > 15){
            noError = false;
            errors.lname.push("Invalid Second Name");
        }

        if(parseInt(this.ageRef.current.value) < 18){
            noError = false;
            errors.age.push("Please Select a Valid Age");
        }

        if(this.passwordRef.current.value.length < 2 || this.passwordRef.current.value.length > 15){
            noError = false;
            errors.password.push("Please provide a Valid Password");
        }

        if(this.cpasswordRef.current.value !== this.passwordRef.current.value ){
            console.log(this.cpasswordRef.current.value === this.passwordRef.current.value);
            noError = false;
            errors.cpassword.push("Confirm Password does not match the Password");
        }
        var emailVal = this.emailRef.current.value;
        var jsonValue = {fname:this.fnameRef.current.value,age:this.ageRef.current.value,password : this.passwordRef.current.value,email : this.emailRef.current.value}
        
        if(this.emailRef.current.value.length < 10 && this.emailRef.current.value.length > 25){
            noError = false;
            errors.email.push("Please provide a Valid Email ID");
        }
        // if(parseInt(this.mobileRef.current.value) < 6000000000 && parseInt(this.mobileRef.current.value) > 9999999999){
        //     noError = false;
        //     errors.mobile.push("Please provide a Valid Mobile number");
        // }



        this.setState ({
            ...this.state,
            errors: errors,
            wasValidated : true
        });

        console.log("NoError ",noError);
        if (noError) {

            this.storeData(emailVal,jsonValue);
            ReactDOM.render(<Login />, document.getElementById('root'))
        }
        
    
        
    }

    storeData = (a,b) =>{
        console.log("storeData");
        // console.log(this.emailRef.current.state.value);
        // console.log(this.passwordRef.current.state.value);
        localStorage.setItem(a,JSON.stringify(b));        
        //ReactDOM.render(<Login />, document.getElementById('root'));
        
    }   

    fetchData = (a) => {
        var m = JSON.parse(localStorage.getItem(a));
        console.log(typeof(m.password));

        
        console.log("fetch data is called");
    }

    isValid = () => {

        console.log("isValid()");
        const {fname,lname,age,password,cpassword,email,mobile} = this.state.errors;
//KINDLY CHANGE THIS CONDITION ALSO
        return fname.length === 0 && lname.length === 0&& age.length === 0&& password.length === 0&& cpassword.length === 0&& email.length === 0 && mobile.length === 0 

    }

    render(){
    
    return (
        <div>
            
            <form className = {`form-horizontal ${this.state.wasValidated ? 'was-validated' : ''}`} onSubmit = {this.onSignUp} align = "center">                                                
            <table>

            <tr>
                <br/>
                <br/><br/><br/>    
               <td> <label for =  "fname">First Name </label>
                <input type = "text" name = "fname" id = "fname"className={`form-control ${this.state.errors.fname.length === 0 ? `is-valid` : `is-invalid`}`} ref={this.fnameRef} />
                        <div className="invalid-feedback">
                            {this.state.errors.fname.map( error => <div>{error}</div>)}
                        </div>
                        </td>      
                </tr>
                <br/><br/>
                <tr>
                
                <td><label for =  "lname">Last Name </label>
                <input type = "text" name = "lname" id = "lname"className={`form-control ${this.state.errors.lname.length === 0 ? `is-valid` : `is-invalid`}`} ref={this.lnameRef} />
                        <div className="invalid-feedback">
                            {this.state.errors.lname.map( error => <div>{error}</div>)}
                        </div>
                        </td>
                </tr>
                
                <br/><br/>
                <tr>

                <td><label for =  "age">Age </label>
                <input type = "text" name = "age"id = "age"className={`form-control ${this.state.errors.age.length === 0 ? `is-valid` : `is-invalid`}`} ref={this.ageRef}  />
                        <div className="invalid-feedback">
                            {this.state.errors.age.map( error => <div>{error}</div>)}
                        </div>
                        </td>
                </tr>
                <tr>
                   <td>
                <br/><br/>
                <label for =  "password">Password </label>
                <input type = "password" name = "password" id = "password"className={`form-control ${this.state.errors.password.length === 0 ? `is-valid` : `is-invalid`}`} ref={this.passwordRef} />
                        <div className="invalid-feedback">
                            {this.state.errors.password.map( error => <div>{error}</div>)}
                        </div>
                </td> 
                </tr>
                <br/><br/>
                <td>
                    <tr>

                    </tr>
                </td>
                <label for =  "cpassword">Confirm Password </label>
                <input type = "password" name = "cpassword" id = "cpassword"className={`form-control ${this.state.errors.cpassword.length === 0 ? `is-valid` : `is-invalid`}`} ref={this.cpasswordRef}  />
                        <div className="invalid-feedback">
                            {this.state.errors.cpassword.map( error => <div>{error}</div>)}
                        </div>
                <br/><br/>
                <label for =  "email">Email </label>
                <input type = "text" name = "email"id = "email"className={`form-control ${this.state.errors.email.length === 0 ? `is-valid` : `is-invalid`}`} ref={this.emailRef}  />
                        <div className="invalid-feedback">
                            {this.state.errors.email.map( error => <div>{error}</div>)}
                        </div>
                <br/><br/>
                <label for =  "mobile">Mobile Number </label>
                <input type = "text" name = "mobile"id = "mobile"className={`form-control ${this.state.errors.mobile.length === 0 ? `is-valid` : `is-invalid`}`} ref={this.mobileRef}  />
                        <div className="invalid-feedback">
                            {this.state.errors.mobile.map( error => <div>{error}</div>)}
                        </div>
                <br/><br/>
                <br/><br/><br/>
                
                <input type = "button" onClick = {this.update} value = "Sign up" />

                
                
            </table>    
            </form>
        </div>
    );
    }
}

export default SignUp;

