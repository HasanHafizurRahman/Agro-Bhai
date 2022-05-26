import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [token] = useToken(user)

    let errorElement 
    if (error) {
         errorElement = <p>Error: {error.message}</p>
      }
      if(loading){
          return <Loading></Loading>
      }
      if(user){
        navigate('/')
      }
    
    
    
    
    return (
        <div>
            <div class="flex flex-col w-full border-opacity-50">

                <div class="divider">OR</div>
                
            </div>
            {errorElement}
        <button style={{background: 'rgba(255, 255, 255, 0.726)', borderRadius: '20px', cursor: 'pointer', fontWeight: '900', boxShadow: '3px 3px 3px #cbced1, -3px -3px 3px white', transition: '0.3s' }} className='btn btn-info text-primary' onClick={() => signInWithGoogle()} >
        {/* <FcGoogle/> */}
            <span>Sign In With Google</span>
            </button>
        
        </div>
    );
};

export default SocialLogin;