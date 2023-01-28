import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillDelete } from 'react-icons/ai';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
const Users = () => {

    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()).then(data => setUsers(data))
    }, [reload])

 
    if(loading){
        <Loading></Loading>
    }

    // makeadmin 
    const makeAdmin = (email) => {
        setReload(true);
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status === 403){
                toast.error('Faild to make and admin');
            }
            return res.json()})
        .then(data=>{
            console.log(data)
            setReload(!reload)
            toast.success('make admin')
          
        })
    }

    // handle delete 
    const userDelete = id => {
        const procced = window.confirm('Delete your coustomer');
        if (procced) {
            const url = `http://localhost:5000/users/${id}`;
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
            {<div className="overflow-x-auto w-full rounded-none ">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                            <th>Email</th>

                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            users?.map(order => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{order.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {order.role !== 'admin' && <button onClick={()=>makeAdmin(order.email)} className="btn btn-ghost bg-primary btn-xs">Make Admin</button>}
                                </td>
                                <td>
                                    <button onClick={() => userDelete(order._id)} className="btn btn-ghost btn-xs text-2xl"><AiFillDelete></AiFillDelete></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>}
        </div>
    );
};

export default Users;