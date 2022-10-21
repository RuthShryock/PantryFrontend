import React, {Component} from 'react';
import './SignUp.css';
import Login from "./FrontEnd"

export default class SignUp extends Component{
    
    render(){
        // Forgot password, e-mail verification
        return(
            <div className="loginDiv">
                <div className="form">
                    <h1>SIGN UP</h1>
                    <input placeholder="first name"></input>
                    <br/>
                    <input placeholder="last name"></input>
                    <br/>
                    <input placeholder="e-mail"></input>
                    <br/>
                    <input placeholder="password"></input>
                    <br/>
                    <input placeholder="confirm password"></input>
                    <br/><br/>
                    <button>signup</button>
                    <br/><br/>
                    <text>Already Registered? </text><a href='/login'>Login</a>
                </div>
            </div>
        );
    }
}