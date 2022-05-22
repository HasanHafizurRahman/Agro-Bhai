import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-title">PLEASE LOGIN</div>
            <form className="login-form">
                <input type="text" placeholder="Your Email"/>
               
                <input type="password" placeholder="password" />
                
                <button>Login</button>

              

                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>

            <button>Google Login</button>
        </div>
    );
};

export default Login;