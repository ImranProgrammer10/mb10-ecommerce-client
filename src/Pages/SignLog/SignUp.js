import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
 



const SignUp = (props) => {
  
    const [user ,userLoading] = useAuthState(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // email and password 
    const [
        createUserWithEmailAndPassword,
        createUser,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // google authentication 
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    // get user name for 
    const [updateProfile, updating, errorU] = useUpdateProfile(auth);

    // user get 
    const [token] = useToken( user || guser ||createUser )

    // error
    let erroElement;
    if (error || errorU || gerror) {
        erroElement = <p className='text-red-500'>{error?.message} || {errorU?.message} |{gerror?.message}|  </p>
    }

    //   loading 
    if (loading || updating || gloading || userLoading) {
        return <Loading></Loading>;
    }

    //   user 
    if (token) {
        navigate('/')
        // console.log(user || guser);
        // navigate(from, { replace: true });
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        e.preventDefault();
       
       
        // console.log('resule',e);
        const name = e.target.name.value;
      
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        // console.log({name});
    }

    
 



    return (
        <div className=''>
            <div>
                <div className='mb-28'>
                    <div className="lg:h-64 h-48 bg-center text-base-100 
            grid justify-items-center items-center
            bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')]">
                        <div><h1 className='font-bold text-4xl mb-3'>Register</h1>
                            <h1 className='font-bold text-xl'>
                                <Link to='/home'><span>Home</span></Link>
                                <span className='text-secondary'> SignIn</span></h1></div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-full bg-base-100 lg:px-96 gird justify-items-center">
                    <form onSubmit={handleSignUp}>
                        <div className="card-body border shadow">
                            <input name='name' type="name" required placeholder="User Name" className="input input-bordered w-full mb-3 lg:mt-12 mt-5" />
                             
                            <input name='email' type="email" required placeholder="Email" className="input input-bordered w-full mb-5" />
                            <input name='password' type="password" required placeholder="Password" className="input input-bordered w-full mb-5" />
                            {erroElement}
                            <input className='btn btn-neutral w-full' type="submit" value="LOGIN" />
                            <p>Have Account? <span className='mb-5 text-secondary'><Link to='/signin'>Login Please</Link></span></p>
                            <input onClick={() => signInWithGoogle()} className='btn btn-neutral w-full' type="submit" value="Sign In With Google" />
                            <p className='lg:mb-12'></p>
                        </div>
                    </form>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;