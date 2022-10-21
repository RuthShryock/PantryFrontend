import React, {Component} from 'react';
import './FrontEnd.css';

export default class FrontEnd extends Component{

    render(){
        // Forgot password, e-mail verification
        return(
            <div className="loginDiv">
                <div className="form">
                    <h1>LOGIN</h1>
                    <input placeholder="username"></input>
                    <br/>
                    <input placeholder="password"></input>
                    <br/><br/>
                    <button>login</button>
                    <br/><br/>
                    <text>Not registered? </text><a href="/signup">Sign Up</a>
                </div>
            </div>
        );
    }
}