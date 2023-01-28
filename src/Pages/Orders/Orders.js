 import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { AiFillDelete } from 'react-icons/ai';
 
 const Orders = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [reload, setReload] = useState(false);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
              
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()

            })
            .then(data => {
                setOrders(data)
            })
    }, [reload])

    // delete 
    const handleDelete = id => {
        console.log(id)
        const procced = window.confirm('Confirm Now');
        if (procced) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setReload(!reload)
                })
        }
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
                            <th>piece</th>
                            <th>Entry Date</th>
                            <th></th>
                            <th>Order Now</th>
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
                                            <div className="font-bold">{order.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{order.email}</td>
                                <td>
                                    <button className="">{order.count}</button>
                                </td>
                                <td>
                                    <button className="">{order.date}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-ghost btn-xs text-2xl"><AiFillDelete></AiFillDelete></button>
                                </td>
                                <td>
                                    {(order.count && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-ghost bg-primary btn-xs">pay</button></Link>}
                                    {(order.count && order.paid) && <Link to={``}><button className="btn btn-ghost bg-primary btn-xs">paid</button></Link>}
                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

 
 export default Orders