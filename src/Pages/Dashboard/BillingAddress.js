import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const BillingAddress = () => {
    const [user, loading] = useAuthState(auth);
    const [reload, setReload]=useState(false);
    const [users, setUsers] = useState({});
    useEffect(() => {
        fetch('https://mb10-ecommerce-server-imranprogrammer10.vercel.app/shipping')
          
       
            .then(res => res.json()).then(data =>  setUsers(data))
    }, [reload])

 
    if(loading){
        <Loading></Loading>
    }

  return (
    <div>
        <h2>Address</h2>
        {
            users.map(user=>
            <li>{user.phone}</li>
            )
        }
    </div>
  )
}

export default BillingAddress;