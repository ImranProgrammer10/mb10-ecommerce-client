 
import React, { useEffect, useState } from 'react';
 
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillDelete } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
 

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [reload, setReload] = useState(false);
    const [orders, setOrders] = useState([]);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        fetch(`https://mb10-ecommerce-server-imranprogrammer10.vercel.app/order?email=${user.email}`, {
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
    const handleNameBlur = event =>{
        setName(event.target.value);
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
     
        fetch(' https://mb10-ecommerce-server-imranprogrammer10.vercel.app/shipping',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(shipping)
          })
          
          .then(res=>res.json())
          .then(data=>{
            
            if(data.acknowledged){
              toast(`Success`)
            }
            else{
                toast(`Order confirm `)
            }
            navigate(`/`)
            
           
            // to close the modal
           
          
          
          })
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
                    
export default MyOrders;