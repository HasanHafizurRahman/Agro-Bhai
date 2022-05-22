import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className="login-container">
            <div className="login-title">PLEASE SIGNUP</div>
            <form className="login-form">
                <input type="text" placeholder="Your Email"/>
               
                <input type="password" placeholder="password" />
                
                <button>Signup</button>

              

                <p>Already signed up? <Link to="/login">Please Login</Link> </p>
            </form>

            <button>Google Login</button>
        </div>
    );
};

export default SignUp;