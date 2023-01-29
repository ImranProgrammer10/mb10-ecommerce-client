import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillDelete } from 'react-icons/ai';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from './../Shared/Loading';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload]=useState(false);
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
 
 
    useEffect(() => {
        fetch('https://mb10-ecommerce-server-imranprogrammer10.vercel.app/order/admin')
            .then(res => res.json()).then(data => setOrders(data));
    }, [reload])
    // delete 
    const handleDelete = id => {
        const procced = window.confirm('Confirm Now');
        if (procced) {
            const url = `https://mb10-ecommerce-server-imranprogrammer10.vercel.app/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setReload(!reload)
                })
        }
    }

    
   

 
    if(loading){
        <Loading></Loading>
    }
 
    return (
        <div>
            <div className="overflow-x-auto w-full rounded-none">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>piece</th>
                            <th>Entry Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            orders.map(order => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <a href={order.img}><img src={order.img} alt="Avatar Tailwind CSS Component" /></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order.Product}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                 
                               
        
                                     
                               
                                <td>
                                    <button className="">{order.count}</button>
                                </td>
                                <td>
                                    <button className="">{order.date}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-ghost btn-xs text-2xl"><AiFillDelete></AiFillDelete></button>
                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllOrders;