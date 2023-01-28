import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLog = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // error
    let erroElement;
    if (error) {
        erroElement = <p className='text-red-500'>{error.message}</p>
    }

    //   loading 
    if (loading) {
        return <button className="btn btn-square loading ml-40"></button>;
    }

    //   user 
    if (user) {
        navigate(from, { replace: true });
    }

    // google login 


    return (
        <div>
            <input onClick={() => signInWithGoogle()} className='btn btn-neutral w-full' type="submit" value="Sign In With Google" />
        </div>
    );
};

export default SocialLog;