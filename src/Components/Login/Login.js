import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../hooks/useToken';

const Login = () => {


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token] = useToken(user)

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    if(user){
        navigate(from, {replace: true});
    }

    if(loading){
        return <Loading></Loading>
    }

    let errorElement 
    if (error) {
         errorElement = <p>Error: { error.message }</p>
          
      }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className="login-container">
            <div className="login-title">PLEASE LOGIN</div>
            <form onSubmit={handleSubmit} className="login-form">
                <input ref={emailRef} type="text" placeholder="Your Email"/>
               
                <input ref={passwordRef} type="password" placeholder="password" />
                <input type="submit" style={{ color: 'white', background: '#f6d860', height: '40px', borderRadius: '20px', cursor: 'pointer', fontWeight: '900', boxShadow: '3px 3px 3px #cbced1, -3px -3px 3px #beaef4', transition: '0.5s', marginTop: '19px' }} value="Login" />
                
            </form>
            {errorElement}
                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
            
        </div>
    );
};

export default Login;