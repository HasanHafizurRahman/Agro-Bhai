import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../hooks/useToken';


const SignUp = () => {
   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth)
      const [token] = useToken(user)
      
      const navigate = useNavigate();

      if(user){
          navigate('/')
      }
      if(loading || updating){
          return <Loading></Loading>
      }
      let signInError;
      if(error || updateError){
          signInError= <p className='text-red-500'><small>{error?.message || updateError?.message}</small></p>
      }
    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="login-container">
            <div className="login-title">PLEASE SIGNUP</div>
            <form className="login-form" onSubmit={handleSignup}>
                <input type="text" name='name' placeholder="Your Name" required/>
                <input type="text" name='email' placeholder="Your Email" required/>
               
                <input type="password" name='password' placeholder="password" required/>
                {signInError}
                
                <input type="submit" style={{ color: 'white', background: '#f6d860', height: '40px', borderRadius: '20px', cursor: 'pointer', fontWeight: '900', boxShadow: '3px 3px 3px #cbced1, -3px -3px 3px #beaef4', transition: '0.5s', marginTop: '19px' }} value="SignUp" />
            
            </form>
            <p>Already signed up? <Link to="/login">Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;