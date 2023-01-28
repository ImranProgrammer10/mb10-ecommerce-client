import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Headers = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    if (loading) {
        return <Loading></Loading>;
    }
    const nav = <>
        <li><Link to='/home' >Home</Link></li>
        {/* <li><Link to='/about' >About</Link></li> */}
        <li><Link to='/shop' >Shop</Link></li>
        {/* <li><Link to='/blog' >Blog</Link></li>
        <li><Link to='/reviews' >Coustomers Reviews</Link></li> */}
        {/* { user && <li><Link to='/booking' > Order</Link></li>} */}
        {user && <li><Link to='/dashboard' >Dhashboard</Link></li>}
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 text-xl p-2 shadow bg-base-100 rounded-box w-52">
              {nav}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">
                        <Link to='/home'><img src="https://htmldemo.net/lukas/lukas/assets/img/logo.png" alt="" /></Link>
                    </a> */}
<div className="w-24 rounded-full  ">
   
<img   src="https://i.ibb.co/cCbSQqt/photo-1.jpg" alt="" />
</div>
                    
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-xl">
          {nav}
          </ul>
        </div>
        <div className="navbar-end">
        <ul className='text-xl'>
                        <li>{user ? <p onClick={logout} className='font-xl'>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full">
                                    {user.photoURL ? <img src={user?.photoURL} alt='' /> : <p>{user?.displayName}</p>}
                                </div>
                            </label>
                        </p> : <Link to='/signin' >Login</Link>}</li>
                    </ul>
        </div>
        <div className='navbar-end'>
                    <label htmlFor="my-drawer-2" tabindex="0" className="btn drawer-button btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>
      </div>
    );
};

export default Headers;