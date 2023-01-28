import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { ImProfile } from 'react-icons/im';
import { FaListAlt } from 'react-icons/fa';
import { HiOutlineViewList } from 'react-icons/hi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdBookmarkBorder, MdPreview, MdProductionQuantityLimits } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../firebase.init';

const Dhashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='bg-'>
            <div className=''>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* <!-- Page content here --> */}
                        {/* <h1 className="font-bold text-4xl">Main page</h1> */}
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-56  text-nutral bg-primary">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link to='/dashboard'><ImProfile></ImProfile>My Profile</Link></li>
                            <li><Link to='/dashboard/order'><span className='text-xl'><MdBookmarkBorder></MdBookmarkBorder></span> Orders</Link></li>
                            <li><Link to='/dashboard/review'><span className='text-xl'><MdPreview></MdPreview></span> Review</Link></li>
                             { admin && <li><Link to='/dashboard/users'><span><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd></span> All Users List</Link></li>}
                             { admin && <li><Link to='/dashboard/manageProducts'><span><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd></span>  All Products</Link></li>}
                            {admin && <li><Link to='/dashboard/addProduct'><span className='text-xl'><HiOutlineViewList></HiOutlineViewList></span> Add Product</Link></li>}
                            {admin && <li><Link to='/dashboard/allOrder'><span className='text-xl'><MdProductionQuantityLimits></MdProductionQuantityLimits></span> ALL Order</Link></li>}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dhashboard;